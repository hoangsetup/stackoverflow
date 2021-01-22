Make it simple with `async/await` syntax.

Avoid mixing `async/await` with `then/catch` style.

```js
const getDataResponses = await Promise.all([
  fetchClient.getData(
    getEndpoint(
      `amount=${countValues[0]}&difficulty=easy&type=${questionType}`
    )
  ),
  fetchClient.getData(
    getEndpoint(
      `amount=${countValues[1]}&difficulty=medium&type=${questionType}`
    )
  ),
  fetchClient.getData(
    getEndpoint(
      `amount=${countValues[2]}&difficulty=hard&type=${questionType}`
    )
  ),
]);

const data = Promise.all(
  getDataResponse.map((response) => {
    return fetchClient.processData(response, "results");
  })
);

console.log('getDataResponses', getDataResponses);
console.log('processDataResponse', data);
return [...data[0], ...data[1], ...data[2]];
```
