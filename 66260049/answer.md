Just go to the next route in the "router handle list". The order is very important, in your example, the router list will look like
`GET /* (any thing)` -> `GET /* (any thing)` -> `GET /dashboard` -> `GET /profile`.

Your request from the browser is `GET /profile`, check the method and path by order:

is match anything -> Yes, do something, next

is match anything -> Yes, do something, next

is match GET /dashboard -> No, not execute dashboard handler, check next router in the array.


is match GET /profile -> Yes, do something, call `httpResponse.send` -> finished.


If you register a route before `app.get("/*",` route to check `login`, it will pass without check login

```js
...
app.get("/secret", function(httpRequest, httpResponse, next){

        httpResponse.send("Tada!!!");
});

app.get("/*", function(httpRequest, httpResponse, next){

    if(checkLogin())
    {
        next();
    }
    else
    {
        httpResponse.send("You are not logged in!!!");
    }
})
...
```



