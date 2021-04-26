const mongoose = require('mongoose');
const memoSchema = require('./memo.model');


const userSchema = mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique: true
  },
  password:{
    type:String,
    required: true
  }, 
  date:{
    type:Date
  },
  memos:{
    type:[memoSchema] 
  }
},{
  timestamps: true
})


module.exports = mongoose.model('User', userSchema);