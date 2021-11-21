I guess your route responsibility is getting account information of only A or B. So  let's change your router path to `/account/:name(A|B)`, then your express router will look like this:

```js
router.get("/account/:name(A|B)", async (req, res) => {
    const name = req.params; // A or B
});
```

Only 2 kinds of requests are handled by this router:

```
GET /account/A
or
GET /account/B
```
