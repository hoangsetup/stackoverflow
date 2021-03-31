Yes, you have to close the connection, because the nodejs process will no finish when still have something is listening (db connection).

The data be not saved to the database, I guess you close db connection before the `save` action finish (you use callback style right here ??? The `await` keyword just affects with a `Thenable` object like a Promise).

```js
...
await transaction.save(); // don't put callback as a parameter, save will return a Promise
await db.close(); // close connection
```

