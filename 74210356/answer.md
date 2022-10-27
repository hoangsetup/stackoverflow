Your `stream` process triggers `end` before `DDBDocumentClient.send` done, so the `new Promise(` resolves with an empty array.

Just read data from the stream at first then query on dynamoDB

```js
const parseCSV = async (stream, ID1, ID2) => { // become async function
  // get user from csv
  const users = new Promise((resolve, reject) => {
    const result = [];

    stream
      .pipe(csv())
      .on('data', async (data) => {
        result.push(data);
      })
      .on('error', reject)
      .on('end', () => resolve(result));
  });

  // get uri data by ID1, ID2, you don't need to call it multiple times (???)
  const { Item } = await DDBDocumentClient.send(
    new GetCommand({
      TableName: process.env.DB,
      Key: {
        PK: `ORGID${ID1}`,
        SK: `PRODUCTID${ID2}`,
      },
      AttributesToGet: ['URI'],
    })
  );

  // create new array
  const uriUsers = users.map((user) => {
    return {
      ...user,
      URI: Item.URL,
    }
  });

  console.log(uriUsers);

  return uriUsers;
}
```
