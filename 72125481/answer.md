`httpResponse` is a [http.IncomingMessage][1], you can listen to `close` event (instead of `end`), the event will be emitted when the request has been completed.

```js
const Http = require('http');

const httpServer = Http.createServer((httpRequest, httpResponse) => {
  console.log('<started>');
  httpResponse.on('close', () => console.log('<ended>'));
  httpResponse.end('END');
  console.log('<finished>');
});
httpServer.listen(80);
```




  [1]: https://nodejs.org/api/http.html#class-httpincomingmessage
