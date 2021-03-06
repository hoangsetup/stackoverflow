const path = require('path');
const axios = require('axios');

const winston = require('winston');
const filename = path.join(__dirname, 'testLog.log');

console.log(filename);

const app = require('express')();

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ filename, level: 'error' }),
    new winston.transports.File({ filename, level: 'error' }),
  ]
});

app.get('/test', (req, res) => {
  logger.log({
    level: 'error',
    message: 'Test'
  });
  res.json({ success: true });
});

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
