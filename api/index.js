import express from "express";
import mongoose from "mongoose";
import authRouter from "../api/routes/auth.route.js"

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/MERN_REAL_ESTATE").then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
})

app.listen(3000, ()=>{
    console.log("listening on port 3000");
});

app.use("/api/auth", authRouter);


app.use((error, req, res, next)=>{
    const statusCode =error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    return res.status(statusCode).json({
        sucess : false,
        statusCode,
        message
    }) 
});