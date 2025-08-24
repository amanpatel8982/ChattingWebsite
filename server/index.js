import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import connectDB from './src/config/db.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import AuthRouter from './src/routes/authRoute.js'



const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
})); 


app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev")); 

app.use("/auth", AuthRouter);


app.get("/", (req , res) => {
    res.json({message: "server connected"});
});




const port = process.env.PORT || 5000

app.listen(port ,  async () =>{
    console.log("server started at ", port);
    await connectDB();
})



