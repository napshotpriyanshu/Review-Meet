const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');





// post for signup

router.post('/Signup', async (req, res) => {

    const { name, username, email, password } = req.body;

    if (!name || !email || !username || !password) {
        return res.status(422).json({ error: "fill all data" });
    }

    try{
        const userEmailExist = await User.findOne({ email: email });
        const usernameExist = await User.findOne({ username: username });

        if (usernameExist || userEmailExist) {
            return res.status(422).json({ error: "Email or Username already exixt" });
        }

        const user = new User({ name, email, username, password });
        await user.save();

        res.status(201).json({ message: "user registered successfully" });

    }catch (err) {
        console.log(err);
    }

});

// post for login

router.post('/Login', async (req, res) => {
try{
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "pls fill the data" });
    }

    const userLogin = await User.findOne({ username: username });
    

    if(userLogin){
        const checkPass = await bcrypt.compare(password, userLogin.password);

        const token = await userLogin.generateAuthToken(); 

        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+ 18000000),
        });

        if (!checkPass) {
            res.status(400).json({ error: "user error" });
        } else {
            res.json({ message: "user signin successfully" });
        }

    }else{
        res.status(400).json({error: "Incorrect details"});
    }


}catch(err) {
    console.log(err);
}

});


module.exports = router;