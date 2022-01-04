You can use '&' for `AND` and '|' for `OR` ([doc][1]). Your filter expression will look like this:

```python
FilterExpression=Attr('SubsId').begins_with(buId) & Attr('SeqNum').not_exists()
```

Ref: [Attr(name).not_exists()][2]


  [1]: https://boto3.amazonaws.com/v1/documentation/api/latest/guide/dynamodb.html#querying-and-scanning
  [2]: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/customizations/dynamodb.html#boto3.dynamodb.conditions.Attr.not_exists
