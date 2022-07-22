According to the source of [aws-lambda][1], the namespace will be `AWSLambda`.

Then what you need to do in `.d.ts` file will look like this:


`custom.d.ts`

```ts
declare namespace AWSLambda {
  export interface APIGatewayProxyEvent {
    // body: any; // body should be a string, maybe you need another property name
    user: any;
  }
}
```


  [1]: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/aws-lambda/index.d.ts#L94
