const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const Vendor = require("../models/vendorModel");
const cloudinary = require('cloudinary').v2;

const productController = {
    createProduct: asyncHandler(async (req, res) => {
        try {
            const {
                name, description, category, price, stock, volume,
                minQuantity, discount, size, subCategory,
            } = req.body;

            // Validate image uploads
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: "Please upload at least one image" });
            }
            const vendor=await Vendor.findOne({user:req.user.id})
            // Process image uploads to Cloudinary
            const imageUrls = await Promise.all(
                req.files.map(async (file) => {
                    try {
                        const result = await cloudinary.uploader.upload(file.path, {
                            folder: 'products',
                            quality: 'auto',
                            fetch_format: 'auto'
                        });
                        return result.secure_url;
                    } catch (uploadError) {
                        console.error("Error uploading image:", uploadError);
                        return null;
                    }
                })
            ).then(results => results.filter(url => url !== null));

            if (imageUrls.length === 0) {
                return res.status(400).json({ message: "Failed to upload any images" });
            }
            if (!vendor) {
                throw new Error('Vendor not found')
            }
            
            
            // Create product
            const product = new Product({
                vendor:vendor._id,
                name,
                description,
                category,
                images: imageUrls,
                price,
                stock,
                minQuantity,
                volume,
                subCategory,
                discount,
            
                size
            });

            const savedProduct = await product.save();

            res.status(201).json(savedProduct);
        } catch (error) {
            console.error("Error creating product:", error);
            res.status(500).json({ message: "Server error" });
        }
    }),

    getAllProducts: asyncHandler(async (req, res) => {
        try {
            const vendor=await Vendor.findOne({user:req.user.id});
            console.log(vendor,"getall",req.user.id)
            const products = await Product.find({vendor:vendor})
                .populate("vendor").populate("review")
                .lean().sort({ price: 1 });

               
            
            if (!products) {
                return res.status(404).json({ 
                    message: "No products found",
                    status: 404 
                });
            }

            res.json(products);
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ 
                message: "Error fetching products",
                status: 500 
            });
        }
    }),

    
    getProducts: asyncHandler(async (req, res) => {
        try {
            const products = await Product.find()
            .populate({
                path: 'vendor',
                populate: {
                  path: 'user',
                  model: 'User',
                  select: 'email' // only get email if needed
                }
              })
                .lean().sort({ price: 1 });

               
            
            if (!products) {
                return res.status(404).json({ 
                    message: "No products found",
                    status: 404 
                });
            }

            res.json(products);
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ 
                message: "Error fetching products",
                status: 500 
            });
        }
    }),

    getProductById: asyncHandler(async (req, res) => {
        try {
            const product = await Product.findById(req.params.id)
                .populate("vendor", "name"); // Only populate vendor name

            if (!product) {
                return res.status(404).json({ 
                    message: "Product not found",
                    status: 404 
                });
            }

            res.json(product);
        } catch (error) {
            console.error("Error fetching product by ID:", error);
            res.status(500).json({ 
                message: "Error fetching product",
                status: 500,
                error: error.message 
            });
        }
    }),

    searchProducts: asyncHandler(async (req, res) => {
        const { query } = req.body;        
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }
        
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: "i" } },
                { category: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } }
            ]
        }).populate("vendor", "name");
        
        res.json(products);
    }),

    updateProduct: asyncHandler(async (req, res) => {
        console.log(req.body);
        
        try {
            const {id,name,description,category,subCategory,volume,price,minQuantity,discount,stock}=req.body
            const product = await Product.findById(id);
            console.log('incoming:',id,name,description,category,subCategory,volume,price,minQuantity,discount,stock);
            
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
    
                                    product.name = name || product.name;
                                    product.description = description || product.description;
                                    product.category = category || product.category;
                                    product.subCategory = subCategory || product.subCategory;
                                    product.volume = volume || product.volume;
                                    product.price = price || product.price;
                                    product.minQuantity = minQuantity || product.minQuantity;
                                    product.discount = discount || product.discount;
                                    product.stock = stock || product.stock;
            
    
            // Handle image uploads
            if (req.files && req.files.length > 0) {
                const imageUrls = await Promise.all(
                    req.files.map(async (file) => {
                        try {
                            const result = await cloudinary.uploader.upload(file.path);
                            return result.secure_url;
                        } catch (uploadError) {
                            console.error("Error uploading image:", uploadError);
                            return null;
                        }
                    })
                ).then(results => results.filter(url => url !== null));
    
                if (imageUrls.length > 0) {
                    product.images = [...product.images, ...imageUrls];
                }
            }
    
            const updatedProduct = await product.save();
            console.log('updated',updatedProduct);
            
            res.json(updatedProduct);
        } catch (error) {
            console.error("Error updating product:", error);
            res.status(500).json({ message: "Server error" });
        }
    }),

    deleteProduct: asyncHandler(async (req, res) => {
        try {
            const { id } = req.params;
    
            const product = await Product.findById(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
    
            // Delete product
            await Product.deleteOne({ _id: id });
            
            return res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
            console.error("Error deleting product:", error);
            return res.status(500).json({ message: "Server error", error: error.message });
        }
    })
};

module.exports = productController;