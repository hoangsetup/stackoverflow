Create a `context` that includes `doSomething` as a mock function.

```ts
let context = { doSomething: jest.fn() };
obj.init(context);

expect(context.doSomething).toHaveBeenCalledWith('profile');
```
