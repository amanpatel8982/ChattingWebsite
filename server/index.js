import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import connectDB from './src/config/db.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import AuthRouter from './src/routes/authRoute.js'
import userRoutes from "./src/routes/userRoutes.js";
import http from "http";
import { Server } from "socket.io";
import webSocket from "./src/webSocket.js";




const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
})); 


app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev")); 

app.use("/auth", AuthRouter);
app.use("/user", userRoutes);



app.get("/api", (req, res) => {
  res.status(200).json({
    message: "ChatApp Backend is running",
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    message,
  });
});


const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

webSocket(io);

const port = process.env.PORT || 5000;
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});




