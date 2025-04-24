const Notification = require("../models/notificationModel");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const Vendor = require("../models/vendorModel");
const asyncHandler = require("express-async-handler");

const adminController = {
  approveOrRejectVendor: asyncHandler(async (req, res) => {
    const { email, accountStatus } = req.body;

    // Validate accountStatus value
    if (!["approved", "rejected"].includes(accountStatus)) {
        return res.status(400).json({ message: "Invalid account status" });
    }

    // Find vendor by email (assuming `id` is actually an email)
    const vendor = await User.findOne({ email });

    if (!vendor) {
        return res.status(404).json({ message: "Vendor not found" });
    }
if(accountStatus==="approved"){
    // Update account status
    vendor.verified = true;
}
else{
  vendor.verified = false;
}
    await vendor.save();

    // Create a notification
    const notification = new Notification({
        user: vendor._id, // Use the vendor's ObjectId for the notification
        message: `Your vendor account has been ${accountStatus}.`
    });
    await notification.save();

    const statusMessage = accountStatus === "approved" ? "approved" : "rejected";
    res.json({ message: `Vendor account ${statusMessage} successfully`, vendor });
}),

    getUsers:asyncHandler(async (req, res) => {
      
      const vendors = await Vendor.find().populate("user");
      // if (users.length === 0) {
      //   return res.status(404).json({ message: "No users found" });
      // }
      res.status(200).send(vendors);
    }),

    getDetails: asyncHandler(async (req, res) => {
            const orders = await Order.find()
            const products = await Product.find()
            const vendors = await Vendor.find()
            const users=await User.find({role:"customer"})
            if (orders.length === 0) {
              return res.status(404).json({ message: "No orders found" });
            }
            if (products.length === 0) {
                return res.status(404).json({ message: "No products found" });
              }
            res.status(200).json({ orders,products,vendors,users });
          }),
};

module.exports = adminController;
