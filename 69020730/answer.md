Currently, at "compile" time, no way to tell `jest` that you are importing a mocked module or actual module. Only you know that `./fooApi` is already mocked.

You can cast by `as` operator as your 1st option. But, if you are working with `ts-jest`, I can suggest a way to cast the `fooApi` type to mock - use `mocked` function from `ts-jest/untils`:

```ts
import { mocked } from 'ts-jest/utils';
import fooApi from './fooApi';

describe('fooApi', () => {
  let fooApiMocked: jest.Mocked<typeof fooApi>;

  beforeEach(() => {
    fooApiMocked = mocked(fooApi);

    // fooApiMocked.createUrl, fooApiMocked.getToken are jest.Mock
  });
});
```
