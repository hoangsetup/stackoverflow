According to the [mongoose document][1], the save method returns `undefined` if used with callback or a Promise otherwise. This means `data` is undefined in `then` block.

I think you want to see `newPlayers` data, if it is true, just return `newPlayers`:


```js
    newPlayers.save()
    .then(() =>{
        response.json(newPlayers)
    })
    .catch(error => {
        response.json(error)
    }) 
```


  [1]: https://mongoosejs.com/docs/api.html#model_Model-save
