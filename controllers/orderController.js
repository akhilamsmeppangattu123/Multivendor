const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const Cart = require("../models/cartModel");
const User = require("../models/userModel");
const Notification = require("../models/notificationModel");
const Product = require("../models/productModel");
const Vendor = require("../models/vendorModel");

const orderController = {
  // Create a new order
  createOrder: asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const { address, contact, name, pincode, city, paymentType, items, totalAmount } = req.body;
    
    let orderItems, orderTotal;

    // Check if this is a direct checkout or cart order
    if (items && totalAmount) {
      // Direct checkout
      orderItems = items;
      orderTotal = totalAmount;
    } else {
      // Cart order
      const cart = await Cart.findOne({ user: userId }).populate("items.product");
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({ error: "Cart is empty" });
      }
      orderItems = cart.items;
      orderTotal = cart.totalAmount;
    }

    // Create order record
    const order = await Order.create({
      user: userId,
      items: orderItems,
      totalAmount: orderTotal,
      paymentStatus: "Pending",
      address,
      contact,
      status: "Accepted",
      name,
      pincode,
      city,
      paymentType
    });

    // Create order placement notification
    const notification = new Notification({
      user: userId,
      message: `Order placed successfully! Order ID: ${order._id}. ${paymentType === 'card' ? 'Proceed to payment.' : 'It will be delivered in 7 days.'}`
    });
    await notification.save();

    // Notify admin and vendor for low stock
    const admin = await User.findOne({ role: "admin" });

    for (const item of orderItems) {
      const product = await Product.findById(item.product._id);
      if (product) {
        product.stock = Math.max(0, product.stock - item.quantity);
        product.availability = product.stock > 0;
        await product.save();

        if (product.stock < 5) {
          // Notify vendor about low stock
          const vendor=await Vendor.findById(product.vendor)
          const vendorNotification = new Notification({
            user: vendor.user,
            message: `Low stock alert: ${product.name} has only ${product.stock} units left.`
          });
          await vendorNotification.save();

          // Notify admin about low stock
          if (admin) {
            const adminNotification = new Notification({
              user: admin._id,
              message: `Low stock alert: ${product.name} (Vendor: ${product.vendor}) has only ${product.stock} units left.`
            });
            await adminNotification.save();
          }
        }
      }
    }

    // Clear cart if this was a cart order
    if (!items) {
      await Cart.findOneAndUpdate(
        { user: userId },
        { $set: { items: [], totalAmount: 0 } }
      );
    }

    res.status(201).json({ message: "Order placed successfully", order: order._id });
  }),

  // Get orders for a user
  getOrdersByUser: asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user.id })
  .populate("items.product")
  .sort({ createdAt: -1 });

    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json({ orders });
  }),

    // Get orders for a user
    getOrdersById: asyncHandler(async (req, res) => {
      const orders = await Order.findById(req.params.id)
  
      res.status(200).json({ orders });
    }),

  // Cancel an order
  cancelOrder: asyncHandler(async (req, res) => {
    const { orderId, reason } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }

    if (order.status === "Out for Delivery") {
      return res.status(400).json({ message: "Order cannot be cancelled once out for delivery." });
    }

    // Create cancellation notification for user
    const cancelNotification = new Notification({
      user: req.user.id,
      message: `Order #${order._id} has been cancelled. Reason: ${reason}`
    });
    await cancelNotification.save();

    // Create payment return notification if applicable
    if (order.paymentStatus === "Paid") {
      const paymentNotification = new Notification({
        user: req.user.id,
        message: `Payment refund initiated for Order #${order._id}. Amount will be credited within 5-7 business days.`
      });
      await paymentNotification.save();
    }

    // Update the order status to cancelled
    order.status = "Cancelled";
    order.cancellationReason = reason;
    order.paymentStatus = "Returned";
    console.log(order);
    
    await order.save();
    
    res.status(200).json({ message: "Order cancelled successfully", orderId: order._id });
  }),
};

module.exports = orderController;
