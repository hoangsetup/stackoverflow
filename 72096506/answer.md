You can use lodash chain to solve that:

```js
const result = _([...arr1, ...arr2.map(i => i.emial)]) // ['test@email', 'test2@email', 'test@email']
    .countBy() // { test@email: 2, test2@email: 1 }
    .pickBy(x => x === 1) // { test2@email: 1 }
    .keys() // ['test2@email']
    .value();
```
