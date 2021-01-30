Append `xhrFields` option for your `ajax` 's options.

> The XMLHttpRequest.withCredentials property is a Boolean that indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. Setting withCredentials has no effect on same-site requests.

[Ref link.][1]

Your function will become like:

```js
function urlExists(url, callback) {
    $.ajax({
        type: 'HEAD',
        url: url,
        dataType:"jsonp",
        timeout: "1000",
        xhrFields: { // this option
            withCredentials: true,
        },
        statusCode: {
            404: function () {
                alert("404");
            },
            200: function () {
                alert("200");
            }
        }
    });
}
var a = urlExists("https://twitter.com/");
```


  [1]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
