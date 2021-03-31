Custom it by manually way - Appending `lang` parameter to the link:

```js
async getLinkForEmailVerification(email) {
  const actionCodeSettings = {
    url: 'http://localhost:4200/login',
  };

  let link = await admin.auth().generateEmailVerificationLink(email, actionCodeSettings);
  link += '&lang=es'; // this line

  return link;
}
```
