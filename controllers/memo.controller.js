const User = require("../models/user.model");
const Memo = require('../models/memo.model')


// exports.getMemos = async(req, res, next) => {
//   try{
//     const user = await User.find({_id:req.user[0]._id})

//     res.send(user.memos)
//     // res.render('homePage',{user:null, memos})
//   }
//   catch(error){
//     next(error)
//   }
// }




exports.createMemo = async(req, res, next) => {
  try{
    const { title, content } = req.body;
    const newMemo = {
      title: title,
      content: content,
      date : new Date().toLocaleDateString().split(":"),
      dateNow: Date.now(),
      unique: true
    }
    const currentUser = await User.findById({_id:req.user[0]._id})
    currentUser.memos.push(newMemo)
    await currentUser.save()
    res.send(currentUser)
  }
  catch(error){
    next(error)
  }
}



exports.updateMemo = async(req, res, next) => {
  try{
    const {title, content} = req.body;
    const memoId = req.params.id;    
    
    await User.findOne({_id:req.user[0]._id}).exec()
    .then(el => {
      const user = el;
      const memoToUpdate = el.memos.filter(memo => memo._id == memoId) 
      memoToUpdate[0].title = title
      memoToUpdate[0].content = content 
      user.markModified('memos')
      user.save()
      res.send(user)
    })
  
    .catch(e => next(e))
  }
  catch(error){
    next(error)
  }
}

exports.deleteMemo = async(req, res, next) => {
  try{
    const memoId = req.params.id;
    await Memo.findByIdAndDelete({_id:memoId})
    res.json("Le mémo est éffacé!")
  }
  catch(error){
    next(error)
  }
}