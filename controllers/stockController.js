const asyncHandler = require('express-async-handler');
const StockUpdateModel = require('../models/stockUpdateModel');

const stockController = {
    getStock:asyncHandler(async (req, res) => {
    try {
        const stockUpdates = await StockUpdateModel.find()
            .populate('productId', 'name')
            .sort({ date: -1 }); // Sort by date descending

        const report = stockUpdates.map(update => ({
            productId: update.productId._id,
            productName: update.productName,
            currentStock: update.currentStock,
            stockAdded: update.stockAdded,
            totalStock: update.totalStock,
            date: update.date
        }));

        res.json(report);
    } catch (error) {
        console.error("Error fetching stock update report:", error);
        res.status(500).json({ message: "Server error" });
    }
}
    )};

    module.exports = stockController