A simple solution is to use `Record` and `keyof`:

```ts
let myObject: Record<keyof MyInterface, SomeOtherInterface>;
```
