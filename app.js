var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose  = require('mongoose');
var http = require('http');
var cors = require('cors');

const db = require('./config/db').database;
mongoose.connect(db,{useNewUrlParsar:true})
   .then((connected)=>{
   	console.log("DB CONNECTED SUCCESSFULLY!");
   })
   .catch((err)=>{
   	console.log("DB ANOT CONNECTED!",err);
   })

   const port = process.env.PORT || 5000

   app.use(cors());

   app.use(bodyParser.json())

   app.get('/',(req,res)=>{
   	res.send('WELLCOME!!!!!!!!!!!!!!!!!!!!!!!!');
   })
const postRouter = require('./routes/apis/post');

app.use('/api/post',postRouter)
   app.listen(port,()=>{
   	console.log('SERVER IS CONNECTED ON PORT:',port)
   })