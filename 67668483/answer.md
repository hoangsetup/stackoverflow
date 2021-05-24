"Is there any "Serverless way" to do this" No, I think so!

You can create an npm script to that:

`package.json`

```json
...
"scripts": {
  "deploy:test": "rm -r node_modules && npm i && sls deploy -s test"
}
...
```

Now, you can run `npm run deploy:test`.
