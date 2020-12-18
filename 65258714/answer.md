You mixing `async/await` with `callback` style. Your lambda function will finish before the query finish.

As example in [pg document][1] it supports `async/await`:
Instead of `db.connect((err, client, release) => {...`

```ts
const res = await pool.query(query, values);
console.log("INSERT DONE");
await pool.end()
return {
  statusCode: 200
};
```


  [1]: https://node-postgres.com/features/connecting
