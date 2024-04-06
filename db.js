const mongoose=require('mongoose');
require('dotenv').config();
//define mogodb connection URL
const  mongoURL=process.env.DB_URL_LOCAL // local connection
//const mongoURL=process.env.DB_URL;

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
// exports database server
module.exports=db;
    
