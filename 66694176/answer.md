It seems `MOCK_PRODUCT` is a object, then when you set `const productData = MOCK_PRODUCT;`, the `productData` is a referent to `MOCK_PRODUCT`. This means if you update `producData` content, `MOCK_PRODUCT` content also be updated.

In the previous test, you update `productData` object, then the next test will not working as your expected.

A simple way to avoid it is to stop using referent way, just clone to a new object for every test.

```js
const productData = {...MOCK_PRODUCT};
```

My recommendation, define `productData` variable at the top level, assign cloned `MOCK_PRODUCT` for it in `beforeEach`. Then use `productData` in each test.
