const express = require('express');
const app = express.Router();

const { createModel } = require('../controllers/memo.controller');


app.get('/', (req, res, next) => {

})

app.post('/createMemo', createModel)


app.post('/updateMemo', (req, res, next) => {
  
})


app.post('/deleteMemo', (req, res, next) => {
  
})


module.exports = app;