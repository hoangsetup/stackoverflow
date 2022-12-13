Just create a filter object base on `name` and `type` conditions, if `req.query.year` exists then add an additional condition.

```js
const conditions = {
  name: { $regex: search, $options: 'i' },
  type: { $in: types },
};

if (year) {
  conditions.year = parseInt(year);
}

const response = await Wine.find(conditions)
  .limit(limit)
  .skip((parseInt(page) - 1) * limit);
```
