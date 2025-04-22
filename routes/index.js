const express = require("express");
const userRoutes = require("./userRouter");
const productRoutes = require("./productRouter");
const vendorRoutes = require("./vendorRouter");
const adminRoutes = require("./adminRouter");
const cartRouter = require("./cartRoutes");
const orderRouter = require("./orderRoutes");
const wishlistRoutes = require("./wishlistRoutes");
const paymentRoutes = require("./paymentRoutes");
const reviewRouter = require("./reviewRoutes");
const complaintRouter = require("./complaintRoutes");
const chatRoutes = require("./chatRoutes");
const router = express.Router();


router.use("/payment", paymentRoutes);
// Apply JSON parsing middleware
router.use(express.json());

// Register routes
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/complaint", complaintRouter);
router.use("/vendor", vendorRoutes);
router.use("/admin", adminRoutes);
router.use("/cart", cartRouter);
router.use("/review", reviewRouter);
router.use("/order", orderRouter);
router.use("/wishlist", wishlistRoutes);
router.use("/chat", chatRoutes);


module.exports = router;