const express = require('express');
const fs=require('fs');

const app = express();
const db=require('./db');
require('dotenv').config();
const person=require('./models/person');
const MenuItem=require('./models/MenuItem');

const bodyParser=require('body-parser'); //use to deal  with the reacived data in postmethod it parses the incoming data from the frontend method
app.use(bodyParser.json()); //req.body



//middleware function 
const logRequest=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request made to :${req.originalUrl}`);

next(); //move to next phase
}
app.use(logRequest);
app.get('/', (req, res) => {
    res.send("Hello world! Welcome to my website home page.");
});
 const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
// comment added
const PORT =process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
