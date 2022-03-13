// This promise would be replaced with a function 
// that only can resolve under certain conditions, 
// but if it can't in time we want to reject.
const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 500, "one")
})

// This promise is the timeout that rejects if the 
// time limit is reached.
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two")
})

let onlyRunIfResolvesInTime = function () {
  return Promise.race([promise1, promise2]);
}

onlyRunIfResolvesInTime()
  .then(() => {
    console.log("running function")
  })
  .catch(() => null)
