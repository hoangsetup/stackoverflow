Wait until the new is created then run the test.

Easiest way - using `async/await`.

Make `createWorkBook` to return a promise:

```js
function createWorkBook(){

    // ...

    return workbook.xlsx.writeFile(filename); // return a promise
}
```

In `function` wait until creating file finished:

```js
// ...
fs.access(filename, async (err) => { // async
  if (err) {
    try {
      await createWorkBook(); // wait
      runTests(); // just runTests when file created successfully
    } catch (error) {
      console.log(error);
    }
  }
  else {
    console.log("File exists");
    runTests();
  }
});
//...
```
