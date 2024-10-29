Let's register specific routers first, and make sure that priority routes don't cover other routers:

```js
app.use('/wherever/else', r2); // go first
app.use('/wherever', r1); // match any thing like `/wherever/*` except `/wherever/else`
app.use('/elsewhere', r2);
```