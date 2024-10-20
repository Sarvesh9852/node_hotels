const express = require('express');
const app = express();
const db = require('./db');

const bodyparser =require('body-parser');  //first install from terminal
app.use(bodyparser.json());//store data in req.body

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