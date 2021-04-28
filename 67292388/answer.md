Make `auth` middleware with validating session, remember call `next` function when any is good.

```js
function auth(req, res, next) {
   if (req.session.loggedin) {
       return next(); // call next function to go to next handler
   } else {
      req.session.destory;
      res.redirect('/login')
   }
}
```

Then, apply the middleware for each router that requires authentication:

```js
app.get('/home', auth, (req, res) => { // apply auth before "do code"
   // ... do code ...
})
```
