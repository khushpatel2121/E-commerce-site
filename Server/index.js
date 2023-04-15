import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/User.js";
import userAuth from "./routes/auth.js";
import userProduct from "./routes/Product.js";
import userCart from "./routes/Cart.js";
import userOrder from "./routes/Order.js";
import useStripe from "./routes/stripe.js"
import cors from "cors"

const app = express();
dotenv.config();

mongoose.set('strictQuery',false);

const connect = async()=>{
    try{
     await mongoose.connect(process.env.MONGO)
    }catch(error){
      throw(error)
    }
}



mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
});

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/auth",userAuth);
app.use("/api/products",userProduct);
app.use("/api/carts", userCart);
app.use("/api/orders", userOrder);
app.use("/api/checkout", useStripe)


//error handlers 
app.use((err, req,res,next)=>{
  const status =err.status || 500;
  const message = err.message || "Someting is wrong";
  return res.status(status).json({
    success:false,
    status,
    message,
  })
})

app.listen(8080,()=>{
    connect();
    console.log("server started at port 8080")
})
