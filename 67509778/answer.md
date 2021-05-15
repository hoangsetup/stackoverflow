Your code requires more than what you mock.

If you mock


```js
jest.mock("typeorm", () => ({
    __esModule: true,
    getCustomRepository: jest.fn(),
}));
```

Then in you code, `import { Entity} from 'typeorm';`, now `Entiry` is undefined. The same for other attributes except `getCustomRepository`.

You can fix that issue with your first solution, or just mock what you want to mock and return another attribute as actual logic.

```js
jest.mock('typeorm', () => {
  const actual = jest.requireActual('typeorm');
  return {
    ...actual,
    getCustomRepository: jest.fn(),
  }
});

```

Or mock all attributes of `typeorm`:

```js
jest.mock('typeorm');
```
