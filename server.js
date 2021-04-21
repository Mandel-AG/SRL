const express = require('express'),
app = express(),
cookieParser = require('cookie-parser'),
path = require('path');
require('dotenv').config();
const routing = require('./routes/index'); 
app.use(cookieParser());

require('./database/index');





exports.app = app;
require('./config/jwt.config');


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(routing);



app.listen(process.env.PORT || 3900);