You have to config [moduleNameMapper][1] for jest the same as what you did at tsconfig.js paths.

If you use `ts-jest` as a transformer, use their helper.

`jest.config.js`

```js
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./lambdas/tsconfig');


module.exports = {
  // [...]
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}
...

```


Or you can do it without a helper:

```js
  moduleNameMapper: {
    '^@libs/aws/(.*)$': '<rootDir>/lambda_layers/aws_handler/$1'
  },
```



  [1]: https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring
