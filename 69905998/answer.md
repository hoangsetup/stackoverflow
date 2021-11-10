As you can see, you have `user` (or `token`) data in the `req` object, and I hope your jwt token also includes the user's id. You can use the user id to find their Forums.

According to the router `router.post('/', verifyToken, getOwner);` (`getByOwnerID` ???), let's update `getOwner` handler:

```js
exports.getOwner = function (req, res, next) {
  Forum.find({ createdBy: req.user.userID }) // or something like that
  .then(doc => {
      if(!doc) { return res.status(400).end();}
      return res.status(200).json(doc);
  })
  .catch(err => next(err));
}
```
