const express = require('express'),
app = express.Router(),
memoRoute = require('./memo.route'),
authRoute = require('./auth.route'),
userRoute = require('./user.route');
const {checkAuthentification} = require("../config/authentification");


app.get('/', (req, res ,next)=> {
  res.render('login')
})

app.get('/register', (req, res ,next)=> {
  res.render('register')
})

app.get("/homepage" , checkAuthentification, (req, res, next) => {
  const user = req.user[0]
  res.render('homePage',{user})
})








app.use('/memo',checkAuthentification, memoRoute);
app.use('/auth', authRoute);
app.use('/user', userRoute);



module.exports = app;