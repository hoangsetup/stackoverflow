Your data `myFood` already is a JSON string, then no need to cast it to string with `JSON.stringify(data)` in `postData` function.

A simple way to fix this issue - make sure the data object always be a JSON object.

```js
var myFood = {
  "ingredients": [
    {
      "quantity": 2,
      "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
      "foodId": "food_akjf74ibll2id8aqb8xbha4t4axl",
    },
  ]
}; // object instead of string
```
