import { Call } from './call';
import { Demo } from './Demo';

jest.mock('./call');

describe("Demo", () => {
  let demo: Demo;
  let CallMocked: jest.Mock<Call>;

  beforeEach(() => {
    CallMocked = Call as any;
    demo = new Demo();
  });

  test("Test it", () => {
    demo.testIt();
    expect(CallMocked.mock.instances[0].saveCall).toHaveBeenCalled();
  });
})
