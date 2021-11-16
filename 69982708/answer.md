When you use `responseType` as `stream`, you can forward the data stream to express response object directly:

```js
const express = require("express")
const axios = require("axios")

const app = express()
const port = 4000

const images = [
  { name: "cow", url: "https://somewhere.com/cow.png" },
  { name: "chicken", url: "https://somewhere.com/chicken.png" }
]

app.get('/images/:name', async (req, res) => {
  const { name } = req.params
  const image = images.find(img => img.name === name);

  if (!image) {
    return res.status(404).send()
  }

  try {
    const response = await axios({
      method: 'GET',
      url: image.url,
      responseType: 'stream',
    });
    response.data.pipe(res)
  } catch(error) {
    res.status(500).send(error.message)
  }
});

app.listen(port, () => { console.log("Online") })

```

Now you can try with `http://localhost:4000/images/cow`
