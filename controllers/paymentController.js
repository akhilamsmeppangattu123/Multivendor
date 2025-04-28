const asyncHandler = require("express-async-handler");
const Payment = require("../models/paymentModel");
const Stripe = require("stripe");
const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const Vendor = require("../models/vendorModel");
const Notification = require("../models/notificationModel");
require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const paymentController = {
    // Create new payment
    
    // Get all payments for a user
    getPayments: asyncHandler(async (req, res) => {
        try {
            const payments = await Payment.find().populate("user")
                .sort({ createdAt: -1 });
            res.json(payments);
        } catch (error) {
            console.error("Error fetching payments:", error);
            res.status(500).json({ 
                message: "Error fetching payments",
                error: error.message 
            });
        }
    }),

    // Get a single payment by ID
    getPaymentById: asyncHandler(async (req, res) => {
        try {
            const { id } = req.body;
            const payment = await Payment.findById(id);

            if (!payment) {
                return res.status(404).json({ message: "Payment not found" });
            }

            // Check if the payment belongs to the requesting user
            if (payment.user.toString() !== req.user.id) {
                return res.status(403).json({ message: "Not authorized to view this payment" });
            }

            res.json(payment);
        } catch (error) {
            console.error("Error fetching payment:", error);
            res.status(500).json({ 
                message: "Error fetching payment",
                error: error.message 
            });
        }
    }),

    // Update payment status
    updatePaymentStatus: asyncHandler(async (req, res) => {
        try {
            const { id, status } = req.body;
            const payment = await Payment.findById(id);

            if (!payment) {
                return res.status(404).json({ message: "Payment not found" });
            }

            // Check if the payment belongs to the requesting user
            if (payment.user.toString() !== req.user.id) {
                return res.status(403).json({ message: "Not authorized to update this payment" });
            }

            payment.paymentStatus = status;
            await payment.save();
            
            res.json(payment);
        } catch (error) {
            console.error("Error updating payment:", error);
            res.status(500).json({ 
                message: "Error updating payment",
                error: error.message 
            });
        }
    }),

    // Process payment using Stripe
    processPayment: asyncHandler(async (req, res) => {
        const { id } = req.body; // Order ID
        const order = await Order.findById(id);
        console.log(id);
        
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        order.paymentStatus="Paid"
        const payment = await Payment.create({
            user: req.user.id,
            order: order.id,
            amount: order.totalAmount,
            paymentMethod: "credit_card",
            paymentStatus: "completed",
        });
    
        // Delete the user's cart (assuming user ID is from req.user)
        await Cart.findOneAndDelete({ user: req.user.id });
    
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: Math.round(order.totalAmount * 100), // Convert to cents and ensure integer
                currency: "usd", // Hardcode or get from req.body.currency
                metadata: {
                    userId: req.user.id, // Use req.user.id instead of adopterId
                    orderId: order.id,
                },
            });
    
            payment.transactionId = paymentIntent.id;
            await payment.save();
            await order.save();
            const orderItems = order.items;
            for (const item of orderItems) {
                const product = await Product.findById(item.product._id);
              const vendor=await Vendor.findById(product.vendor)
              const notify = new Notification({
                user: vendor.user,
                message: `Payment received for Order ID: ${order._id}. Item: ${product.name}, Quantity: ${item.quantity}.`,
              });
              await notify.save();
            }
            res.send({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            console.error("Stripe Error:", error);
            res.status(500).json({ error: error.message });
        }
    }),

    // Handle Stripe webhook events
    webhook: asyncHandler(async (req, res) => {
        const sig = req.headers['stripe-signature'];
        let event;
        
        try {
            event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_KEY);
        } catch (err) {
            console.log(err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        switch (event.type) {
            case 'payment_intent.succeeded':
                await Payment.findOneAndUpdate(
                    { transactionId: event.data.object.id },
                    { paymentStatus: 'succeeded' }
                );
                return res.status(200).send('💰 Payment succeeded!');

            case 'checkout.session.completed':
                await Payment.findOneAndUpdate(
                    { transactionId: event.data.object.id },
                    { paymentStatus: 'completed' }
                );
                return res.status(200).send('✅ Payment Completed');

            default:
                return res.status(200).send('Webhook received');
        }
    })
};

module.exports = paymentController;
