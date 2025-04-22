// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const connectDB = require("./database/connectDB");
// const cookieParser = require("cookie-parser")
// const errorHandler = require("./middlewares/errorHandler")
// const router = require("./routes");
// const session=require('express-session')
// const http = require("http");
// const { Server } = require("socket.io");
// const { initializeSocket } = require("./socket");
// const app = express();

// // Connect to database
// connectDB()

// // CORS configuration
// const allowedOrigins = "http://localhost:5173";
// app.use(cors({
//     origin: allowedOrigins,
//     credentials: true,
// }));
// app.options('*', cors());

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// const server = http.createServer(app);
// initializeSocket(server);
// // Mount routes
// app.use("/", router);

// // Error handling
// app.use(errorHandler);

// app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./database/connectDB");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");
const http = require("http");

const app = express();

// Connect to database
connectDB();

// CORS configuration
const allowedOrigins = "http://localhost:5173";
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.options("*", cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Mount routes
app.use("/", router);

// Error handling
app.use(errorHandler);

const server = http.createServer(app);

// Socket.IO initialization
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`User with ID: ${socket.id} joined room: ${roomId}`);
  });

  socket.on("send_message", (data) => {
    console.log("Sending message:", data);
    io.to(data.roomId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

server.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);