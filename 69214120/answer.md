Your find condition is not correct:

```js
        const fetchedData = new dataModel({ // ???
            name : req.params.name
        });
        collection.find(fetchedData).toArray(function(err, result) {
            res.send(result);
            client.close();
        })
```

`???` - I guest your meaning is `const fetchedData = { name: req.params.name};` - Find every document which have `name` is `req.params.name` (`S` - in your case). But there is no document has `name` is `S` in your collection, then it returns `[]`.

If you want to find the documents with `S` as the first character of their name, you can use Regex syntax:

```js
        const query = {
            name : new RegExp('^' + req.params.name, 'i'), // i - case insensitive, => /^S/i
        };
        collection.find(query).toArray(function(err, result) {
            res.send(result);
            client.close();
        })
```
