const mongoose = require('mongoose');

const stockUpdateSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    currentStock: {
        type: Number,
        required: true
    },
    stockAdded: {
        type: Number,
        required: true
    },
    totalStock: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const StockUpdateModel = mongoose.model("StockUpdateModel", stockUpdateSchema);
module.exports = StockUpdateModel;