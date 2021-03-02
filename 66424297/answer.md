`Cluster.launch` return a Promise. If you just call `const cluster = Cluster.launch`, now `cluster` is Promise, when you call `(await cluster).close();`, `(await cluster)` will return a `Cluster` instance -> It work!

Let’s use `cluster` as a `Cluster` instance instead of a Promise object:

```js
  const cluster = await Cluster.launch({ // wait until it "launch" finish
    concurrency: Cluster.CONCURRENCY_BROWSER,
    maxConcurrency: 2,
  });
```
