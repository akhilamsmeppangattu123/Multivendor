const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    name:{
      type:String,
      required:true
    },
    pincode:{
      type:Number,
      required:true
    },
    city:{
      type:String,
      required:true
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Preparing", "Out for Delivery", "Delivered", "Cancelled"],
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed","Returned"],
      default: "Pending",
    },
    cancellationReason: {
      type: String,
      default: "",
    },
    paymentType: {
      type: String,
    },
    address:{
      type:String,
      require:true
    },
    contact:{
      type:Number,
      require:true
    },
    date:{
      type:Date,
      default:Date.now()
    }
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
