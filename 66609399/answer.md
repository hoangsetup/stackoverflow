[query][1] is a function with some named arguments (`IndexName`, `KeyConditionExpression`, ...).

Let's try to call the function with named arguments as a normal function:

```python
boto3.resource('dynamodb').Table('table').query(
    IndexName='url-date-index', 
    KeyConditionExpression=conditions.Key('url')).eq(url) & conditions.Key('date')).eq(date)
)
```


  [1]: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.query
