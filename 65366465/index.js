/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/form', (req, res) => {
  const errors = [
    {
      msg: 'The error message for imgUrl',
      param: 'imgURL',
    },
    {
      msg: 'The error message for username',
      param: 'username',
    }
  ];
  const getInputError = (inputName) => {
    return errors.find(i => i.param === inputName || i.body === inputName);
  }
  res.render('form', { getInputError });
});

app.listen(3000, () => {
  console.log(`Server started on :3000`);
});
