Just "convert" `$.getJSON` from callback style to Promise is required and enough.

This is my example, maybe you have handle error case by yourself.

```js
function loadUserPayRateWrapped(projectId) {
  return new Promise((resolve, reject) => { // wrap callback function into a promise
    var URI = "/projects/getAssignedResponsibilities?projectId=" + projectId;
    $.getJSON(URI, function (data) {
      const defaultPayRate = getDataFromCookie("payRate"); // extract to variable to reuse
      if (data === null) { // recommend style: if block with {}
        return resolve(defaultPayRate);
      } else {
        const employeeId = getDataFromCookie("empId");
        if (data[0].alternatePay === null) {
          return resolve(defaultPayRate);
        }
        var altPayArray = JSON.parse(data[0].alternatePay);
        var foundAltPay = altPayArray.find(p => p.uid === employeeId); // why $.each ??
        // nothing was found, so return the regular pay rate
        return resolve(foundAltPay || defaultPayRate)
      }
    });
  });
}
``` 

Now, `loadUserPayRateWrapped` return a Promise. Then you can use Promise style to call the function, or use `async/await` style:

```js
// Promise style
loadUserPayRateWrapped(data.projectId)
  .then(payRate => {
    $("#hourlyRate").val(payRate.toFixed(2));
  });

// async/await style with IIFE
(async () => {
  const payRate = await loadUserPayRateWrapped(data.projectId); // wait
  $("#hourlyRate").val(payRate.toFixed(2));
})();
```
