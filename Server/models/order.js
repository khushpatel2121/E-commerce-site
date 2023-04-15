import mongoose from "mongoose"; 

const OrderSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true,
    },
    product:[
        {
            productId:{
                type:String,
            },
            quantity:{
                type:Number,
                default:1,
            },

        },
    ],
    amount:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        default:"pending",
    },
},{timestamps:true});

export default mongoose.model("Order", OrderSchema)