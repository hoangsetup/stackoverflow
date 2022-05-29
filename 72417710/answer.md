You have to convert `db_request` result to a Promise, and the promise will be resolved when all rows are pushed to the `data`. When you use the `await` keyword, there is no need to handle a promise with `.then` chain.

`main.js` will look like this:

```js
const sqlite3 = require('sqlite3').verbose();
const dbPath = require('path').resolve(__dirname, '../../Fin.db')

ipcMain.on(channel='db-query', async (e, query) => {
  console.log('query received: ' + query)

  try {
    const data = await db_request(query); // remove .then
    console.log('value: ' + data)
    // to send back to renderer.js later
    e.sender.send("db-data", data)
  } catch (error) {
    console.log('error fetching data from db on query:' + query);
    e.sender.send("db-data", []) // send empty data or error ???
  }
})


let db_request = (query) => {
  const db = new sqlite3.Database(dbPath)

  return new Promise((resolve, reject) => { // return a promise
    // I think you dont need serialize for this case
    const data = []
    db.each(query, (err, row) => {
      console.log(err, row)
      if (!err) {
        data.push({"id": row.id, "name": row.name})
      }
    }, (error) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    });
  })
}
```

