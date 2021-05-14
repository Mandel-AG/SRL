const express = require('express');
const app = express.Router();
const User = require('../models/user.model');

const { createMemo, updateMemo, deleteMemo } = require('../controllers/memo.controller');


// app.get('/', getMemos)

app.get('/addMemo', (req, res, next)=>{
  res.render('addMemo')
})

app.get('/updateMemo/:id', (req, res, next) => {
  // const memo = req.user[0].memos.map(memo => console.log(memo._id))
  // console.log('test',req.user[0].memos[0]._id)
  // console.log('params',req.params.id)
    res.render('updateMemo',{memo}) 
})


app.get('/deletememo/:id', (req, res, next) =>{
  // const memo = req.user[0].memos.filter(memo => memo._id == req.params.id )
  deleteMemo

})

app.post('/createMemo', createMemo)


app.post('/updateMemo/:id',updateMemo)


app.post('/deleteMemo/:id', deleteMemo)


module.exports = app;