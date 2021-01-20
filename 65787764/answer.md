To create a object with key is a variable, you have to use array access style.

```js
    findInModel: async (Model, key, value) => {
        const query = {};
        query[key] = value;
        const modelObj = await Model.fineOne(query);
    }
```
