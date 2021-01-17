You will never see `Inside catach block` line,
because `createReadStream` will not throw an error as "normal".
It will emit `error` event when it want to throw an error.

What you need is handle `error` of `createReadStream` (not of `readInterface`)

```js
const fs = require('fs');
const readline = require('readline');

class fileParser {
  readPolicyFile = function (filePath, fileName) {
    return new Promise((resolve, reject) => {
      let response = {};

      // create a stream and handle it's error event
      const stream = fs.createReadStream(`${filePath}/${fileName}`);
      stream.on('error', (error) => {
        reject(error);
        // or reject({success: false}), but why call reject with data
        // If you don't want to handle error of readPolicyFile function, just call resolve({success: false})
      });

      let readInterface = readline.createInterface({
        input: stream,
        terminal: false
      });

      readInterface
        .on('line', line => {
          // Do processing here to create the response
        })
        .on('close', () => {
          resolve(response);
        });
    })
  }
}

module.exports = new fileParser();
```
