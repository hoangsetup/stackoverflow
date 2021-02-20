The `model.predict` function is a sync function, which means `await` keyword will not effect to them, you can remove `await` keyword when call `model.predict`, then remove `async` when defining `predict_model` function.

The `predict_model` function is a sync function (like: `let a = 1 + 1;`), "it" wait until the operation is finished then execute next line of code. In your case, the function will block the main thread (UI thread) while it is executing, this means you can not click, update DOM, run animation... on your browser.

The simple idea is to make `predict_model` become an async function with `setTimeout` function, `setTimeout` will push the "content" to a "queue", and it will not lock your UI thread:

```js
$("#raw-gen-button").click(async function(){
    console.log("Generating new predictions...");

    showButtonId("#generating-button");
    const predictions = await new Promise((resolve) => { // wrap into a Promise to use await keyword
        setTimeout(() => {
            resolve(predict_model(5))
        }, 100);
    });
    addGeneratedNamesToUI(predictions);
    showButtonId("#generate-button");

    console.log("Finished generating new predictions...");
    console.log(predictions);
});
```
