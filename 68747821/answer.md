Actually, your way to get the `works` is not the same as `breaks`. The way to get the `works` is easy to understand - Wait for the response of `myStubbedMethod`, then get the first item of the response.

Take a look at the way you get the `breaks`:

```ts
const breaks = Buffer.from(await myStubbedService.myStubbedMethod()[0], 'hex');
``` 

(Maybe) as you know `myStubbedService.myStubbedMethod()` return a `Promise`, when you get the `0` attribute of a Promise, you get back an undefined value.
`await` with a constant, you get the constant.

Your code will look like this:

```ts
const breaks = Buffer.from(await undefined, 'hex');
```

Just more parentheses:

```ts
const breaks = Buffer.from((await myStubbedService.myStubbedMethod())[0], 'hex');
```
