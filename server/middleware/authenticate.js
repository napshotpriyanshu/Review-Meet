const jwt = require("jsonwebtoken");
const {User} = require("../models/userSchema");
const cookieParser = require('cookie-parser');
const express = require('express');


const app = express();
app.use(cookieParser());


const authenticate = async(req,res,next)=>{

    try{
        const token = await req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const admin = await User.findOne({_id:verifyToken._id, "tokens.token": token});

        if(!admin){
           throw new Error("user not found");
        }
        
        req.token = token;
        req.admin = admin;
        req.userID = admin._id;

        next();

    }catch(err){
        res.status(401).send("Unautherised no token");
    }
}

module.exports = authenticate;