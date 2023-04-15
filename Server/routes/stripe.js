import express from "express"
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
import Stripe from "stripe";
const stripe = new Stripe(KEY);
const router = express.Router();



router.post("/payment", (req,res)=>{
    stripe.charges.create(
        {
            source:req.body.tokenId,
            amount:req.body.amount,
            currency:"inr",

        },
        (stripeErr,stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr)
            }else{
                res.status(200).json(stripeRes);
            }
        }
    )
})

export default router