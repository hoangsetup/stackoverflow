`scanIncompleteProcessedCsv` should return a promise. Now it returns `void`, this mean `RetryIncompleteCSV` function will finish before a querying to dynamoDB complete.

```js
async function scanIncompleteProcessedCsv(params) {  // get method fetch data from dynamodb  
console.log(params)
  return await documentClient.scan(params).promise();
} 
```

About `multiple conditions`, I found to many documents about that, just try:

```js
  var params = {
    TableName : 'processed_csv_developments',
    FilterExpression : 'campaignId = :campaignId AND isComplete = false',
    ExpressionAttributeValues : {':campaignId' : cmpId}
  };
```


Ref: [Link][1]


  [1]: https://stackoverflow.com/questions/51328292/how-to-use-async-and-await-with-aws-sdk-javascript/51328537#51328537
