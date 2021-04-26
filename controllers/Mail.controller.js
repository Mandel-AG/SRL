const nodemailer = require('nodemailer');
const schedule = require('node-schedule');


sendMail= async(mail) => {
  try{
    
      var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD
            }
        });


        const mailOptions = {
         from: 'testmailcbbv@gmail.com', // sender address
         to: 'a.mandel@hotmail.fr', // list of receivers
         subject: mail.title, // Subject line
         html: mail.content
       };
       
       transporter.sendMail(mailOptions, function (err, info) {
         if(err)
           console.log(err)
         else
           console.log(info);
      });

  }catch(e){
    console.log(e)
  }
}



sendIn7days = () => {
  schedule.scheduleJob((date + 60000), function(){
    console.log('The world is going to end today.');
    console.log(date);
  })
}

sendIn16days = () => {
  schedule.scheduleJob((date + 60000), function(){
    console.log('The world is going to end today.');
    console.log(date);
  })
}

sendIn35days = () => {
  schedule.scheduleJob((date + 60000), function(){
    console.log('The world is going to end today.');
    console.log(date);
  })
}


exports.delaySending = async(mail) => {

   new Promise((resolve, reject) => {
    const date = Date.now();
    resolve(

      schedule.scheduleJob((date + 3.6e+6), function(){
      // console.log('The world is going to end today.');
      // console.log(date);
      sendMail(mail)
      })

    )
  })
}
