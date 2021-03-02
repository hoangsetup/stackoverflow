Just set the `AutoVerifiedAttributes` attribute value as `[]` - an empty list

Example:

```yaml
Resources:
  CUP1FD5E:
    Type: AWS::Cognito::UserPool
    Properties:
      UserPoolName: SIMPLE
      UsernameAttributes:
        - email
      # empty list
      AutoVerifiedAttributes: []
```
