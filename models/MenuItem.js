const mongoose=require('mongoose');
const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        reuired:true,
    },
price:{
    type:Number,
   required:true,
},
taste:{
    type:String,
    enum:['Sweet','Spicy','Sour'],
    
},
is_drink:{
    type:Boolean,
    default:false,
},
ingredients:{
    type:[String],
    default:[]

},
num_sales:{
    type:Number,
    default:0,

},


});
//comment added for the  testing purpose


const MenuItem=mongoose.model('MenuItem',menuItemSchema);
module.exports=MenuItem;

