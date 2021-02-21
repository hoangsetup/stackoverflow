Use `for-loop` instead of `.map`. 

In mongoose 5.x, instead of calling next() manually, you can use a function that returns a promise. In particular, you can use async/await.

```js
UserSchema.pre("insertMany", async function (docs) {
  try {
    for (const doc of docs) {
      const salt = await bcrypt.genSalt();
      doc.password = await bcrypt.hash(doc.password, salt);
    }
  } catch (error) {
    console.log(error);
  }
});
```
