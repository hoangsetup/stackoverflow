According to this [document][1], You have to pass the variable as an argument to the `page.evaluate` like this:

```js
const result = await page.evaluate((x) => { // 1. Define "x" to get value in the step 2
  return Promise.resolve(8 * x); // 3. Return the result
}, 7); // 2. Pass 7 to "x"
console.log(result); // prints "56"
```

Your snippet will look like this:

```js
for(let k = 0; k <= 21; k++) {
  const text = await page.evaluate((nth) => {
    return document.querySelector(
      'div.ui-table__row:nth-child('+ nth +') > a:nth-child(1) > div:nth-child(2)'
    ).textContent; // Return `textContent` to "out side"
  }, k)
  console.log(text);
}
```



  [1]: https://pptr.dev/#?show=api-pageevaluatepagefunction-args
