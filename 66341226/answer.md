You can create a custom generic function, it will look the same as your comment, but I think this way will be better.

```ts
const verify = <T extends object>(token: string, secret: string): T => {
  return jwt.verify(token, secret) as T;
};

const sign = <T extends object>(payload: T, secret: string): string => {
  return jwt.sign(payload, secret);
};

export default const MyJwt = {
  sign,
  verify,
}
```

Usage,

```ts
import MyJwt from './MyJwt';

const data = MyJwt.verify<IdEmail>(token, process.env.JWT_Confirm_KEY);
// data now is a IdEmail
```
