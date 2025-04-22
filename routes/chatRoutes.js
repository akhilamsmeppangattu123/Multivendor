const express = require("express");
const Message = require("../models/chatModel");
const userAuthentication = require("../middlewares/userAuthentication");
const chatController = require("../controllers/chatController");
const chatRouter = express.Router();


chatRouter.get("/customers", userAuthentication, chatController.getCustomers);
chatRouter.get("/:roomId", chatController.getMessages);
chatRouter.post("/", chatController.postMessage);


module.exports = chatRouter;