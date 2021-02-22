If it must have both the elements but could have others then currently you need to use an [$and][1] expression:


```js
// Checking to see if conversation already exists
const conversation = await Conversation.findOne({
  // Saving Sender and Recipient's ID
  $and: [
    { "participants.participant": req.user._id },
    { "participants.participant": recipient._id }
  ]
});
```

  [1]: https://docs.mongodb.com/manual/reference/operator/query/and/
