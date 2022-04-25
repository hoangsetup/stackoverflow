You can create a new tsconfig file just for building. ex: copy your current `tsconfig.json` to `tsconfig.build.json`

Remember to update esbuild options in `serverless.ts`

```ts
...
custom: {
    esbuild: {
        tsconfig: 'tsconfig.build.ts'
    }
}
...
```

then create a new `tsconfig.json` for IDE(vscode) and test:

```json
{
  "extends": "./tsconfig.paths.json", // extend setting from build config
 
  "include": [
    "src/**/*.ts",
    "tests/**/*.ts" // include tests directory
  ],
  "exclude": [
    "node_modules/**/*",
    ".serverless/**/*",
    ".webpack/**/*",
    "_warmup/**/*",
    ".vscode/**/*"
  ]
}
```
