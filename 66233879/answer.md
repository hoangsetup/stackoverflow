Just override `.sendStatus` of `res` object.

Register this middleware right after creating the express app:

```js
app.use((req, res, next) => {
  const sendStatus = res.sendStatus.bind(res);
  res.sendStatus = (status) => {
    if (status === 404) {
      return res.status(404).render('404page');
    }
    return sendStatus(status);
  }
  next()
});
```
