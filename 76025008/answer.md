You can use `Immediately invoked function expression` to create an async function where you can wait for the connection before starting the server.

```js
const express = require("express")
const app = express()
const mongoose = require("mongoose")

// Setup app router
// app.get(...
// app.post(...

(async () => { // async function
  try {
    await mongoose.connect(uri); // wait for connection

    app.listen(PORT, () => {
      console.log("Server is listening at " + PORT);
    });
  } catch (error) {
    console.console.log("Something went wrong!!!");
    console.error(error);
  }
})(); // Immediate invoke
```
