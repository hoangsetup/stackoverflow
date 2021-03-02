Your `sendMail` does not return a Promise, then `await` keyword will not work as your expectation. The function will be finished before the `sendMail` process finish.

On the local side, I guess you use `serverless-offline` plugin to test your function. Then, the function will not "finished", it just responds -> Different behavior with Lambda environment.

If `this.transporter` is an instance of Nodemailler's Transporter, then `.sendMail` function is a callback function. You have to convert it to a new function that returns a Promise or just wrap it into a new Promise like this:

```js
const sentMessageInfo = await new Promise((resolve, reject) => {
  this.transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return reject(error);
    }
    return resolve(info);
  })
});
```
