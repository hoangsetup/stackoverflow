Following [joi document][1] . You can use 'now' (string) value to compare with the current date time (when you execute validate)

```js
const dateSchema = Joi.date().greater('now').iso().required();
```


  [1]: https://joi.dev/api/?v=17.4.0#dategreaterdate
