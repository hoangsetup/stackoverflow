At first, about the layer folder structure, all your shared files have to store under **nodejs** folder. This means, your `layer` will look like this:


05-24 07:09PM ~/poc/webapp-layers $ ls
index.js  layers  node_modules  package-lock.json  package.json  serverless.yml

```
~/poc/webapp-layers $ tree
...
layers/
   nodejs/
      accounts/
         index.js
...

```

But, with the above structure, you have to update your lambda function to require `accounts` modules

```js
const accounts = require("/opt/nodejs/accounts");
```

If you want to use 

```js
const { accounts } = require("layers");
```

the structure should be:

```
~/poc/webapp-layers $ tree
...
layers/
   nodejs/
      node_modules/   <---------------
          layer/
             index.js
      accounts/
         index.js
```

And `layer/index.js` just re-export `accounts` module

```js
"use strict";
const accounts = require("../accounts");
exports.accounts = accounts;
```
