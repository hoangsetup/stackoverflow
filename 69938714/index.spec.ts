import { myFunction } from './index';
import Logger from './logger';

jest.mock('./logger');

describe('myFunction', () => {
  let logger: jest.Mocked<Logger>;

  beforeEach(() => {
    logger = (Logger as jest.Mock).mock.instances[0];
  });

  it('should call Logger.log function with "Hello"', () => {
    myFunction();

    expect(logger.log).toBeCalledWith('Hello');
  })
});
