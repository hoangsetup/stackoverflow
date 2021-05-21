Set your custom attributes are optional attributes.

```ts
interface MyRequest extends express.Request {
    userId?: string; // userId is optional
}
```

In your middleware or request handler, you always need to make sure that the `userId` is not undefined.

```ts
const myMiddlewareFn = (req: MyRequest, res: express.Response) => { // missing next function ?
    if (req.userId) {
        // do something with userId
        req.userId; // <-- this works as a string
    }
}
```
