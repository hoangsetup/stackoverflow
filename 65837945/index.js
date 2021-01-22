const path = require('path');

const winston = require('winston');
const filename = path.join(__dirname, 'testLog.log');

console.log(filename);

const app = require('express')();

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ filename, level: 'error' }),
    new winston.transports.File({ filename, level: 'error' }),
  ]
});

app.get('/test', (req, res) => {
  logger.log({
    level: 'error',
    message: 'Test'
  });
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log(`Server started on :3000`);
});
