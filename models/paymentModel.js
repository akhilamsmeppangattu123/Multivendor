const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    order: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Order', 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    paymentMethod: { 
        type: String, 
        enum: ['credit_card', 'debit_card'], 
        required: true 
    },
    paymentStatus: { 
        type: String, 
        enum: ['pending', 'completed', 'failed', 'refunded'], 
        default: 'pending' 
    },
    cardDetails: {
        cardName: {
            type: String,
        },
        cardNumber: {
            type: String, 
        },
        expiryDate: {
            type: String,
        }
    },
    shippingDetails: {
        fullName: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        pincode: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        }
    },
    paymentDate: { 
        type: Date, 
        default: Date.now 
    },
    transactionId: { 
        type: String 
    },
    receiptUrl: { 
        type: String 
    }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
