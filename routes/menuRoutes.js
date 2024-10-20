const express=require('express');
const router=express.Router();
const MenuItem =require('.././models/MenuItem')


router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newMenuItem =new MenuItem(data);   

        //save the data

        const response=await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);
        
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})
router.get('/',async (req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log("data saved");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType==='sour'||tasteType==='sweet'||tasteType==='spicy'){
            const response = await MenuItem.find({ taste: tasteType });
            console.log("data fatched");
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'item not found'});
        }
    }catch(err){
        console.log(err);
        res.sendStatus({error:'invalid internal storage'})
        
    }
})

module.exports=router;
