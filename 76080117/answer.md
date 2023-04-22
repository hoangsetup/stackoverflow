You can solve your task with `async/await` only.

Refer to this answer to see [How to use Async and Await with AWS SDK Javascript][1]

Just scan until `ExclusiveStartKey` is falsy:

```
export const handler = async (event) => {
    try {
        const result = [];
        const params = {
            TableName: 'tb_notes',
            Limit: 1,
        };

        do {
            const { Items, LastEvaluatedKey } = await docClient.scan(params).promise();
            result.push(...Items); // push all scan result items to the result array
            params.LastEvaluatedKey = LastEvaluatedKey;
        } while (params.ExclusiveStartKey);

        console.log(result);

        // TODO: Call action to finish the lambda function
    } catch (error) {
        console.log(error);
    }
};
```


  [1]: https://stackoverflow.com/questions/51328292/how-to-use-async-and-await-with-aws-sdk-javascript/51328537#51328537
