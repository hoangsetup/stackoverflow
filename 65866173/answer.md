Make it simple with `for-loop` and `async/await` syntax.

```js
const download = require('image-downloader');
const links = require('./links.json');

(async () => { // `await` can only be used inside an async function.
  try {
    for (const url of links.url) {
      // wait until downloading process finish then continue to solve next url
      const result = await download.image({ url, dest: links.dest });
      console.log("Image downloaded", result);
    }
    console.log("Done!");
  } catch(error) {
    console.log("downloaded error", error)
  }
})();
```
