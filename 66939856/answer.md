I not sure about what package you are using. But, maybe, it using a callback function to get the result of `.sow` function - `message.data`.

With your logic, `onMessage` function will be called after `data.forEach` done, you can try adding a `console.log` line to `onMessage` function.


Maybe, the package has an important reason to do that. But, to fix this issue, you can wrap `.sow` function into a promise.


```js
sow_query = async (topic, filter, options) => {
  return new Promise(async (resolve) => {
    await this.connection // ???
    await this.client.sow(
      (message) => {
        resolve(message.data);
      },
      topic, filter, options)
  });
}

//Calling functions
const getData = async (date) => {
  let data = await getAmpsData(date)
}

async getAmpsData(date) {
  const filter = "some filter"
  const data = await ampsClient.sow_query(topic, filter)
  data.forEach((element) => console.log(element))
}
```
