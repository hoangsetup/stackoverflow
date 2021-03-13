import { getA, getB, getC } from './index';

jest.mock('./index', () => {
  const origin = jest.requireActual('./index');
  return {
    ...origin,
    getA: jest.fn(),
  }
})

describe("getA", () => {
  test('should return new value', () => {
    (getA as jest.Mock).mockReturnValue('AAA');
    expect(getA()).toEqual('AAA');
  });
});
