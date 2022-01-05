According to [Jest-Platform document][1], you can use `jest-diff` to get a "pretty-printed" string illustrating the difference between the two arguments.

Your `message` function will become:

```js
const { diff } = require('jest-diff'); // already available if Jest is installed

// ...

message: () => "expect(received).toTorgle(expected):" + diff(received, expected),
```


  [1]: https://jestjs.io/docs/next/jest-platform#jest-diff