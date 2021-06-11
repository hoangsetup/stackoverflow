I guest type of your `btn` (html attribute `type`) is `submit`, then when you click the button, a form will be submitted. That action reloads your page.

To fix that issue, you can remove the button type, or ignore submit event in the event handler function.

```js
const fetchData = async (event) => { // event parameter
    event.preventDefault(); // ignore event
    const fetchUser = await fetch(USER_API)
    const userData = fetchUser.json()
    userData.then(resolve => console.log(resolve))
}
```
