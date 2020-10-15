const _ = require('lodash');

const arr = [
  {
    value: 1,
    position: 1,
    id: 333,
  },
  {
    value: 1,
    position: 2,
    id: 222,
  },
  {
    value: 1000,
    position: 1000,
    id: 222,
  },
];

const result = _.maxBy(arr, (i) => {
  const dup = _.filter(arr, (o) => o.value === i.value).length;
  return i.value - dup ? i.position : 0;
});
console.log(result);
