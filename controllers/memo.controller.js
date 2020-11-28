const Memo = require('../models/memo.model');


exports.createModel = async(req, res, next) => {
  try{
    const { title, content } = req.body;
    const newMemo = new Memo({
      title: title,
      content: content,
      date : new Date().toLocaleDateString().split(":"),
      unique: true
    })
    console.log(newMemo)
    await newMemo.save()
    res.send(newMemo)
  }
  catch(error){
    next(error)
  }
}