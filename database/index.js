const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
  }
)
.then(()=>{
console.log("c'est connecté !")
})



module.exports = mongoose.createConnection(process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
)
.then(()=>{
  console.log("c'est connecté !")
})