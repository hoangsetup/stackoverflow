import { handler } from './index';
import Usecase from './usecase';
import { mocked } from 'ts-jest/utils';

jest.mock('./usecase');

describe('Test', () => {
  let usecase: jest.Mocked<Usecase>;

  beforeAll(() => {
    usecase = mocked(Usecase).mock.instances[0] as jest.Mocked<Usecase>;
  });

  it('Test', async () => {
    // GIVEN
    const event = {};

    // WHEN
    await handler(event);

    // THEN
    expect(usecase.submitTaxes).toHaveBeenCalled(); // fails with no calls
  });
});
