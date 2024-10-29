const express = require('express');
const app = express();
const r1 = express.Router();

r1.use((req, res, next) => {
    console.log('r1 middleware');
    next();
});

r1.get('/a', function (req, res) {
    return res.send('x');
});

const r2 = express.Router();

r2.get('/b', function (req, res) {
    return res.json({message: 'success'});
});

app.use('/wherever/else', r2);
app.use('/wherever', r1);
app.use('/elsewhere', r2);

app.listen(8080, function () {
    console.log('Server ready');
});