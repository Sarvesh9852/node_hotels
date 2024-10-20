const mongoose=require('mongoose');

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        enum:["chef","waiter","manager"],
        required:true,

    },
    mobile:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },

});

//now we are create model given that schema

const person =mongoose.model('person',personSchema);

// for export the model for run server

module.exports=person;

