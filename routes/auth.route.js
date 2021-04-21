const express = require('express');
const app = express.Router();
const { register, logIn } = require('../controllers/auth.controller');




app.post('/register', register);

app.post('/login', logIn);

app.get('/logout', (req, res, next)=>{
  req.logOut()
});


module.exports = app;