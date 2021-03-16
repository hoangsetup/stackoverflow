`var day = ("0" + (todaysDate.getDate()+3)).slice(-2);` returns `34` if today is `30th Mar`

In this case, you can use `setDate` function of Date object to calculate the `minDate` value:

```js
var minDate = new Date(); // Gets today's date
minDate.setDate(minDate.getDate() + 3); // right here
// update min setting
document.getElementById("dateField").min = todaysDate.toISOString();
```
