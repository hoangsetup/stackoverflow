Using `jest.mock` helper to mock `Call` class and assert on instance of the mocked class.

```ts
import { Call } from './somefolder/call';
import { Demo } from './Demo';

jest.mock('./somefolder/call'); // mock all named export items

describe("Demo", () => {
  let demo: Demo;
  let CallMocked: jest.Mock<Call>; // define type for mocked class

  beforeEach(() => {
    CallMocked = Call as any; // Actually, now Call is a mocked class
    demo = new Demo();
  });

  test("Test it", () => {
    demo.testIt();
    expect(CallMocked.mock.instances[0].saveCall).toHaveBeenCalled(); // assert for mock instance
  });
})
```
