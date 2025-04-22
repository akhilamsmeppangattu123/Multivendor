const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const productController = require("../controllers/productController");
const upload = require("../middlewares/cloudinary");
const productRoutes = express.Router();

productRoutes.post("/add", userAuthentication,upload.array('images', 5),productController.createProduct);
productRoutes.get("/view", userAuthentication,productController.getAllProducts);

productRoutes.get("/viewall", userAuthentication,productController.getProducts);
productRoutes.get("/search", userAuthentication,productController.searchProducts);

productRoutes.put("/edit", userAuthentication,upload.array('images', 5),productController.updateProduct);
productRoutes.get("/:id", userAuthentication,productController.getProductById);
productRoutes.delete("/:id",userAuthentication, productController.deleteProduct);

module.exports = productRoutes;