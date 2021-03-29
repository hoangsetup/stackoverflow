You can use moment until to create filter condition:


```js
const today = moment(); // Keep today is a moment object
getPeriod = getPeriod.filter(
    (item) => moment(item.dateEnd).isSameOrAfter(today) && moment(item.dateStart).isSameOrBefore(today);
);

```

Ref: [document][1]

Update:
Because you want to it returns `period: 'P4'`, then I updated the condition.


  [1]: https://momentjs.com/docs/#/query/is-same-or-before/
