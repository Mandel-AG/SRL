const mongoose = require("mongoose");

const memoSchema = mongoose.Schema({
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
  }
},{
  timestamps : true
})


module.exports = mongoose.model('Memo', memoSchema)

