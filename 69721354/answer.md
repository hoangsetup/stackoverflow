Update jest configuration to define exactly tsconfig file for `ts-jest`:


`package.json`

```json
{
  "jest": {
    "preset": "ts-jest",
    "environment": "node",
    "globals": {
      "ts-jest": {
        "tsconfig": "./tests/tsconfig.json"
      }
    }
  }
}
```
