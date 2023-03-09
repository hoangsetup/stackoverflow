Just read csv file completely, call the external api then write output to a new csv file.

```js
const rows = await new Promise((resolve, reject) => {
  const data = [];
  fs
  .createReadStream('./foo.csv')
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', (row) => data.push(row)) // collect row
  .on('end', () => resolve(data)) // return data
  .on('error', (error) => reject(error))
});

const newRows = [];
for (const [col0, col1] of rows) {
  const newCol = await externalAPI(col1); // wait for external api call
  newRows.push([col0, newCol]);
}

stringify(newRows, (err, output) => {
  fs.writeFileSync('demoA.csv', output)
});

```
