const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    vendor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Vendor", 
         
    },
    name: { 
        type: String,},
    description: { 
        type: String,},
    category: { 
        type: String,},
    subCategory: { 
        type: String,},
    images: { 
        type: [String],},
    price: { 
        type: Number,},
    stock: { 
        type: Number,},
    minQuantity: { 
        type: Number,},
    discount: { 
        type: Number,},
  
    volume: { 
        type: String,},
    size:[{
        type: String,
    }],
    review:  [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Review"
    }],
    availability:
        {
            type:Boolean,
            default:true
        }
},{timestamps: true});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;