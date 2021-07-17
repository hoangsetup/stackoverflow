It seems your function will return the index of a "word" in a list of words. This means, your function has to receive 2 variables as parameters: "word" and "words".

I think the current function name (and filename) - `findNeedle` is not "correct", so I recommended changing it. How about `findWordIndex`?

The function logic is simple, you can use `Array.indexOf` utility to do it, or do it in your way.

```js
module.exports = (words, word) => words.indexOf(word);
```

Or 

```js
module.exports = (words, word) => {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      return i; // stop right after you found it
    }
  }
  return -1;
};
```
