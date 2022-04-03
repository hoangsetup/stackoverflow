When the download process is done, it will trigger `close` event. You can listen to the `close` event. But, you have to wrap it into a Promise, then just `await` on the promise.

```js
if (message.body.indexOf('/yt') != -1) {
  const url = message.body.replace('/yt ', '')

  await new Promise((resolve) => { // wait
    ytdl(url)
    .pipe(fs.createWriteStream('video.mp4'))
    .on('close', () => {
      resolve(); // finish
    })
  })

  // the code below does not wait for the download to finish
  const media = MessageMedia.fromFilePath('./video.mp4')
  client.sendMessage(message.from, media, { sendMediaAsDocument: true })
}
```
