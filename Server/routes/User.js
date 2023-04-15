import express from "express"
import { verifyAdmin, verifyUser } from "../verifyToken.js";
import bcrypt from "bcrypt"
import User from "../models/users.js"

const router = express.Router();

router.put("/:id", verifyUser, async(req,res,next)=>{
 if(req.body.userId === req.params.id){
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password,salt);

    }try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,{
                $set:req.body
            },{
                new:true
            }
        );
        res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }
 }
});

router.delete("/:id",verifyUser, async (req,res,next)=>{

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted");
    } catch (err) {
        next(err)
    }

});

router.get("/find/:id", verifyAdmin , async(req,res,next)=>{
    try{
     const user = await User.findById(req.params.id);
     res.status(200).json(user);
    }catch(err){
       next(err)
    }
});

router.get("/",verifyAdmin, async(req,res,next)=>{
    const query = req.query.new
    try{
      const users = query ?
       await User.find().sort({_id:-1}).limit(1)
      : await User.find()
      res.status(200).json(users)
    }catch(err){
       next(err);
    }
});

router.get("/stats",verifyAdmin,async(req,res,next)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

    try{
        const data = await User.aggregate([
         {
            $match:{createdAt:{$gte:lastYear}}
         },
         {
            $project: {
                month: { $month: "$createdAt" },},
         },
         {
            $group: {
                _id: "$month",
                total: { $sum: 1 },
              },
         },
        ]);
        res.status(200).json(data)
    }catch(err){
          res.status(500).json(err)
    }
})

export default router;