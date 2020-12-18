Create a closure function, the function will return a callback function for `readFile` function, and the function's param is `res` object.

```ts
router.get("/", function (req, res) {
  fs.readFile("./json/hello.json", root_readFileCallBack(res));
});

function root_readFileCallBack(res) {
  return function (err, file) {
    if (err) {
      res.render("index", {
        json: content
      });
    }
    else {
      content = JSON.parse(file);
      res.render("index", {
        json: content.name
      });
    }
  }
}
```
