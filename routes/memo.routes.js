const express = require('express');
const app = express.Router();

const { createMemo, getMemos, updateMemo, deleteMemo } = require('../controllers/memo.controller');


app.get('/', getMemos)

app.post('/createMemo', createMemo)


app.post('/updateMemo/:id',updateMemo)


app.post('/deleteMemo/:id', deleteMemo)


module.exports = app;