You function the same with (I recommended use `async/await` completely)

```js
async function getSingle(url) {
  const response = await fetch(url);
  const html = await response.text();

  const output = document.querySelector('.output');
  output.innerHTML = html;
  text += "\n" + document.querySelector('.post-body').innerText; // "text" ???
}
```

To keep the order, you can call the function in order by a for-loop, the request will be called one by one:

```js
const urls = ['url1', 'url2'];

for (const url of urls) {
  await getSingle(url);
}
```

If you want to call the requests in parallel, let's use Promise.all. But you have to refactor your function - it will returns html string:

```js
async function getSingle(url) {
  const response = await fetch(url);
  const html = await response.text();
  return html
}

const htmls = await Promise.all(urls.map(url => getSingle(url));
for (const html of htmls) {
  const output = document.querySelector('.output');
  output.innerHTML = html;
  text += "\n" + document.querySelector('.post-body').innerText; // "text" ???
}
```
