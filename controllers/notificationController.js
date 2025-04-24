const asyncHandler = require("express-async-handler");
const Notification = require("../models/notificationModel");

const notificationController = {
  readNotification: asyncHandler(async (req, res) => {
    const result = await Notification.updateMany(
      { user: req.user.id, read: false },
      { $set: { read: true } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "No unread notifications found" });
    }

    res.json({ message: "All notifications marked as read" });
  }),

  getNotifications: asyncHandler(async (req, res) => {
    const notifications = await Notification.find({ 
      user: req.user.id,read: false
    })
    .sort({ date: -1 }) // Sort by date in descending order
    .limit(50); // Limit to last 50 notifications

    // Transform notifications for frontend
    const formattedNotifications = notifications.map(notification => ({
      id: notification._id,
      message: notification.message,
      read: notification.read,
      date: notification.date,
      type: notification.type || 'info'
    }));

    res.json(formattedNotifications);
  }),

  deleteNotification: asyncHandler(async (req, res) => {
    const { id } = req.body;
    const notification = await Notification.findById(id);

    if (!notification) {
      throw new Error("Notification not found.");
    }

    await notification.deleteOne();
    res.json({ message: "Notification deleted successfully" });
  }),

  deleteAllNotifications: asyncHandler(async (req, res) => {
    const result = await Notification.deleteMany({ user: req.user.id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No notifications found" });
    }

    res.json({ message: "All notifications deleted successfully" });
  }),

  deleteReadNotifications: asyncHandler(async (req, res) => {
    const result = await Notification.deleteMany({ 
      user: req.user.id,
      read: true
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No read notifications found" });
    }

    res.json({ 
      message: "All read notifications deleted successfully",
      deletedCount: result.deletedCount
    });
  })
};

module.exports = notificationController;