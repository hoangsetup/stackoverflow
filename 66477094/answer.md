Use `for loop` instead of `map`. `async/await` will not working as your expectation.

```js
const rows = fs.readFileSync("myCSV.csv", { 
  encoding: 'utf-8'
}).split('\n');
for (const row of rows) {
  await captureMyPage(row[0]);
}
```
