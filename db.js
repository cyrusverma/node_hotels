const mongoose=require('mongoose');
//define mogodb connection URL
const  mongoURL='mongodb://127.0.0.1:27017/hotels'

//setup connections
mongoose.connect(mongoURL,{
useNewUrlParser: true,
useUnifiedTopology: true
})

const db=mongoose.connection;

// define event listener for the  database connection
db.on('connected',()=>{
    console.log('connected to MongoDb server');
});
db.on('error',(err)=>{
    console.log('mongDB connection  error: ',err);
});
db.on('disconnected',()=>{
    console.log('mongDB diconnected ');
});
module.exports=db;
    
