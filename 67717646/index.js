const { produce } = require('immer');

Promise.resolve({ eggs: 0 }).then(
  produce((eggCounter) => {
    return Promise.resolve(5).then((n) => {
      eggCounter.eggs += n;
    });
  })
).then(console.log);

