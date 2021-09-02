import { mocked } from 'ts-jest/utils';
import fooApi from './fooApi';

describe('fooApi', () => {
  let fooApiMocked: jest.Mocked<typeof fooApi>;

  beforeEach(() => {
    fooApiMocked = mocked(fooApi);

    // fooApiMocked.createUrl, fooApiMocked.getToken are jest.Mock
  });
});
