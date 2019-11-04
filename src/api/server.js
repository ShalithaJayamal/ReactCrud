const express = require('express');
const app = express();
const bodypParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

app.use(cors());
app.use(bodypParser.urlencoded({extended: true}));
app.use(bodypParser.json());

app.listen(PORT,function ()
{
    console.log('Server i................s Running on port:',PORT);
});