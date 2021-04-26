const User = require("../models/user.model");
const Memo = require('../models/memo.model');
const {delaySending} = require('./Mail.controller');



exports.createMemo = async(req, res, next) => {
  try{
    const { title, content } = req.body;
    const newMemo = {
      title: title,
      content: content,
      date : new Date().toLocaleDateString().split(":"),
      dateFromUpdating:Date.now(),
      dateNow: Date.now(),
      unique: true
    }
    const currentUser = await User.findById({_id:req.user[0]._id})
    currentUser.memos.push(newMemo)
    await currentUser.save()
    sendMail(newMemo)
    delaySending(newMemo)
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
      memoToUpdate[0].dateFromUpdating = Date.now() 
      user.markModified('memos')
      user.save()
      delaySending(memoToUpdate[0])
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
    await User.findOne({_id:req.user[0]._id}).exec()
    .then(el => {
      const user = el;
      const memoTodelete = el.memos.filter(memo => memo._id == memoId).splice(0,1)
      const indexMemoToDelete = user.memos.indexOf(memoTodelete[0]);
      user.memos.splice(indexMemoToDelete,1)
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