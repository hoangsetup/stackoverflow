`PromiseResult` is an object that includes `.promise` as a function. Then, when you want to mock a function to return a `PromiseResult`, the mock data should be an object like `PromiseResult`.

In your case, `mockData` should be:

```ts
let mockData = {
  promise: () => Promise.resolve({ Users: [] }),
} as unknown as PromiseResult<any, AWSError>;
```
