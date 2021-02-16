const cors = require('cors');
const express = require('express');
const users = require('./routers/users');
const app = express();
app.use(cors());
app.use('/api/v1/user', users);

app.listen(3000, () => {
  console.log(`Server started on :3000`);
});
