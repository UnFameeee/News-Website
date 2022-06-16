const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//REGISTER
router.post("/register", async(req, res)=>{
    try{
        //encrypt the password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })

        const user = await newUser.save();
        console.log(user);
        res.status(200).json(user)
        
    }catch(err){
        //We didn't make exception handler
        //so just return Error500 -> sthg wrong with Database
        res.status(500).json(err)
    }
})


//LOGIN
router.post("/login", async(req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email });
        if(!user){
            res.status(400).json("Wrong credential!");
            console.log("wrong email")
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated){
            res.status(400).json("Wrong credential!");
        }
        else{
            res.status(200).json(user);
        }
        
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router