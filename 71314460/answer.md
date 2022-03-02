> Basic access authentication: When the user agent wants to send authentication credentials to the
> server, it may use the Authorization header field.
[Reference][1]


According to the package [document][2], you can provide headers to your request. Then your logic code will become like this:

```js
...
o(process.env.ODATA_SERVER, {
    headers: { 'Authorization': `Basic ${Buffer.from('username:password').toString('base64')}` },
})
...
```


  [1]: https://en.wikipedia.org/wiki/Basic_access_authentication
  [2]: https://www.npmjs.com/package/odata#options
