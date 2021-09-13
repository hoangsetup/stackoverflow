According to the [document][1] 

> Custom validators may return Promises to indicate an async validation
> (which will be awaited upon), or throw any value/reject a promise to
> use a custom error message.
> 
> Note: if your custom validator returns a promise, it must reject to
> indicate that the field is invalid.

This means just return a Promise for the custom function, you can use Promise syntax (Promise.reject) or `async/await` (throw) to make a invalid result.

Example with Promise.reject:

```js
.custom(value => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT id FROM cat WHERE cat_name = ?", [value], (err, results) => {
      if (err) {
        return reject('Something went wrong!');
      }

      if (results[0].id <= 0) { // ???
        return reject('This category does not exist yet');
      }
      resolve();
    });
  });
})
```

  

[1]: https://express-validator.github.io/docs/custom-validators-sanitizers.html
