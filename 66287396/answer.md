Use [Object.getOwnPropertyNames()][1] to get all properties (including non-enumerable properties except for those which use Symbol). Then loop through them to find the class name:

```js
Object.getOwnPropertyNames(window).forEach((n) => {
    if (n === 'ArrayBuffer') {
        console.log('FOUND: ArrayBuffer');
    }
})
```

  [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
