Your "this" context be changed when you call `get` function.

```js
const api = new API('token_string');

const list = await api.blacklists.get();
```

Now, "this" is `blacklists` (not `api`) because `blacklists` is the caller of the `get` function. But, as you know, `token` belongs to the `api`, not `api.blacklists`.

The solution is using arrow function:

```js
get: async (id, div) => { //dw
```
