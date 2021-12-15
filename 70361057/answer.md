Because `expect(fn).rejects.*` is an asynchronous action, then it will take "a little time" to finish.

In your code, `expect(console.error).toHaveBeenCalledWith(expect.stringContaining('bang'))` will run before `expect(() => getMtgJsonVersion()).rejects.toThrow('bang');` line. At that time, the `console.log` is not be called yet.

To make it work as your expectation, you have to wait until  `getMtgJsonVersion` finishes,  then assert on the log function. `rejects.toThrow('bang')` return a promise, then just wait for it with `await` keyword:

```js
await expect(() => getMtgJsonVersion()).rejects.toThrow('bang');
expect(console.error).toHaveBeenCalledWith(expect.stringContaining('bang'));
```

My note: Avoid using `try/catch` in "child" unit, just use it in the "final parent" function, if you just want to log when the http request is failed:

```js
async function getMtgJsonVersion() {
  const { data } = await axios(metaUrl).catch((error) => {
    console.error(`Could not fetch MTG JSON metadata: ${error}`);
    throw error;
  });
  return data.meta.version.
}
```
