const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');

router.post('/',async (req,res)=>{
   
    
    try{
    
        const data=req.body;
        const newitem=new MenuItem(data);
       const response=await newitem.save();
       console.log('data saved');
       res.status(200).json(response);
    
    
    }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server Error '});
    }
    });
    router.get('/',async (req,res)=>{
        try{
            const  data=await MenuItem.find(); // MenuItem is schema 
            console.log('data featched');
            res.status(200).json(data);
    
        }catch(err){
            console.log(err);
            res.status(500).json({error:'Insternal server Error'});
    
        }
    });
    router.get('/:t',async (req,res)=>{
        try{
            const swad=req.params.t;
            if(swad=='Sweet' || swad=='Sour' || swad=='Spicy'){
            const  data=await MenuItem.find({taste:swad}); // MenuItem is schema 
            console.log('data featched');
            res.status(200).json(data);
           
        
        }
            else{
                res.status(404).json({error:'Invalid tase'});

            }
    
        }catch(err){
            console.log(err);
            res.status(500).json({error:'Insternal server Error'});
    
        }
    });
 router.put('/:id',async (req,res)=>{
    try{
  const itemid=req.params.id; //Extract the id from the URL parameter
  const updatedmenuData= req.body;
  const response=await MenuItem.findByIdAndUpdate(itemid,updatedmenuData,{ //after updation data  will be stored in response

    new:true, //return updated document
    runValidators: true,  //run mongoose validation
  });


  if(!updatedmenuData){
    return res.status(404).json({error:' menuItem no found'});
  }
console.log("data updated");
res.status(200).json(response);


}catch(err){

}

});
router.delete('/:id',async (req,res)=>{
try{
const  itemid=req.params.id;
//const deletedMenuData=req.body;
// Assuming you  have a person model
const response=await MenuItem.findByIdAndRemove(itemid);
if(!response){
   return res.status(404).json({error: 'menu not  fonnd'});
}
console.log('data deleted');
res.status(200).json({message:'menu deleted successfully'});



}catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server Error'});

}


});



















module.exports=router;
