Use `for...of` instead of `forEach`. `forEach` recipes a callback function as a parameter, and it not support async function.

```js
const results = await model.find({ status: 'active' });
const finalResult = [];

for (const _ of results) {
  const items = await model1.find({
    createdAt: {
      $gte: fromDate.getTime(),
      $lte: toDate.getTime(),
    }
  });
  finalResult.push(...items);
}

console.log(finalResult);
```
