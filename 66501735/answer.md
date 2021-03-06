Just do as you did for the first level - Using `.keys({})` to define object attributes.

```js
contactMethod: Joi.when('mainType', {
  is: 'COMMERCIAL',
  then: Joi.object()
    .keys({
      create: Joi.object() // You missing usage of Joi.object()
        .keys({ // should define object attribute here
          message: Joi.string().allow(''),
        })
        .required(),
    })
    .required(),
}).when('isHousing', {
  is: true,
  then: Joi.object()
    .keys({
      create: Joi.object() // the same :|
        .keys({
          message: Joi.string().allow(''),
        })
        .required(),
    })
    .required(),
  otherwise: Joi.disallow(),
});
```
