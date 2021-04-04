Your function finished right after Axios request is called. This means the function does not wait until the request complete. 

You write the lambda as an `async` function, then just use `await` to wait for the Axios request.

```js
const axios = require('axios');

exports.handler = async (event, context) => { // event and context
  console.log(`The event:`, event);
  console.log(`Connection:`, context);

  var domainName = event.requestContext.domainName;
  var stage = event.requestContext.stage;
  var connectionId = event.requestContext.connectionId;

  var url = `https://${domainName}/${stage}/@connections/${connectionId}`;

  console.log(`Sending out to: ${url}`);

  const response = await axios.post(url, 'Hi from Lambda!') // wait until request response
    .catch(error => { // If you don't care about the error, just print it out an continue
      console.log("Axios failed:", error);
    });

  console.log("Axios succeeded:", response);

  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
};
```

