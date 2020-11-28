const express = require('express'),
app = express();

require('dotenv').config();
require('./database/index');


const routing = require('./routes/index'); 

exports.app = app;




app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(routing)



app.listen(3900);