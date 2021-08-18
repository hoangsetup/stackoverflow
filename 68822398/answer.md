According to the [document][1], I think you have to introduce the `slots` in the response object:

```js
callback(null, {
    "sessionAttributes": event.sessionAttributes,
    "dialogAction": {
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "stols": event.currentIntent.slots, // this change
        "message": {
            "contentType": "PlainText",
            "content": "Please wait"
         }
     }
});
```


  [1]: https://docs.aws.amazon.com/lex/latest/dg/API_runtime_DialogAction.html
