const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const cors = require('cors');
const cookiParser = require("cookie-parser")


require('./db/conn');

app.use(express.json());
app.use(cookiParser());
// app.use(cors());

app.use(require('./router/auth'));

app.listen(4000,function(){
    console.log("Server is running on port 4000");
})