Try to make it simple at first:

```ts
let express = require('express');
let app = express();
const apiRouter = express.Router();

apiRouter.get('/auth', (req, res) => {
  // handle GET /auth method
  res.send("Auth route");
});

// register handle for any request with Endpoint like /api/* (api/"anything include auth")
app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log(`Server started on port`);
});;
```
