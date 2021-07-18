You can use [copy-webpack-plugin][1] to copy the views folder to the destination directory.

In your webpack configuration file (`webpack.config.js`)

```js
const CopyPlugin = require("copy-webpack-plugin");
// ...

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "views", to: path.join(__dirname, '.webpack', 'service', 'views') },
      ],
    }),
  ],
```

And also update serverless.yml file to include views directory to your lambda function


```yml
package:
  include:
    - views/**
```



  [1]: https://www.npmjs.com/package/copy-webpack-plugin
