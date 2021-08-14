You mix `callback` style with `async/await` style. An `async` function always returns a Promise, in your case `async function save(next)` will return a promise, and the `hook` will be "done" right after the promise is resolved. 

[Mongoose middleware doc.][1]

I guess you expect the hook will wait until `transferImagesToS3` is finished, then go to the next process. But actually, your `await` keyword does not make sense because `transferImagesToS3` does not return a Promise (I guest).

We have 2 solutions:
1. Just use callback style only:

```js
videoSchema.pre("save", function (next) { // remove async
  transferImagesToS3(this.cover, (err, resp) => { // remove await, async
    if (err) {
      next() // next(err) when you want to stop when upload is failed
    }
    if (resp.Location) { // image uploaded to AWS S3 and return new image url here
      this.cover = resp.Location // I set new url here
      next()
    }
  })
})
```

2. Convert `transferImagesToS3` to return a Promise (I recommend):

I use [promisify][2] to convert a callback function to return a Promise.

```js
const util = require('util')

videoSchema.pre("save", async function () { // remove next
  const resp = await util.promisify(transferImagesToS3)(this.cover) // wait
  this.cover = resp.Location
})
```


  [1]: https://mongoosejs.com/docs/middleware.html
  [2]: https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original
