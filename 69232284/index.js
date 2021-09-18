const { spawn } = require('child_process');
const spawnPromise = (command, args) => {
  return new Promise((resolve) => {
    const pro = spawn(command, args, { stdio: 'inherit' });
    pro.on('close', resolve);
  });
}

(async () => {
  await spawnPromise('node', ['--version']);
  await spawnPromise('cal', ['10', '2020']);
})();
