This page use [DocumentFragment][1] to generate the content, then it is a little hard to query the DOM as normally. But you can use [evaluateHandle][2]
 function to execute a js script on the page, then you can query the `#downloadsList` by this way:

```js
await page.waitForSelector("body > downloads-manager", { timeout: 5000 });
const downloadsList = await page.evaluateHandle(`document.querySelector("body > downloads-manager").shadowRoot.querySelector("#downloadsList")`);
    console.log(downloadsList);

```

How to get the js snippet?

[![enter image description here][3]][3]


  [1]: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
  [2]: https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pageevaluatehandlepagefunction-args
  [3]: https://i.stack.imgur.com/utNwE.png
