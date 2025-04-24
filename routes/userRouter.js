const express = require("express");
const userController = require("../controllers/userController");
const userAuthentication = require("../middlewares/userAuthentication");
const upload = require("../middlewares/cloudinary");

const userRoutes = express.Router();
userRoutes.post("/reg", userController.register);
userRoutes.post("/login", userController.login);
userRoutes.put("/edit", userAuthentication,userController.profile);
userRoutes.put("/password", userAuthentication,userController.changePassword);
userRoutes.delete("/logout", userController.logout);
userRoutes.get("/view", userAuthentication,userController.getUserProfile);
userRoutes.post("/forgot", userController.forgotPassword);
userRoutes.post("/reset", userController.resetPassword);
// userRoutes.post('/upload-profile-pic', userAuthentication, upload.single('profilePic'), userController.uploadProfilePic);

module.exports = userRoutes;