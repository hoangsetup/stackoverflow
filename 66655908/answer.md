`image-watermark` using [node-ratify][1] to check your callback is a function or not. And it returns false when the callback function is an async function, then it throws an error. [Read more][2].

Now, have 2 options:
1. Convert `embedWatermarkWithCb` to a Promise function and call `resizeImage` after it finished (Recommended).

```js
async function watermarkFile(filePaths) {
  var waterMarkOptions = {
    'text': 'blabla.com',
    'align': 'ltr',
    'dstPath': filePaths[1]
  }

  await new Promise((resolve, reject) => {
    watermark.embedWatermarkWithCb(filePaths[0], waterMarkOptions, function (err) {
      if (err) {
        return reject(err);

      }
      resolve();
    });
  }).catch((err) => {
    res.status(400).json({ error: err });
  })
  await resizeImage(filePaths);
}
```

2. Using immediate function

```js
function watermarkFile(filePaths) {
  var waterMarkOptions = {
    'text': 'blabla.com',
    'align': 'ltr',
    'dstPath': filePaths[1]
  };

  watermark.embedWatermarkWithCb(filePaths[0], waterMarkOptions, function (err) {
    (async () => {
      if (err) {
        res.status(400).json({ error: err });
      } else {
        await resizeImage(filePaths);
      }
    })();
  });
}
```


  [1]: https://www.npmjs.com/package/node-ratify
  [2]: https://github.com/luthraG/image-watermark/blob/master/watermark.js#L219
