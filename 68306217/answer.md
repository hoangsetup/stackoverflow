Just wait until `invoke` action finished then finished the lambda function.

```js
exports.handler = async (event) => {
  const payload = {
    message: "Hey there",

  }
  var params = {
    FunctionName: 'ChildLambda', // the lambda function we are going to invoke
    InvocationType: 'Event', // RequestResponse -  to get response from ChildLambda, Event - don't care the response (or error...)
    LogType: 'Tail',
    Payload: JSON.stringify(payload)
  };

  try {
    console.log("Invoked Lambda...")
    const data = await lambda.invoke(params).promise() // wait until invoke successfully
    console.log('Data: ', data) // data maybe empty - {} when InvocationType is Event
    console.log("Lambda done")
  
    return {
      "isBase64Encoded": false,
      "statusCode": 202,
      "headers": {},
      "body": "HEY FROM LAMBDA"
    }
  } catch (error) {
    // handle error
    console.log("Error", error);
    return {
      "isBase64Encoded": false,
      "statusCode": 500, // return error response
      "headers": {},
      "body": error.message
    }
  }
};
```
