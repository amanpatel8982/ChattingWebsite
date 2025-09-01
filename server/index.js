import dotenv from 'dotenv'; //dotenv ek library hai jo .env file me likhe huye environment variables ko process.env ke andar load karti hai.
dotenv.config(); //se .env file automatically read hoti hai.


import express from "express"; //Web framework jo routes, middlewares aur HTTP handling ke liye use hota hai.
import connectDB from './src/config/db.js';  //Custom function jo MongoDB se connection establish karega.
import morgan from 'morgan';//Logger middleware — har request ka info (method, URL, time, response status) terminal me dikhata hai.
import cookieParser from 'cookie-parser';//Request ke cookies ko parse karke JS object me convert karta hai.
import cors from 'cors';//Cross-Origin Resource Sharing enable karta hai (React frontend aur Express backend ko connect karne ke liye).
import AuthRouter from './src/routes/authRoute.js'
import userRoutes from "./src/routes/userRoutes.js";
import http from "http"; //Node ka built-in HTTP module, jisme Express app ko wrap karke WebSocket ke liye use kiya gaya.
import { Server } from "socket.io"; //Real-time communication ke liye WebSocket server create karta hai.
import webSocket from "./src/webSocket.js";//Tera khud ka file jisme socket.io events handle hote hain (connect, disconnect, message, etc.).


const app = express();//Express application initialize karta hai, iske upar hi saare middlewares aur routes mount karte ho.
app.use(cors({
    origin: "http://localhost:5173", //Ye allow karta hai ki http://localhost:5173 (React frontend ka URL) is backend ke saath communicate kar sake.
    credentials: true //credentials: true matlab cookies, tokens ya authentication headers bhi bhej paoge.
})); 


app.use(express.json()); //Request body ko JSON me parse kar deta hai (POST/PUT me JSON data directly milta hai).
app.use(cookieParser());//Cookies ko easily access karne ke liye req.cookies me daal deta hai.
app.use(morgan("dev")); //Development-friendly logging format enable karta hai.

app.use("/auth", AuthRouter);
app.use("/user", userRoutes);





app.get("/api", (req, res) => {
  res.status(200).json({
    message: "ChatApp Backend is running",
  });
});

app.use((err, req, res, next) => {  //Ye error handling middleware hai. Agar kisi bhi request me error aata hai, to ye middleware error ko catch karega aur ek JSON response bhej dega.
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    message,
  });
});


const httpServer = http.createServer(app);//Express app ko ek HTTP server ke andar wrap karta hai.

const io = new Server(httpServer, {//io ek socket.io server hai jo WebSocket connections handle karega.Ye allow karta hai ki http://localhost:5173 se WebSocket connections ban sake.
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




