As you can see, your `Login` function reads the `state, code` from the request's query. But, in your test, you send them as a request body. Then maybe the `state, code` be missing then the server throws 400.

Let's try

```js
...
  const response = await supertest(app)
    .get(`/auth/${company}`)
    .query({ // query instead of send
      "state": state,
      "code": code
    }) 
...
```
