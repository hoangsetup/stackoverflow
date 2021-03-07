Before you start your server, just set up a swagger resource as `swagger-restify` document:

```js
// import swagger lib
var swagger = require('swagger-restify');

...
swagger.init(server, { // set up swagger for "server"
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    swaggerURL: '/docs', // endpoint what you want to access
    swaggerJSON: '/api-docs.json',
    swaggerUI: './public',
    basePath: 'http://localhost:5000',
    info: {
      title: 'swagger-restify sample app',
      description: 'Swagger + Restify = {swagger-restify}'
    },
    apis: ['./api.js', './api.yml'],
    middleware: function(req, res){}
});

server.listen(5000,function(){
    console.log("Starting server at :%s,%s",server.url,server.name)
})
``` 
