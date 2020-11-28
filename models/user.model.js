const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required: true
  },
  avatar:{
    type:String
  }, 
  date:{
    type:Date
  }
},{
  timestamps: true
})


module.exports = mongoose.model('User', userSchema);