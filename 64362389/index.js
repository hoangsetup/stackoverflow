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
];

const result = _.maxBy(arr, (i) => {
  return i.value - i.position;
});
console.log(result);
