The first variable is an array. An array also is an object, which means it has attribute keys and values. But, the attribute keys of a normal array are numbers (index), and you can add an additional key to an array as an object.

```js
const arr = ['index 0 value'];
arr[1] = 'index 1 value'; // attribute key is `1`;
arr.input = 'input value';
arr['output'] = 'output value';

console.log(arr);
```

The second result, `RowDataPacket` is an es6 class type

```js
class RowDataPacket {
  constructor(id, message) {
    this.id = id;
    this.message = message;
  }
}

const instance = new RowDataPacket("new id", "new message");

console.log(instance);
console.log([instance]);
```
