import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Router/Router.js";
import cookieParser from "cookie-parser";

const app = express()
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: true, credentials: true ,exposedHeaders: ["Set-Cookie"]}));
app.use("/api",router);


const PORT = process.env.PORT || 5000;
const DB = process.env.DB_URL;


app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`));

mongoose.connect(DB)
.then(()=>console.log(`DB connected`))
.catch((err)=>console.log(`Error: DB not connected `,err));