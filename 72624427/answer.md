If you don't want to update your lambda function, just simulate [APIGateway event][1] object by boto3 client:

If your api looks like `https://linktolambda/{id}` (ex: `https://linktolambda/123456`)

You will invoke with this code:

```py
        payload = { "pathParameters": { "id":"123456" } } 
        result = client.invoke(FunctionName=conf.lambda_function_name,
                    InvocationType='RequestResponse',                                      
                    Payload=json.dumps(payload))
```

Or your API look like `https://linktolambda?id=123456`

```py
        payload = { "queryStringParameters": { "id":"123456" } } 
        result = client.invoke(FunctionName=conf.lambda_function_name,
                    InvocationType='RequestResponse',                                      
                    Payload=json.dumps(payload))
```


  [1]: https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
