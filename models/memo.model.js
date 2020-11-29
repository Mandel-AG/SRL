const mongoose = require("mongoose");

const memoSchema = new mongoose.Schema({
  title:{
    type:String,
    require:true
  },
  content:{
    type:String,
    required:true
  },
  date:{
    type:{}
  },
  dateNow:{
    type:Number
  }
},{
  timestamps : true
})


module.exports = mongoose.model('Memo', memoSchema)

