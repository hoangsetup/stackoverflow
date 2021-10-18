`will this be the same mock that index.ts uses?` - No, it is a different instance of `Usecase` mocked class.

Try to get mocked instance that is created in `index.js` file. Reference [link][1].

```ts
import { handler } from './index'; // update this path
import Usecase from './usecase'; // // update this path
import { mocked } from 'ts-jest/utils';

jest.mock('./usecase'); // update this path

describe('Test', () => {
  let usecase: jest.Mocked<Usecase>;

  beforeAll(() => {
    // get the mocked instance
    usecase = mocked(Usecase).mock.instances[0] as jest.Mocked<Usecase>;
  });

  it('Test', async () => {
    // GIVEN
    const event = {};

    // WHEN
    await handler(event);

    // THEN
    expect(usecase.submitTaxes).toHaveBeenCalled();
  });
});
```


  [1]: https://jestjs.io/docs/mock-function-api#mockfnmockinstances
