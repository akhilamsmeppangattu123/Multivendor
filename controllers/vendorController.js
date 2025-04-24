const Complaint = require("../models/complaintModel");
const Order = require("../models/orderModel");
const Payment = require("../models/paymentModel");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const Vendor = require("../models/vendorModel");
const Notification = require("../models/notificationModel");
const asyncHandler = require("express-async-handler");

const vendorController = {
    getVendorProfile: asyncHandler(async (req, res) => {
            // First find the vendor profile
            const vendor = await Vendor.findOne({ user: req.user.id }).populate('user') 
            res.json(vendor);
    }),

    upsertVendor: asyncHandler(async (req, res) => {
        const { businessName, businessLicense, address, phone ,gstNumber} = req.body;
        let vendor = await Vendor.findOne({ user: req.user.id });
        const user = await User.findById(req.user.id);

        if (vendor) {
            // Update existing vendor
            vendor.businessName = businessName || vendor.businessName;
            vendor.businessLicense = businessLicense || vendor.businessLicense;
            vendor.address = address || vendor.address;
            vendor.phone = phone || vendor.phone;
            user.gstNumber = gstNumber || user.gstNumber;
        } else {
            // Create new vendor
            vendor = new Vendor({
                user: user.id,
                businessName,
                businessLicense,
                address: address || user.address,
                phone: phone || user.phone,
            });
        }

        const savedVendor = await vendor.save();
        res.json(savedVendor);
    }),

    getVendorById: asyncHandler(async (req, res) => {
        const { query } = req.body;
        
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }
        
        const vendors = await Vendor.find({
            $or: [
                { businessName: { $regex: query, $options: "i" } }
            ]
        }).populate("user", "username email").populate("products");
        
        res.json(vendors);
    }),

    deleteVendor: asyncHandler(async (req, res) => {
        const {id}=req.params
        const vendor = await Vendor.findById(id);
        const user = await User.findByIdAndDelete(vendor.user);

        const products=await Product.deleteMany({vendor:vendor._id})
        if (products) {
            await Vendor.findByIdAndDelete(id)
            await Complaint.deleteMany({vendor:id})
            res.json({ message: "Vendor removed successfully" });
        } else {
            throw new Error("Vendor not found");
        }
    }),

    getOrdersByVendor: asyncHandler(async (req, res) => {
        const vendor = await Vendor.findOne({ user: req.user.id });
        if (!vendor) {
            throw new Error("Vendor not found");
        }
        
        const vendorProducts = await Product.find({ vendor: vendor._id });
        const productIds = vendorProducts.map(product => product._id);
        
        // Find orders that include vendor's products
        const orders = await Order.find({
            "items.product": { $in: productIds }
        })
        .populate("user")
        .populate("items.product")
        .sort({ createdAt: -1 });

        res.json(orders);
    }),

    updateOrderStatus: asyncHandler(async (req, res) => {
        const { orderId, status } = req.body;
    
        const order = await Order.findById(orderId).populate('user');
        if (!order) {
            return res.status(404).json({ message: "Order not found." });
        }
    
        const validStatuses = ["Pending", "Accepted", "Preparing", "Out for Delivery", "Delivered", "Cancelled"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status update." });
        }

        // Create status update notification for customer
        const statusMessages = {
            "Pending": "Your order is pending confirmation.",
            "Accepted": "Your order has been accepted by the vendor.",
            "Preparing": "Your order is being prepared.",
            "Out for Delivery": "Your order is out for delivery!",
            "Delivered": "Your order has been delivered successfully.",
            "Cancelled": "Your order has been cancelled by the vendor."
        };

        const notification = new Notification({
            user: order.user._id,
            message: `Order #${orderId}: ${statusMessages[status]}`
        });
        await notification.save();

        if(status === 'Delivered'){
            order.paymentStatus = "Paid";
            // Create payment confirmation notification
            const paymentNotification = new Notification({
                user: order.user._id,
                message: `Payment confirmed for Order #${orderId}. Thank you for shopping with us!`
            });
            await paymentNotification.save();
        }
        
        order.status = status;
        await order.save();
    
        res.json({ 
            message: "Order status updated successfully", 
            orderId: order._id, 
            newStatus: status 
        });
    }),

    uploadProfilePic: asyncHandler(async (req, res) => {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const vendor = await Vendor.findOne({ user: req.user.id });
        if (!vendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }

        // Update vendor profile with new image URL
        vendor.profilePic = req.file.path;
        await vendor.save();

        res.json({ 
            message: "Profile picture updated successfully",
            imageUrl: req.file.path
        });
    }),
};

module.exports = vendorController;
