`src.pipe` not return a Promise then you can not wait on it. Let's convert it into a Promise:

```ts
function gunzipFile(source: string, destination: string): Promise<void> {
  if (!fileExists(source)) {
    console.error(`the source: ${source} does not exist`);
    return;
  }
  const src = createReadStream(source);
  const dest = createWriteStream(destination);

  return new Promise((resolve, reject) => { // return Promise void
    src.pipe(createGunzip())
      .pipe(dest)
      .on('error', (error) => {
        // error logging
        // reject(error); // throw error to outside
      })
      .on('end', () => {
        resolve(); // done
      });
  })
}
```
