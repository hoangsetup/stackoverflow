You can use a [if condition][1] to handle that case. The condition is when `isAnonymous` is NOT `true` then execute another check for `displayName`

```js
router
  .route("/create-checkout-session")
  .post(
    [
      check("displayName")
        .if((value, { req }) => { // if isAnonymous : false then let's check
          return !req.body.isAnonymous;
        })
        .matches(vars.intlRegex)
        .trim()
        .escape()
        .withMessage("Please provide a display name")
      check("isAnonymous").isBoolean()
    ],
    checkForErrors,
    createCheckoutSession
```


  [1]: https://express-validator.github.io/docs/validation-chain-api.html#ifcondition
