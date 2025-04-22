const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    minLength:[5,"Minimum 5 characters required"],
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    minLength:[5,"Minimum 5 characters required"]
  },
  role: { 
    type: String, 
    enum: ["vendor", "admin", "customer"], 
    required: true 
  },
  phone: { 
      type: String,
  },
  verified: { 
    type: Boolean,
    default:false
  },
  address:{ 
      type: String,
  },
  profilePic: {
    type: String,
    default: ""
  },
  wishlist: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Product" 
    }
  ],
  isAvailable: {
    type:Boolean,
    default:true
  }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;