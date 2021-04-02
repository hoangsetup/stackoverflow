Change the response type of the axios request to `arraybuffer`:

```js
  var image_request = await axios({
    method: "get",
    responseType: "arraybuffer", // right here
    url: "https://i.stack.imgur.com/HQzUc.jpg"
  });
```

Ref: [axios-config][1]


  [1]: https://github.com/axios/axios#request-config
