import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../verifyToken.js";
import Cart from "../models/cart.js";

const router = express.Router();

router.post("/", verifyToken, async(req,res,next)=>{
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        next(err);
    }
});

router.put("/:id" , verifyUser , async(req,res,next)=>{
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {
                new:true
            }
        );
        res.status(200).json(updatedCart)
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", verifyUser, async(req,res,next)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart deleted");
    }catch(err){
        next(err);
    }
});

router.get("/find/:userId",verifyUser,async(req,res,next)=>{
    try{
       const cart = await Cart.find({userId:req.params.userId});
       res.status(200).json(cart);

    }catch(err){
         next(err);    
    }
} );

router.get("/",verifyAdmin,async(req,res,next)=>{
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        next(err);
    }
});

export default router