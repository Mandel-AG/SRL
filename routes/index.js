const express = require('express'),
app = express.Router(),
memoRoute = require('./memo.routes');

app.use('/memo', memoRoute);

module.exports = app;