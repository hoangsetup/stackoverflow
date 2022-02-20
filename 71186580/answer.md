The `toBucket` function should return a promise, then you can `await` it in your parent function. To do that, just wrap the logic of `toBucket` into a promise

```js
const toBucket = (message, filename) => {
    return new Promise((resolve, reject) => { // return a promise
        const storage = new Storage();
        // Initiate the source
        const bufferStream = new stream.PassThrough();
        // Write your buffer
        bufferStream.end(Buffer.from(message));

        const myBucket = storage.bucket(process.env.BUCKET);
        const file = myBucket.file(filename);
        // Pipe the 'bufferStream' into a 'file.createWriteStream' method.
        bufferStream
            .pipe(
                file.createWriteStream({
                    validation: 'md5',
                })
            )
            .on('error', (err) => {
                // eslint-disable-next-line no-console
                console.error(err);
                reject(err); // reject when something went wrong
            })
            .on('finish', () => {
                // The file upload is complete.
                const message = `${filename} is uploaded!`;
                // eslint-disable-next-line no-console
                console.log(message);
                // return message;
                resolve(message); // return message and finish
            });
    })
};
```

In the parent function:

```js
() => async {
    await things happening...
    
    const saved = await toBucket(message,filename); // await
    
    sendToBrowser(saved);
}
```
