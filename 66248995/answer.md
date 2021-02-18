You can handle it by `finish` event of `res` object. The event will be called when you call `res.end()` (or something like that).

My recommendation, to metrics an API service, you will need more information than response times.

```js
const http = require("http");

var metrics = []

http.createServer((req, res) => {
  const startPoint = Date.now();
  res.on("finish", () => {
    if (req.url === "/metrics") {
      return; // no metrics for metrics route
    }
    metrics.push({
      path: req.url,
      method: req.method,
      status: res.statusCode,
      dateTime: startPoint,
      times: Date.now() - startPoint,
    });
  });

  switch (req.url) {
    case "/route":
      // some code to process the request, maybe some requests to the database, maybe retrieve some files etc
      setTimeout(() => {
        res.end();
      }, 1000);
      break;
    case "/metrics":
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(metrics));
      res.end()
      break;
    default:
      res.statusCode = 404;
      res.end();
      break;
  }
}).listen(8080, () => console.log("Server running!"))
```

As you can see, when you call `GET http://localhost:8080/metrics` api, the response will look like this:

```json
[
  {
    "path": "/test",
    "method": "GET",
    "status": 404,
    "dateTime": 1613631702906,
    "times": 1
  },
  {
    "path": "/route",
    "method": "GET",
    "status": 200,
    "dateTime": 1613631702906,
    "times": 1004
  }
]
```
