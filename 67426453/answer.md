In `ledger-service.js` you call `new AWS.TimestreamWrite` "before" `module.exports`, this means it will be called with actual logic instead of mock.

The solution is just mock `AWS` before you call `require("./ledger-service");`

**ledger-service.spec.js**

```js
const AWS = require("aws-sdk");

describe("ledger-service", () => {
  let audit;
  let mockWriteRecords;

  beforeEach(() => {
    mockWriteRecords = jest.fn(() => {
      return { promise: () => Promise.resolve() }
    });

    jest.spyOn(AWS, 'TimestreamWrite');
    AWS.TimestreamWrite.mockImplementation(() => ({
      writeRecords: mockWriteRecords
    }));

    audit = require("./ledger-service"); // this line
  });

  afterEach(() => {
    jest.resetModules(); // reset module to update change for each require call
    jest.resetAllMocks();
  });

  it("It should write records when all success", async () => {
    const mockAudit = {
      name: 'testName',
      value: 'testValue',
      userId: 'testUserId',
      entity: 'testEntity',
      action: 'testAction',
      info: 'testInfo',
    };

    await audit.log(mockAudit);

    expect(AWS.TimestreamWrite).toHaveBeenCalledWith({
      maxRetries: 10,
      httpOptions: {
        timeout: 20000,
        agent: expect.any(Object),
      },
    });
    expect(mockWriteRecords).toHaveBeenCalled();
  });
});

```
