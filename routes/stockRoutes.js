const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const stockController = require("../controllers/stockController");

const stockRouter = express.Router();

stockRouter.get("/get", userAuthentication,stockController.getStock);

module.exports = stockRouter;