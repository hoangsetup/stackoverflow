Your error is a common http error, it has been thrown by `got` not by your server logic.

If you want to assert the response error message, let's try:

```js
expect(error.response.body.message).toEqual("A custom error message of my selection");
```
