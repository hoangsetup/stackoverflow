For `adminDeleteUser` function, `UserPoolId` should be the user pool ID for the user pool where you want to delete the user.

In your case, `UserPoolId` should be `us-east-1_mGp3WP...`

then your code will look like this:

```js
        await cognito
            .adminDeleteUser({
                UserPoolId: "us-east-1_mGp3WP...",
                Username: "a7260b2f-487b-4a2b-935e-029009ee0b6b", // user.username or req.params.id ???
            })
            .promise();
```

