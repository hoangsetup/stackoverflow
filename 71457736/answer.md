Just ignore the reject handle for `onlyRunIfResolvesInTime`

```js
onlyRunIfResolvesInTime()
  .then(() => {
    console.log("running function")
  })
  .catch(() => null) // timed out -> do nothing
```
