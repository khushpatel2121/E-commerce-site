import mongoose from "mongoose";

const   ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:true
    },
    categories:{
     type:Array
    },
    color:{
        type:Array,
    },
    size:{
        type:Array,
    },
    price:{
        type:String,
    }
},{timestamps:true});

export default mongoose.model(  " Product" ,  ProductSchema);