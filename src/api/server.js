const express = require('express');
const app = express();
const bodypParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('DB.js');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then
(
    onfulfilled, ()=>{console.log('database is connected')},
    onrejected ,err =>{console.log('Cannot coonected to database')}
) 

app.use(cors());
app.use(bodypParser.urlencoded({extended: true}));
app.use(bodypParser.json());

app.listen(PORT,function ()
{
    console.log('Server i................s Running on port:',PORT);
});