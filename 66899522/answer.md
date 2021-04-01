Remove `<pre>` tag, and convert it to a json object.

On the server-side just response as a json object instead of a string:

```js
...
const jsonString = response.data.replace(/<\/?pre>/g, '');
res.json(JSON.parse(jsonString)); // instead of res.send(response.data);
...
```
