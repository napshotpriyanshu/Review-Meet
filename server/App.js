const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'));

app.listen(4000,function(){
    console.log("Server is running on port 4000");
})