According to this [document][1], they said that

> Note
The Amazon Cognito hosted sign-in webpage can't activate Custom authentication challenge Lambda triggers.

You have to write your own custom login flow using one of [Cognito's SDKs][2] 


  [1]: https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow.html#amazon-cognito-user-pools-custom-authentication-flow
  [2]: https://docs.amplify.aws/lib/auth/advanced/q/platform/js/
