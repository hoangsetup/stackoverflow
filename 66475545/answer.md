Create and setup resource for `ACCESS_DENIED` response with `ResponseTemplates`.

serverless.yml

```yml
...
resources:
  Resources:
    DenyFailureGatewayResponse:
      Type: 'AWS::ApiGateway::GatewayResponse'
      Properties:
        ResponseParameters:
          # Config your header response
          gatewayresponse.header.Access-Control-Allow-Origin: "'*'"
          gatewayresponse.header.Access-Control-Allow-Headers: "'*'"
        ResponseTemplates:
            # Custom response object
            application/json: |
              {
                "success":false,
                "message":"$context.authorizer.errorMessage"
              }
        # Setup only for ACCESS_DENIED type
        ResponseType: ACCESS_DENIED
        RestApiId:
          Ref: 'ApiGatewayRestApi'
        StatusCode: '403'
...
```

And in your `generateAuthResponse` function, let update your `authResponse` object if you need a custom message.

```js
const generateAuthResponse = (principalId, effect, resource, errorMessage = null) => { // I guest function will look like that
  // ... do something

  // before return, let custom your error message
  if(effect.toLowerCase() === 'deny' && errorMessage !== null){
    authResponse.context = {
      // Key to map with $context.authorizer.errorMessage
      "errorMessage": errorMessage ,
    };
  }

  return authResponse;
}
```
