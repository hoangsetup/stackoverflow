You have to define `ApiGatewayRestApi` resource by your self ([Ref][1]), then you can add description.

```yml
provider:
  apiGateway:
    RestApiId:
      Ref: MyApiGateway
    RestApiRootResourceId:
      Fn::GetAtt:
        - MyApiGateway
        - RootResourceId

resources:
  Resources:
    MyApiGateway:
      Type: AWS::ApiGateway::RestApi
      Properties:
        Name: my-api-gateway
        Description: My api gateway description # Put your description
```

And remember to update `provider` to use your defined api gateway if you already config http event for some lambda functions

[List of ApiGateway properties][2]


  [1]: https://www.serverless.com/framework/docs/providers/aws/guide/resources
  [2]: https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html
