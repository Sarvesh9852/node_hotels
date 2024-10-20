const express = require('express');
const app = express();
const db = require('./db');

//for identification purpose ki jo humne 'dotenv' file bnaya h wo server me import krna h
require('dotenv').config();

const bodyparser =require('body-parser');  //first install from terminal
app.use(bodyparser.json());//store data in req.body

//iska mtln ye hua ki agr koi v data online present hua to thk h wrna local host(5600) use krega
const PORT=process.env.PORT||5600;

app.get('/', function (req, res) {
  res.send('hii,welcome to our hotel')
})



// import the router files
const personRoutes= require('./routes/personRoutes');
const menuRoutes= require('./routes/menuRoutes'); 

//use the person router
app.use('/person', personRoutes);
app.use('/menu',menuRoutes); 


app.listen(5600,()=>{
    console.log('server is lestning'); 


})