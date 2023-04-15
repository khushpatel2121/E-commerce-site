import express from "express";
import bcrypt from "bcrypt";
import User from "../models/users.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken"

const router = express.Router();


router.post("/register" , async(req,res,next)=>{
    try{
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(req.body.password,salt);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPass,
      });

      const savedUser = await newUser.save();
      res.status(200).json(savedUser)
    }catch(err){
        next(err)
    }
});

router.post("/login" , async(req,res,next)=>{
    try{
      const user = await User.findOne({username:req.body.username});
      if(!user) return next(createError(404,"user not found"));

      const isCorrect =  bcrypt.compareSync(req.body.password, user.password);
      if(!isCorrect) return next(404,"Wrong Credentials");

      const token = jwt.sign({
        id:user._id,
        isAdim:user.isAdmin
      },process.env.JWT);

      const {password,isAdim,...others} = user._doc;

      res.cookie("access_token",token,{
        httpOnly:true,
      }).status(200).json({...others})
    }catch(err){
         next(err)
    }
})

export default router