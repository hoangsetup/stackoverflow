In `OpenAPI` version 3, you do this with the `allOf` keyword. [Detail document][1]

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "Example",
    "version": "1.0"
  },
  "paths": {
    "/login": {
      "post": {
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "allOf": [
                    {
                      "$ref": "#/components/responses/defaultResponse"
                    },
                    {
                      "type": "object",
                      "properties": {
                        "token": {
                          "type": "string"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "responseSchema": {
        "type": "object",
        "properties": {
          "httpCode": {
            "type": "integer"
          },
          "message": {
            "type": "string"
          }
        }
      }
    },
    "responses": {
      "defaultResponse": {
        "$ref": "#/components/schemas/responseSchema"
      }
    }
  }
}
```




  [1]: https://swagger.io/docs/specification/data-models/inheritance-and-polymorphism/
