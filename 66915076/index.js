const axios = require('axios');

const app = require('express')();

app.get("/photos", async (req, res) => {
  // Get the image
  var image_request = await axios({
    method: "get",
    responseType: "arraybuffer",
    url: "https://i.stack.imgur.com/HQzUc.jpg"
  });

  console.log("Sending image");
  console.log(image_request.headers);

  res.set('Content-Type', image_request.headers["content-type"]);
  res.set('Content-Length', image_request.data.length);
  res.send(image_request.data);
});

app.listen(3000, () => {
  console.log(`Server started on :3000`);
});
