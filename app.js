const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');


const app = express();

//db config

const db = require('./config/keys').MongoURI;

//connect mongodb

mongoose.connect(db,{useNewUrlParser:true  , useUnifiedTopology: true  })
.then(()=> console.log("mongoDB Terkoneksi..."))
.catch(err => console.log(err));


// ejs
app.use(expressLayouts);
app.set('view engine','ejs');


//bodyparser
app.use(express.urlencoded({extended:false}));

app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));


const port = process.env.PORT || 3000;

app.listen(port,console.log(`sever started at port ${port}`));