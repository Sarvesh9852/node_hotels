const mongoose=require('mongoose');

//make scheam

const MenuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        requried:true,
    },
    price:{
        type:Number,
        requried:true,
    },
    taste:{
        type:String,
        enum:["sour","sweet","spicy"],
        requried:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    },


})

//export

const MenuItem = mongoose.model('MenuItem',MenuItemSchema);
module.exports=MenuItem;