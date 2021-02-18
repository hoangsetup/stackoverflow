const express = require('express');

const app = express();

app.use((req, res, next) => {
  const sendStatus = res.sendStatus.bind(res);
  res.sendStatus = (status) => {
    if (status === 404) {
      res.status(404);
      return res.status(404).json({ message: 'Not found!' });
    }
    sendStatus(status);
    return req;
  }
  next()
});

app.get('/store/:product', function (req, res) {
  const productNotFound = true
  if (productNotFound) return res.sendStatus(404);
});

app.get('*', function (req, res) {
  res.status(404);
  res.json({ message: 'Not found!' });
});

app.listen(3000, () => {
  console.log(`Server started on :3000`);
});
