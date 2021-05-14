const jwt = require("jsonwebtoken");
const User = require('../models/user.model');
const { app } = require('../server');
const secret = process.env.SECRET_TOKEN;

const createToken = (userId) => {
  const token = jwt.sign({sub:userId}, secret);
  return token;
}

exports.createToken = createToken;


const extractUserFromToken = async(req, res, next) => {
  const token = req.cookies.token;
  if(!token) next()
  if (token){
    const decodedToken = jwt.verify(token, secret);
    const userId = decodedToken.sub;
    const user = await User.find({_id:userId});
    if(!user){
      res.sendStatus(401)
      res.clearCookie('token')
    } 
    if(user) {
      req.user = user;
      next()
    } 
  }
}


const addJwtFeatures = (req, res, next) => {
  req.isAuthenticated = () => !!req.user;
  req.logOut = () => res.clearCookie('token').redirect('/');
  req.login = async(userId) => {
    const token = await createToken(userId)
    res.cookie('token',token)
    // const user = await User.findById({_id:userId})
    // res.render('homePage',{user})
    res.redirect('/homepage')
  }
  next();
}


app.use(extractUserFromToken)
app.use(addJwtFeatures);