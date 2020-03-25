const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register(req,res) {
        console.log(req.body)

        User.create(req.body)
            .then(newUser => {
                const token = jwt.sign({
                    id:newUser._id,
                    email:newUser.email
                },process.env.SECRET_KEY);
                // console.log(token);
                
                res.cookie('token', token, {
                    httpOnly:true
                })
                .json({status:"Success" })
            })
            .catch(err=>{
                console.log(err)
                res.status(400).json(err)})    
    },

    async login(req,res) {
        const { email, password } = req.body;
        const errorMessage = "Please check your email and password.";

        try{

            const user = await User.findOne({ email });
            // console.log(user);
            if(user == null ){
                throw new Error(errorMessage);
            }
            
            const result = await bcrypt.compare(password,user.password)
            
            if(result == false){
                throw new Error(errorMessage);
                // return res.sendStatus(400);
                
            }

            const token = jwt.sign({
                id:user._id,
                email:user.email
            },process.env.SECRET_KEY);
            // console.log(token);
            
            res.cookie('token', token, {
                httpOnly:true
            })
            res.json({status:"Success", token })

        } catch(e) {
            res.status(400).json({ message : errorMessage })
        }

        //find user by email

        //confirm the password is a match
        // somehow store some information about the user
    },

    logout(_,res) {
        res.clearCookie('token');
        res.json({status:'Success' });
        
    }
}