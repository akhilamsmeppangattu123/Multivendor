const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const notificationController = require("../controllers/notificationController");
const notifyRouter = express.Router();

notifyRouter.get("/viewall", userAuthentication, notificationController.getNotifications);
notifyRouter.delete("/read", userAuthentication, notificationController.readNotification);
notifyRouter.delete("/deleteall", userAuthentication, notificationController.deleteAllNotifications);
notifyRouter.delete("/deleteread", userAuthentication, notificationController.deleteReadNotifications);

module.exports = notifyRouter;
