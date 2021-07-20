const express = require('express');
const Post = require('./post');

// add followings for cookie-parser and keygrip.
const cookieParser = require("cookie-parser");
const keyGrip = require("keygrip");
const keyList = ['free text 1', 'free text 2'];
const keysForCookie = new keyGrip(keyList, 'sha256');

const app = express();

app.use(cookieParser(keysForCookie));

app.get('/', (req, res) => {
  const secureOptions = { httpOnly: true, sameSite: 'Strict', secure: true, signed: true };
  res.cookie('MyCookie', 'yummy', secureOptions);
  res.json({ success: true });
});

const router = express.Router();
router.get('/all', (req, res) => {
  Post.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json(error);
    })
});

app.use('/api/posts', router);

module.exports = app;

app.listen(3000, () => {
  console.log(`Server started on :3000`);
});
