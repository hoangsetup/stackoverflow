const express = require('express');
const Post = require('./post');

const app = express();

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

// app.listen(3000, () => {
//   console.log(`Server started on :3000`);
// });
