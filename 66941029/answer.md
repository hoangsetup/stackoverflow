You can execute a `ts` file directly with `ts-node`. 

```
"test": "ts-node src/tests/search.test.ts"
```

Or build it to `js` file and run it with `node`.


To execute `jest` command, you have to install it, and you are using Typescript (?) then you also need `ts-jest`:

```
npm install ts-jest jest -D
```
Create a configuration file for jest: `jest.config.js`

```js
module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
```

Now, try to execute jest: `npx jest`


