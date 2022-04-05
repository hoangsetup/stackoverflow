You can update `verify` option to verify body json content.

```js
    verify: (req, res, buf, encoding) => {
        if(!req.is('application/json')){
            throw new Error('Invalid request');                   
        }
        
        try {
            JSON.parse(buf.toString(encoding)); // try to parse the body buff
        } catch (err) {
            throw new Error('Body is not a json object');
        }                      
    }
```
