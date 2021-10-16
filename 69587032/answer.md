It can easily be done with `async/await` syntax. Just wait until the request finishes then continue the next request:

```js
(async () => { // await keyword only accept in an async function
  const array = [];
  const result = [];

  for (const item of array) { // for..of instead of for..in
    const body = {
      parameter1: item,
      parameter2: result[result.length - 1] || '', // get the last response
    };

    const res = await axios.post('url', body); // wait...
    result.push(res.data.x); // save the response and continue
  }

  console.log('Result: ', result); // all responses
})();
```
