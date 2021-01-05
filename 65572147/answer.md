Stop the request when you detect the request is not authenticated.

Add `return` keyword in `if true` block

```js
const checkAuth = (req, res, next) => {
    if (!authenticated){
        return res.status(401).send("You are not authorized to view this content");
    }
    next();
}
```
