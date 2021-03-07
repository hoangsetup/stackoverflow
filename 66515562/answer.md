Friend id should be a `Schema.Types.ObjectId`.

Convert friend id string to `ObjectId` before update to User document:

```js
const {ObjectID} = require('mongodb').ObjectID;
...
  User.findOneAndUpdate(
    { _id: "604498643b130c1384e7954b" },
    {
      $push: {
        friends: ObjectID("60278faacf27cf0cc494d806"), // convert to ObjectId
      }
    },
  )
```
