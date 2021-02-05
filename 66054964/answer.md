`gremlinQuery` is a async function, then you have wait until the function `resolve` a result.

And `gremlinQuery` look like an unused function (???)

How about

```js
async function gremlinQuery() {
  const results = await g.V().has('airport', 'code', 'LHR').values().toList();
  // return JSON.parse(results); // results is a string???
  return results;
}
```

express router

```js
router.get('/query', async (req, res) => { // async handle
  try {
    const response = await gremlinQuery(); // wait until the query response
    // res.send(response);
    res.json(response); // send it to client as a json object
  } catch (error) {
    res.status(500).send(error); // Notice to client - Some thing went wrong
  }
});
```
