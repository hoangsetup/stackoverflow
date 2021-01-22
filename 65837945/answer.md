`new winston.transports.Console` does not accept `filename` option.

You have to append `File` transport for your `logger`.

```js
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ level: 'error' }),
    // new line
    new winston.transports.File({ filename, level: 'error' }),
  ]
});
```
