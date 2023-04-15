import express from "express";
import Product from "../models/product.js"
import { verifyAdmin, verifyUser } from "../verifyToken.js";

const router = express.Router();

router.post("/",verifyAdmin, async(req,res,next)=>{
    const NewProduct =  new Product(req.body);
    try{
    const savedProduct = await NewProduct.save();
    res.status(200).json(savedProduct);
    }catch(err){
    next(err);
    }
});

router.put("/:id",verifyAdmin,async(req,res,next)=>{
    try{
       const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
        $set:req.body
       },
       {new:true}
       );
       res.status(200).json(updatedProduct);
    }catch(err){
      next(err);
    }
});

router.delete("/:id",verifyAdmin,async(req,res,next)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product Deleted");
    }catch(err){
        next(err);
    }
});

router.get("/find/:id" , async(req,res,next)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

router.get("/",async(req,res,next)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;

        if(qNew){
            products = await Product.find().sort({createdAt:-1}).limit(1);
        }else if(qCategory){
            products = await Product.find({
                categories :{
                    $in :[qCategory],
                },
            });
           }else{
            products = await Product.find();
           }
        res.status(200).json(products);
    } catch (err) {
        next(err)
    }
})


export default router;