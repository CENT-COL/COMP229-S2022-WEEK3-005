const express = require('express');
const indexRouter = require('./app/routes/index.server.routes');

const app = express();

app.use('/', indexRouter);

app.listen(3000);

console.log('Server running at http://localhost:3000/');




























