Just listen to `end` event of `stdout` then return the data. You need to wrap it into a Promise.

```ts
  private async readWaitStream() {
    return new Promise((resolve) => {
      let data = '';

      this._child.stdout.on('readable', () => {
        let chunk = '';
        while (chunk = this._child.stdout.read()) {
          data += chunk;
        }
      });

      this._child.stdout.on('end', () => {
        resolve(data); // return data
      });
    });
  }
```
