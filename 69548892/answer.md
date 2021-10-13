Try to reverse your scan condition - Get items that have `delete` is NOT true.

```js
 var scanParams = {
        TableName: "students",
        FilterExpression: "deleted <> :deleted", // NOT EQUAL TRUE -> empty or false
        ExpressionAttributeValues: {
          ":deleted": true,
        },
      };

      const scan = await db.scan(scanParams).promise();
```
