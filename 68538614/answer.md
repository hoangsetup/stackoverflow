Your function finish immediately, before `getProvisionedConcurrencyConfig` finish. You use callback style for your function `async function(event, context, callback)`, but the `callback` function never be called.

The first solution is keeping the callback style, and you have to call the callback function:

```js
var AWS = require("aws-sdk");
var lambda = new AWS.Lambda();

exports.handler = function (event, context, callback) { // dont mix callback with async

  var params = {
    FunctionName: 'Myfunction',
    Qualifier: 'v1'
  };
  console.log(event);

  lambda.getProvisionedConcurrencyConfig(params, function (err, data) {
    console.log('entered call');
    if (err) {
      console.log('error occured');
      console.log(err, err.stack);
      callback(null, { // the function will finish with success status
        statusCode: 200,
        body: JSON.stringify(err),
      });
    }
    else {
      console.log('Success');
      console.log(data);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data),
      });
    }
  });
};
```

The second solution is using Promise style for the function(recommendation):

```js
var AWS = require("aws-sdk");
var lambda = new AWS.Lambda();

exports.handler = async function (event) { // keep as async

  var params = {
    FunctionName: 'Myfunction',
    Qualifier: 'v1'
  };
  console.log(event);

  try {
    console.log('entered call');
    // wait until it completed
    const data = await lambda.getProvisionedConcurrencyConfig(params).promise(); // convert to a promise
    console.log('Success');
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { // the function will finish with success status
      statusCode: 200,
      body: JSON.stringify(err),
    };
  }
};
```
