Force return type of `.toJson()` by adding generic parameter for this function:

```ts
const returnedJson = (await new Test(data).save()).toJSON<testWithId>();
//    ^? testWithId
```