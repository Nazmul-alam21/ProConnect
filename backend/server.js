import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static("uploads"));

const start = async() => {
    const connectDB = await mongoose.connect("mongodb+srv://alamnazmul3352:LinkedInClone@linkedinclone.bsbppcd.mongodb.net/?retryWrites=true&w=majority&appName=LinkedInClone")

    app.listen(9080, () => {
        console.log(`Server is running on the port 9080`)
    })
}

start();