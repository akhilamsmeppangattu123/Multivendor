const jwt = require("jsonwebtoken")
require("dotenv").config()

const userAuthentication = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        
        if (!authHeader) {
            console.log("No authorization header found");
            return res.status(401).json({ message: "No authorization header" });
        }

        const token = authHeader.split(" ")[1];
        
        if (!token) {
            console.log("No token found in authorization header");
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        req.user = {
            email: decoded.email,
            id: decoded.id,
            role: decoded.role
        };

        next();
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).json({ 
            message: "Invalid token",
            error: error.message 
        });
    }
}

module.exports = userAuthentication;
