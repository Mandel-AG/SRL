const express = require('express');
const app = express.Router();

const { createMemo, updateMemo, deleteMemo } = require('../controllers/memo.controller');


// app.get('/', getMemos)

app.get('/addMemo', (req, res, next)=>{
  res.render('addMemo')
})

app.post('/createMemo', createMemo)


app.post('/updateMemo/:id',updateMemo)


app.post('/deleteMemo/:id', deleteMemo)


module.exports = app;