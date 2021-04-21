const User = require('../models/user.model');
const bcrypt = require('bcrypt');
 
// Register



exports.register = async (req, res, next) => {
  try{
    const { email, password } = req.body;
    const cryptedPassowrd = await bcrypt.hash(password, 10);
    const newUser = new User({
      email:email,
      password : cryptedPassowrd
    })
    await newUser.save()
    req.login(newUser._id)
  }
  catch(error){
    next(error)
  }
} 


// Login


exports.logIn = async(req, res, next) => {
  try{
    const {email, password} = req.body;
    const userEmail = await User.findOne({email:email.toLowerCase().trim()})
    if(!userEmail) res.status(403).render('login',{error:'Mauvais email.'})
    // if(!userEmail) res.status(403).send({error:'Mauvais email.'})
    if(userEmail){
      const match = await bcrypt.compare(password, userEmail.password )
      if(!match) res.status(403).send({error:'Mot de de passe incorrect.'});
      if(match){
        req.login(userEmail._id)
      }
    }
  }
  catch(error){
    next(error)
  }
}


