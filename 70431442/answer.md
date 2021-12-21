Your regex expression should include newline characters.

```js
const matches = test.match(new RegExp("String Name" + "\n(.*)\n" + "String Place"));
console.log(matches[1]); // String Education
```
