const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const paymentController = require("../controllers/paymentController");
const paymentRoutes = express.Router();

// Apply JSON parsing middleware
paymentRoutes.use(express.json());

// Get all payments for a user
paymentRoutes.get("/", userAuthentication, paymentController.getPayments);

// Get payment by ID
paymentRoutes.get("/:id", userAuthentication, paymentController.getPaymentById);

// Update payment status
paymentRoutes.put("/:id", userAuthentication, paymentController.updatePaymentStatus);

// Process payment using Stripe
paymentRoutes.post("/process", userAuthentication, paymentController.processPayment);

// Handle Stripe webhook events
paymentRoutes.post("/webhook", paymentController.webhook);

module.exports = paymentRoutes;