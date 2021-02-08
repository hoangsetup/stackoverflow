You can use `Destructuring and Rename variable` syntax of ES6.

`require('express-serve-static-core')` returns a object, just do it as a normal object.


```js
const { Request: StaticRequest } = require('express-serve-static-core');
```
