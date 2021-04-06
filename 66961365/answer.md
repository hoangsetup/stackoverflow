You can register a middleware function for `remove` in `ClientSchema`. 

```js
ClientSchema.pre('remove', async function() {
  // call deleteMany on ProgramModel
  await ProgramModel.deleteMany({ Programs: { $in: this.Programs } });
});
```

You can do the same thing for `ProgramSchema` if you want to cascade delete `Answer`.
