Use `for-loop` instead of `forEach`, and use `async/await` completely for your example:

```js
fs.readdir('plates', async function (err, files) { // async function, carefully this line, `readdir` still is a callback function
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  for (const file of files) {
    await uploadImageToFtp(file, 'plates/' + file); // wait until it done
    console.log(file);
  }
});
```
