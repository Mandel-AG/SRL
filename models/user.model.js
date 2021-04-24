const mongoose = require('mongoose');
const memoSchema = require('./memo.model');


// const memoSchema = new mongoose.Schema({
//   title:{
//     type:String,
//     require:true
//   },
//   content:{
//     type:String,
//     required:true
//   },
//   date:{
//     type:{}
//   },
//   dateNow:{
//     type:Number
//   }
// },{
//   timestamps : true
// })

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
    type:[memoSchema] 
  }
},{
  timestamps: true
})


module.exports = mongoose.model('User', userSchema);