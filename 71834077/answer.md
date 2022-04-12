You have to wait for archiver pipe to be finished, instead of finishing right after you append stream to archive variable:

```js
async function downloadFolder(req, res) { // async function
  const params = {
    Bucket: bucketName,
    Prefix: `folder/`,
  };

  const { Contents } = await s3.listObjects(params).promise(); // convert request to promise

  return new Promise((resolve, reject) => { // wrap into a promise
    const archive = archiver('zip', { gzip: true, zlib: { level: 9 } });
    archive.on('finish', () => { // end | close
      resolve(archive); // return to main function
    });
    archive.pipe(res);

    // error handler

    for (const content of Contents) {
      const file = s3.getObject({
        Bucket: bucketName, Key: content.Key
      }).createReadStream();
      archive.append(file, { name: content.Key });
    }

    archive.finalize();
  });
}
exports.downloadFolder = downloadFolder
```
