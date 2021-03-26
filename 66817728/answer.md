Convert `s3.upload` to return a promise:

```js
const data = await s3.upload(params).promise(); // this line
console.log(`File uploaded successfully. ${data.Location}`);
return data.Location;
```
