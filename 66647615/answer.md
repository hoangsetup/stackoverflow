You can use `.find` method to get the descendants of each element in the current set of matched elements, filtered by a selector  - `a` in this case:

```js
...
const link = $(this).find('a').attr('href');
...
```
