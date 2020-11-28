const mongoose = require('mongoose');


module.exports = mongoose.createConnection(process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
)
.then(()=>{
  console.log("c'est connecté !")
})