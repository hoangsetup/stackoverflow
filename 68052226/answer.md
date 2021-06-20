Check `vage` object, if it already includes `candidatos` just push new item to this array, else create new array for `candidatos`

```js
if (Array.isArray(vaga.candidatos) {
  vaga.candidatos.push(req.user._id);
} else {
  vaga.candidatos = [req.user._id];
}
```
