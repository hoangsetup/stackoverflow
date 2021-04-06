It seems `ts-transformer-keys` usage document is not updated with the latest versions of the package.

In the [source code][1] of the package, you can see it just exports a function as default exportation.

Then, just update your usage.

```ts
import keys from 'ts-transformer-keys'; // import default export, instead of destruction `{ keys }`.
// ...
let test = keys<myTestClass>();
```


  [1]: https://github.com/kimamula/ts-transformer-keys/blob/0442312011fea8aa4650cba3ac32ff1fe47f7d2a/transformer.ts#L4
