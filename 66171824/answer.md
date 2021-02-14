Your express server configuration is enough. The error comes from your client-side. You call an http request from a `null` origin, I guest your url will look like: `C://your_directory/index.html`.

I have 2 option to solve that issue:

1. Serve your html in a domain, ex: `http://localhost:8080/index.html`
2. Enable `no-cors` for your `fetch` request

```js
    fetch('http://localhost:3000/collection/orders', {
        method: 'POST', // set the HTTP method as 'POST'
        headers: {
            'Content-Type': 'application/json', // set the data type as JSON
        },
        mode: 'no-cors', // new line
        body: JSON.stringify(this.myArray), // need to stringify the JSON object
    })
```
