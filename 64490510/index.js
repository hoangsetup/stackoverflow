/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router({ mergeParams: true }); // here
router.get('/', (req, res) => {
  console.log(req.params)
  res.send('good')
})

const app = express()

app.use('/getItem/:id', router);

app.listen(3000, () => {
  console.log(`Server started on :3000`)
})
