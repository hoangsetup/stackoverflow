Following the mongo [document][1], you can query for all documents where `categories` is an array that contains the objectId `req.params.id` as one of its elements.

```js
Vehicles.find({
  categories: req.params.id,
}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```


  [1]: https://docs.mongodb.com/manual/tutorial/query-arrays/
