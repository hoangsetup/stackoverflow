You can make it simple by [Template literals][1]

```js
var params = {
  Message: `[ { "type": "section", "text": { "type": "mrkdwn", "text": "Hourly snapshot has been created for : ${arg1} " } }, { "type": "divider" } ]`,
}
```

Or just convert a JSON object to a string:

```js
var params = {
  Message: JSON.stringify([
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Hourly snapshot has been created for : " + arg1,
      }
    },
    {
      type: "divider",
    },
  ]),
}
```



  [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
