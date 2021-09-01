`K extends keyof T` and `T extends FormState` mean `K` will get `0`, `1`, or `2` ... as value.

Then your `f` function will look like this:

```ts
const f = (fieldName: number, fieldValue: string, hasErrors?: boolean) => {}

// and to bind f you have to bind a number as the second parameter
f.bind(null, 0);
```

But, I guess it is not what you want, I think you need the `fieldName` is `FormState`. Just try to update the type of `fieldName` to `T` instead of `K`

```ts
const f = <T extends FormState, K extends keyof T>(fieldName: T, fieldValue: T[K], hasErrors?: boolean) => {}

f.bind(null, "email");
```
