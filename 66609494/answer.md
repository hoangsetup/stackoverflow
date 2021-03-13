[fetch][1] `options` just acceps `headers` (not `header`) setting to set the request headers.

Let's correct your attribute name:

```js
var roomName = document.indexform.room[1].value;
const roomInfo = { value: `${roomName}`, text: `${roomName}` };
console.log(roomInfo);
const options = {
  method: "POST",
  headers: { // not "header"
    "Content-Type": "application/json",
  },
  body: JSON.stringify(roomInfo),
};
fetch("/index", options);
```


  [1]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
