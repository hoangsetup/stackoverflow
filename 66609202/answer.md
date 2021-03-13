If you only want to mock `getA`, you can use jest mock factory to overwrite `getA` as mocked function, another named exports keep the original logic.

```ts
import { getA, getB, getC } from '../test';

jest.mock('./index', () => {
  const origin = jest.requireActual('../test');
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
```
