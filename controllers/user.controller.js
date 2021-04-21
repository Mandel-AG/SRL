const User = require('../models/user.model');


exports.getUsers = async(req, res, next) => {
  try{
    const user = await User.find().populate()
    res.json(user)
  }
  catch(error){
    next(error)
  }
}
