Just decode it as a normal jwt token. If you use [nestjs-jwt][1] package, just call [decode][2] function:

```ts
const decodedJwtAccessToken: JwtPayload = this.jwtService.decode(signedJwtAccessToken);

const expires = decodedJwtAccessToken.exp;

```

Or just decode the token as a base64 string

```ts
const base64Payload = signedJwtAccessToken.split('.')[1];
const payloadBuffer = Buffer.from(base64Payload, 'base64');
const updatedJwtPayload: JwtPayload = JSON.parse(payloadBuffer.toString()) as JwtPayload;
const expires = updatedJwtPayload.exp;
```


  [1]: https://github.com/nestjs/jwt
  [2]: https://github.com/nestjs/jwt#jwtservicedecodetoken-string-options-decodeoptions-object--string
