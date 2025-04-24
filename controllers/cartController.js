const Cart = require("../models/cartModel");
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Notification = require("../models/notificationModel");

const cartController = {
    addToCart: asyncHandler(async (req, res) => {
        const { id, quantity } = req.body;
        const userId = req.user.id;
       
        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = new Cart({ user: userId, items: [], totalAmount: 0 });
        }
        
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Item not found" });
        }
        
        if (!product.availability) {
            return res.status(400).json({ message: "Item not available. Sorry for the inconvenience" });
        }
        
        const productId = product._id.toString();
        const itemIndex = cart.items.findIndex(item => item?.product?.toString() === productId);
        
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }
        
        cart.totalAmount = cart.items.reduce((total, item) => total + item.quantity * product.price, 0);
        
        await cart.save();
        
        const notification = new Notification({
            user: userId,
            message: `You have added ${quantity} ${product.name}(s) to your cart.`
        });
        await notification.save();
        
        res.status(200).json(cart);
    }),

    getCart: asyncHandler(async (req, res) => {    
        const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
        res.status(200).json(cart || { items: [], totalAmount: 0 });
    }),

    removeFromCart: asyncHandler(async (req, res) => {
        const { id } = req.body;
        const userId = req.user.id;

        if (!id) {
            return res.status(400).json({ message: "Product ID is required" });
        }

        try {
            // Find the cart
            let cart = await Cart.findOne({ user: userId });
            if (!cart) {
                return res.status(404).json({ message: "Cart not found" });
            }

            // Find the item index before modifying the cart
            const itemIndex = cart.items.findIndex(item => item.product.toString() === id);
            
            
            if (itemIndex === -1) {
                return res.status(404).json({ message: "Item not found in cart" });
            }

            // Get the removed item details for notification
            const removedItem = cart.items[itemIndex];
            const removedProduct = await Product.findById(removedItem.product);
            
            // Remove the item
            cart.items.splice(itemIndex, 1);

            // Recalculate total amount
            cart.totalAmount = 0;
            for (const item of cart.items) {
                const product = await Product.findById(item.product);
                if (product) {
                    cart.totalAmount += item.quantity * product.price;
                }
            }

            // Save the updated cart
            await cart.save();

            // Create notification if product was found
            if (removedProduct) {
                await Notification.create({
                    user: userId,
                    message: `Removed ${removedProduct.name} from your cart`
                });
            }

            // Return the updated cart with populated items
            const updatedCart = await Cart.findById(cart._id).populate("items.product");
            return res.status(200).json(updatedCart);
        } catch (error) {
            console.error("Error removing item from cart:", error);
            return res.status(500).json({ 
                message: "Error removing item from cart",
                error: error.message 
            });
        }
    }),

    clearCart: asyncHandler(async (req, res) => {  
        const cart = await Cart.findOneAndDelete({ user: req.user.id });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        // Create notification for cart clear
        const notification = new Notification({
            user: req.user.id,
            message: "Your cart has been cleared successfully."
        });
        await notification.save();

        res.status(200).json({ message: "Cart cleared successfully" });
    })
};

module.exports = cartController;