`connectToMongo` function is an async function, not a `async callback` (async function with a function as a parameter ???)

`beforeEach` will be called when `beforeAll` is finished, and it still works well. 

`beforeAll(connectToMongo) ` will be done right after you call it, this means, it will not wait until the db connect success.

Just wait until `connectToMongo` done and continue:

```js
beforeAll(async () => { // async function
    await connectToMongo() // wait until connected to db
}) 
```
