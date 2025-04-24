const express = require("express");
const orderController = require("../controllers/orderController");
const userAuthentication = require("../middlewares/userAuthentication");

const orderRouter = express.Router();

orderRouter.post("/add", userAuthentication, orderController.createOrder);
orderRouter.get("/view", userAuthentication, orderController.getOrdersByUser);
orderRouter.get("/viewone/:id", userAuthentication, orderController.getOrdersById);
orderRouter.post("/cancel", userAuthentication, orderController.cancelOrder);

module.exports = orderRouter;
