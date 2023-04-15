import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../verifyToken.js";
import Order from "../models/order.js"

const router =express.Router();

router.post("/",verifyToken,async(req,res,next)=>{
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        next(err)
    }
});

router.put("/:id",verifyUser,async(req,res,next)=>{
    try{
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id,
        {
            $set:req.body,
        },
        {new:true}
        );
        res.status(200).json(updatedOrder);
    }catch(err){
        next(err)
    }
});

router.delete("/:id",verifyUser,async(req,res,next)=>{
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order deleted");
    } catch (err) {
        next(err)
    }
});

router.get("/find/:userId",verifyUser,async(req,res,next)=>{
    try{
        const order = await Order.find({userId:req.params.userId});
        res.status(200).json(order);
    }catch(err){
        next(err);
    }
});

router.get("/",verifyAdmin,async(req,res,next)=>{
    try{
       const orders =await Order.find();
       res.status(200).json(orders);
    }catch(err){
       next(err);
    }
});

router.get("/income", verifyAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      next(err);
    }
  });

export default router;