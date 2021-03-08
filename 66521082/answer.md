Use `username` instead of `user` to find a user
```
Company.findOne({ username: req.body.user });
```


You are mixing `callback` style with `async/await`, `await` keyword does not affect on your, it will not wait until the query finished. `await` keyword just working when you wait for a `Promise like object` (`then` able object).

I guess you are using `mongoose`, the current version of `mongoose` supports Promise return style.

```js
module.exports.create_user = async function (req, res) {
  // console.log(req.body);
  // console.log(req.user);
  try {
    // Use `username` instead of `user` to find a user
    const user = await Company.findOne({ username: req.body.user }); // callback is not passed, it will return a Promise

    if (user) {
      return res.redirect('/login');
    }

    if (req.body.password == req.body.confirm_password) {
      await Company.create({ // wait until user is created
        "country": req.body.country,
        "username": req.body.user,
        "password": req.body.password
      });

      // then redirect page
      req.session.save(() => {
        return res.redirect('/profile');
      });
    } else {
      console.log('Passwords didnt match');
      // what happen when password didn't match
      // return res.redirect('/login'); ???
    }
  } catch (error) {
    // something went wrong
    // return res.redirect('/login'); ???
  }
}
```
