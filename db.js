const mongoose=require("mongoose");

//define the mongodb connection URL
const mongoURL='mongodb://localhost:27017/hotels'

//for connection stablished require
mongoose.connect(mongoURL)

const db = mongoose.connection;

//for connection
db.on('connected',()=>{
console.log('connected to database');
});
db.on('error',(err)=>{
    console.log('mongodb error:',err);
});
db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});


//export the database connection to run server

module.exports=db;