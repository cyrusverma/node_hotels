const express = require('express');

const app = express();
const db=require('./db');
const person=require('./models/person');
const MenuItem=require('./models/MenuItem');

const bodyParser=require('body-parser'); //use to deal  with the reacived data in postmethod it parses the incoming data from the frontend method
app.use(bodyParser.json()); //req.body

app.get('/', (req, res) => {
    res.send("Hello world! Welcome to my website home page.");
});

app.get('/chicken', (req, res) => {
    res.send("Hello! Do you really want chicken?");
});
app.get('/southindianfood', (req, res) => {
    res.send("welcome to  south Indian Food corner🥗🍗🍖🍠 ");
});
app.get('/southindianfood/idli', (req, res) => {
    res.send("welcome to  idili corener ");
});


 const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
// comment added
const PORT =9090 ;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
