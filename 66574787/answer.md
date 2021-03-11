You have to set up a handler to handle your request - `GET /privacypolicy`. 

Do the same with what you did for `homepage`:

```js
app.get('/privacypolicy', (req, res) => {
   res.render('privacypolicy');
})
```
