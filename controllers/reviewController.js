const expree=require('express')
const Review = require("../models/reviewModel");
const asyncHandler=require("express-async-handler");
const Product = require('../models/productModel');


const reviewController={
addReview : asyncHandler(async (req, res) => {
    const { id,comment,rating } = req.body;
    const userId=req.user.id
    
    if (!comment) {
      return res.status(400).json({ error: "Review comment is required" });
    }
    
    const productExist = await Product.findById(id);
    if(!productExist){
        res.send('Product not found')
    }
    
    const newReview = new Review({
      user: userId,
      product: productExist.id,
      comment,
      rating,
    });

    await newReview.save();

    const complete=await Product.findByIdAndUpdate(productExist.id, { $push: { reviews: newReview._id } });

    if(!complete){
        throw new Error( "Error adding review" );
    }
        res.send({ message: "Review added successfully", review: newReview });    
    }),

getReviews : asyncHandler(async (req, res) => {
    const { id } = req.params;
    const productExist = await Product.findById(id);
    if(!productExist){
        res.send('Product not found')
    }
    console.log(id);
    
        const reviews = await Review.find({ product: id }).populate("user", "username");
    if(!reviews){
        res.send('No reviews found')
    }
        res.send(reviews);        
    }),

}

module.exports = reviewController
