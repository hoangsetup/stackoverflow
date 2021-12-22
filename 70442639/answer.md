It seems `d3.csv()` returns a Promise, then we have 2 ways to handle the result of the csv function:

As you did, just call `ConnectedScatterplot` in then block:

```js
d3.csv("./driving.csv").then((driving) => { // let driving is redundant
    ConnectedScatterplot(driving, {...});
})
```

If you are inside an async function, you can use `await` syntax:

```js
(async () => { // async function
    const driving = await d3.csv("./driving.csv"); // await
    ConnectedScatterplot(driving, {...});
})();
```
