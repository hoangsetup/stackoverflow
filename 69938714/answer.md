Your `loggerInstance` and the `logger` in the production code are not the same references. `logger` variable will be created right after you import `myFunction`, then you have to get this Logger instance instead of trying to mock another instance.

To do it, you can [get a mock instance by jest][1]:

```ts
import { myFunction } from './index'; // a mocked logger already created
import Logger from './logger';

jest.mock('./logger'); // mock it

describe('myFunction', () => {
  let logger: jest.Mocked<Logger>;

  beforeEach(() => {
    logger = (Logger as jest.Mock).mock.instances[0]; // get the mocked instance
  });

  it('should call Logger.log function with "Hello"', () => {
    myFunction(); // action

    expect(logger.log).toBeCalledWith('Hello'); // expectation
  })
});
```

You create a dependency (logger) in a high component (`myFunction`), this is an anti dependence injection pattern, which makes your code become hard to test. You can try module pattern, just `export default new Logger()` instead of `export default class Logger...`


  [1]: https://jestjs.io/docs/mock-function-api#mockfnmockinstances
