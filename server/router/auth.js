const express = require('express');
const router = express.Router();
const {User} = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");
const candidate = require('../models/candidate.model');




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
                name: userLogin.name,
				id: userLogin._id,
				createdAt: userLogin.createdAt,
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

router.post('/addcandi', authenticate, async(req, res)=>{
    // console.log(req.body);

    const {name, email, phone} =req.body.candidate;
    const id = req.body.id;


    try {
        if(!name || !email || !phone) return res.status(400).send('pls enter details');
       
        const candi = await new candidate({ 
            name, 
            email, 
            phone,
            cretedBy: id
        });
        await candi.save();

        return res.status(200).send(candi);

        
    } catch (error) {
        return res.status(400).send('candiate added failed');
    }

})

router.get('/getcandi' , async (req, res)=>{
    try {
        // const {token, id} = req.body;
        console.log(req.query);
        const candiList = await candidate.find({cretedBy:req.query.id});
        res.status(200).send(candiList);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
});

router.put('/:id', async(req,res)=>{
    const {id, status, string} =req.body;
    try {
        const candi = await candidate.findById({_id:id});
        if(string == 'backword'){
            if(candi.status=='Selected'){
                candi.status = 'On Hold';
                candi.save();
                return res.send(candi);
            }
            else if(candi.status=='On Hold'){
                candi.status = 'Not Selected';
                candi.save();
                return res.send(candi);
            }
            else if(candi.status=='Not Selected'){
                candi.status = 'Pending';
                candi.save();
                return res.send(candi);
            }
        }
        else if (string == 'forward'){
            if(candi.status=='Pending'){
                candi.status = 'Not Selected';
                candi.save();
                return res.send(candi);
            }
            else if(candi.status=='Not Selected'){
                candi.status = 'On Hold';
                candi.save();
                return res.send(candi);
            }
            else if(candi.status=='On Hold'){
                candi.status = 'Selected';
                candi.save();
                return res.send(candi);
            }
        }
    } catch (error) {
        console.log(error);
    }
});


router.post('/interview', async (req, res) => {

    console.log(req.body);

    
});

module.exports = router;