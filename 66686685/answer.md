You can read the image buffer and then respond the buffer to the client with the content type is `image/jpeg`.

```js
const fs = require('fs');
...
app.get('/get/image/*', (req, res) => {
  const path = req.params[0];
  const fName = path.substring(path.lastIndexOf('/') + 1);
  fs.readFile(uploadBasePath + fName, (err, buffer) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.contentType('image/jpeg');
    res.send(buffer)
  })
})
```
