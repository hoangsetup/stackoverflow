/* eslint-disable */
import SNS from 'aws-sdk/clients/sns';
import { handler } from ".";

const mockPromise = jest.fn();
jest.mock('aws-sdk/clients/sns', () => {
  return jest.fn().mockImplementation(function () {
    this.publish = jest.fn(() => ({
      promise: mockPromise,
    }));
  });
});

describe("handler function", () => {
  it("should publish delete command", async () => {
    const classifiedRequestId = "12345";
    const event = {
      Records: [
        {
          body: JSON.stringify({
            classifiedRequestId,
          }),
        }
      ]
    };

    await handler(event);

    const snsMocked = SNS.mock.instances[0];

    expect(snsMocked.publish).toHaveBeenCalledWith(
      {
        Message: JSON.stringify({
          type: 'DELETE_COMPLETE',
          data: {
            id: classifiedRequestId,
          }
        }),
        TopicArn: process.env.SNS_ARN
      }
    );
    expect(mockPromise).toHaveBeenCalled();
  })
});
