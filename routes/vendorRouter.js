const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const vendorController = require("../controllers/vendorController");
const upload = require("../middlewares/cloudinary");

const vendorRoutes = express.Router();

// Profile route
vendorRoutes.get("/profile", userAuthentication, vendorController.getVendorProfile);

// Other vendor routes
vendorRoutes.delete("/delete/:id", userAuthentication, vendorController.deleteVendor);
vendorRoutes.get("/orders", userAuthentication, vendorController.getOrdersByVendor);
vendorRoutes.get("/search", userAuthentication, vendorController.getVendorById);
vendorRoutes.put("/save", userAuthentication, vendorController.upsertVendor);
vendorRoutes.put("/update", userAuthentication, vendorController.updateOrderStatus);

vendorRoutes.post('/upload-profile-pic', 
    userAuthentication, 
    upload.single('profilePic'), 
    vendorController.uploadProfilePic
);

module.exports = vendorRoutes;