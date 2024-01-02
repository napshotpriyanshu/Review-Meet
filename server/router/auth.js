const express = require('express');
const router = express.Router();
const {User} = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");





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
            httpOnly: true,
            expires:new Date(Date.now()+ 18000000)
        });

        if (!checkPass) {
            res.status(400).json({ error: "user error" });
        } else {
            // res.status(200).json({status:200,message: "user signin successfully" });
            res.status(200).send({
				token,
				username:username,
				email: userLogin.email,
				id: userLogin._id,
				createdAt: userLogin.createdAt,
				updatedAt: userLogin.updatedAt,
			});
        
        }

    }else{
        res.status(400).json({error: "Incorrect details"});
    }

    

}catch(err) {
    console.log(err);
}

});

router.get('/home', authenticate ,(req, res)=>{
res.send(req.admin);
});

router.get('/logout', (req,res) =>{
    console.log("Logout");
    res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send('Logout User');
});


// router.post('/addcandidate',authenticate ,async(req,res)=>{

//     res.status(201).json({ message: "user registered successfully" });
//     const {name, email, phone} = req.body;

//     const userDataID= req.userID;

//     console.log(userDataID);
//     try {
//         await User.updateOne({_id: userDataID}, {$push:{newCandidate:req.body}});
//         return res.status(200).json({})
//     } catch (err) {
//         return res.status(400).json({ error: "user error" })
//     }
// })
module.exports = router;