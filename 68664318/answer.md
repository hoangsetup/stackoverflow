As `async` [document][1] said:

> Using ES2017 async functions Async accepts async functions wherever we
> accept a Node-style callback function. However, we do not pass them a
> callback, and instead use the return value and handle any promise
> rejections or errors thrown.

If you still pass the `callback` function as the second parameter of `eachSeries `'s callback function, it will not work as expected. Just remove 
`callback` and return the result:

```js
async.eachSeries(myArr, async (arr) => { // remove callback parameter
  const test = await db.collection('coll').findOne({ _id: arr }); // wait the response
  // ...
  return test; // return response
}, function (err) {
  console.log("Done");
});
```

Or just use `for...loop` instead of `eachSeries`:

```js
// inside a async function
for (const i of myArr) {
  const test = await db.collection('coll').findOne({ _id: arr });
  // Do something with `test`
}

console.log("Done");
```

  [1]: https://caolan.github.io/async/v3/
