const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    businessName: { 
        type: String,
        default: ""
    },
    businessLicense: { 
        type: String,
    },
    address: { 
        type: String,
        default: ""
    },
    phone: { 
        type: String,
        default: ""
    },
    products: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Product" 
        }
    ],
    gstNumber: {
        type: String,
        default: ""
    },
    accountStatus: { 
        type: String, 
        enum: ["pending", "approved", "rejected"], 
        default: "pending" 
    },
    profilePic: {
        type: String,
        default: null
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
}, {timestamps: true});

const Vendor = mongoose.model("Vendor", VendorSchema);
module.exports = Vendor;