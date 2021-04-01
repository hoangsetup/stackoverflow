Too many ways to do that, this is one of the simple ways.

Cast the time to a Date object, then get their timestamp (ms), finally get the duration:

```js
const startTimeTs = new Date(`2021-04-01 ${startTime}`).valueOf();
const endTimeTs = new Date(`2021-04-01 ${endTime}`).valueOf();

const durationTs = endTimeTs - startTimeTs;
const durationInSecondes = durationTs / 1000;
const durationInMinutes = durationInSecondes / 60;
const durationInHours = durationInMinutes / 60;
```
