const express=require('express');
const router=express.Router();
const person=require('./../models/person');





router.post('/',async (req,res)=>{


    try{
    
        const data=req.body;
        const newPerson=new person(data);
       const response=await newPerson.save();
       console.log('data saved');
       res.status(200).json(response);
    
    
    }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server Error '});
    }
    });
    //GET Method to get the person
    router.get('/',async (req,res)=>{
        try{
            const  data=await person.find(); // prersom is schema 
            console.log('data featched');
            res.status(200).json(data);
    
        }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal server Error'});
    
        }
    });
    
    
    
    // parametrised rout
    // parametrised rout
router.get('/:workType',async(req,res)=>{
    try{
        const  workType=req.params.workType;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const response=await person.find({work: workType});
            console.log('response featched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid work Type'});
        }
    }catch(error){
        console.log(error); // corrected here
        res.status(500).json({error:'Internal  Server Error'});
    }
});












module.exports=router;
// router.get('/')
