const express = require('express'),
app = express();
require('dotenv').config();
const routing = require('./routes/index'); 

require('./database/index');



exports.app = app;




app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(routing);



app.listen(3900);