const Memo = require('../models/memo.model');


exports.getMemos = async(req, res, next) => {
  try{
    const memos = await Memo.find()
    res.json(memos)
  }
  catch(error){
    next(error)
  }
}



exports.createMemo = async(req, res, next) => {
  try{
    const { title, content } = req.body;
    const newMemo = new Memo({
      title: title,
      content: content,
      date : new Date().toLocaleDateString().split(":"),
      dateNow: Date.now(),
      unique: true
    })
    await newMemo.save()
    res.send(newMemo)
  }
  catch(error){
    next(error)
  }
}



exports.updateMemo = async(req, res, next) => {
  try{
    const memoId = req.params.id;
    const {title, content} = req.body;
    const newMemo = await Memo.findOneAndUpdate({_id:memoId},
      {$set:{title:title, content:content}},
      {new:true}
    )
    res.json(newMemo)
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