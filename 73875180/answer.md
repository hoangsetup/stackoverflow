Type definition (interface...) will be remove when you compile ts code to js.

If you just want to keep your IDE suggestions, you can provide `"declaration": true` to your tsconfig file, tsc will compile code to js and generate  `.d.ts` file. In `d.ts` file you will have all types, variables, and function definitions.

Then your IDE will work as your expectation.

[Reference][1]


  [1]: https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html
