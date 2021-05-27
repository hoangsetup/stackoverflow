Just return a promise for `produce` callback function:

In-line version

```js
Promise.resolve({ eggs: 0 }).then(
  produce((eggCounter) => Promise.resolve(5).then((n) => { eggCounter.eggs += n; }))
).then(console.log)
```

Clear version

```js
Promise.resolve({ eggs: 0 }).then(
  produce((eggCounter) => {
    return Promise.resolve(5).then((n) => {
      eggCounter.eggs += n;
    });
  })
).then(console.log);
```
