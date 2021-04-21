const mongoose = require('mongoose');

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
  avatar:{
    type:String
  }, 
  date:{
    type:Date
  },
  memos:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Memo",
  }
},{
  timestamps: true
})


module.exports = mongoose.model('User', userSchema);