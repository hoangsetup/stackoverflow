const ratify = require('node-ratify');

function callback() {
  return Promise.resolve(true);
}

console.log(ratify.isFunction(callback));
