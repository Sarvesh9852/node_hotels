const express=require('express');
const router=express.Router();
const person=require('.././models/person')

//post rout to add a person

router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newPerson=new person(data);   

        //save the data

        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
        
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

//get method to get the person

router.get('/',async (req,res)=>{
    try{
        const data=await person.find();
        console.log("data saved");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

//get person work type using api
router.get('/:worktype', async (req, res) => {
    try {
        const workType = req.params.worktype; // extract the worktype from the URL parameter
        
        if (workType === 'chef' || workType === 'manager' || workType === 'waiter') {
            // Use await to resolve the promise returned by the find() method
            const response = await person.find({ work: workType });
            console.log("response fetched");
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'invalid work type' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

//for person data update

router.put('/:_id',async(req,res)=>{
    try{
        const personId=req.params._id; //extract the id from url parameter
        const updatePersonData=req.body; //send those data which person cling wants to change
        const response=await person.findByIdAndUpdate(personId,updatePersonData,{
            new:true, //run the update document
            runValidator:true,//run mongoose validatiors

        })
        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data updated')
        res.status(200).json(response);
    } catch(err){
        console.log(err)
        res.status(500).json({error:'internal issue'});
    }  
})

//for delete 

router.delete('/:id', async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data delete');
        res.status(200).json({message:'person deleted sucesssfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal issue'});

    }
})

//hey there

module.exports=router;
