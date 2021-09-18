[spawn][1] is not a callback function. In other words, the last parameter of the function is not a callback function. Then, when you `promisify` spawn function, the callback function will never be called, and `resolve` function also never be called => you stuck forever in `await` action.

You need a special promisify function, that listens to `close` (or `exit`) event, then resolve the promise:

```js
const { spawn } = require('child_process');

const spawnPromise = (command, args) => {
  return new Promise((resolve) => {
    const pro = spawn(command, args, { stdio: 'inherit' });
    pro.on('close', resolve);
  });
}

async function commands() {
  await spawnPromise("command1", ["param"]);
  await spawnPromise("command2", ["param"]);
};

```


  [1]: https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options
