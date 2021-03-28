Using function definition instead of arrow function for mongoose `pre` save middleware:

```js
userSchema.pre('save', async function(next) { // this line
    const user = this;
    console.log(user);
    console.log(user.isModified);
    console.log(user.isModified());
    console.log(user.isModified('password'));
    if (!user.isModified('password')) return next();
    console.log('just before saving...');
    user.password = await bcrypt.hash(user.password, 8);
    console.log('just before saving...');
    next();
});
```
