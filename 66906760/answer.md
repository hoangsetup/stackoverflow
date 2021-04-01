Currently, serverlessjs does not support to set cors for all function at once, you have to enable cors for each function event.

In the normal way, you just define the cors setting once and apply it for the functions (like a variable)


```yml
# ...
custom:
  defaultCors:
    origin: "*"
    headers:
      - Content-Type
      - X-Amz-Date
      - Authorization
      - X-Api-Key
      - X-Amz-Security-Token
      - X-Amz-User-Agent
# ...
functions:
  function1:
    handler: api.refresh
    events:
      - http:
          path: function1
          method: post
          cors: ${self:custom.defaultCors}
```
