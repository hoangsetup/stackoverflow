If you are using [mongodb][1] then it already supports Promise syntax:

> However, all async API calls support an optional callback as the final
> argument, if a callback is provided a Promise will not be returned.

Then you can make `getItemsFromCollection` become:

```js
  getItemsFromCollection: async function (collectionName) {
    // let itemArr = [];
    const collection = client.db().collection(collectionName);
    const items = await collection.find({}).toArray(); // don't pass callback param

    console.log(items);

    // I guess you want to get back an array of the collection item
    return items;
  },

```


  [1]: https://www.npmjs.com/package/mongodb
