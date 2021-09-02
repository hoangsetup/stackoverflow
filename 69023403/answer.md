You can use the reverse condition operator - `!` to exclude a special file. Then your configuration will look like this:

```json
"testMatch": [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
      "!<rootDir>/src/**/data.test.{ts,tsx}" // this line
    ],
```
