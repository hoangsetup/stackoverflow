Take a screenshot picture as a base64 string then upload the image string:

```js
const screenshot = await page.screenshot({ encoding: "base64" }); // this line
cloudinary.uploader.upload(screenshot, function(error, result) {
    console.log(result, error)
});

```
