import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res ,next) => {
    const { username , email, password} = req.body;
    const hashedpassword =bcryptjs.hashSync(password ,10);
    const newUser = new User({username, email,password : hashedpassword});
    try {
        await newUser.save();
        res.status(201).json("done");
    } catch(err){
        if (err.code === 11000 && err.keyPattern && err.keyPattern.username) {
            // The error code 11000 indicates a duplicate key (unique constraint) violation
            res.status(400).json({ error: "Username already exists" });
        }
        else if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
            // The error code 11000 indicates a duplicate key (unique constraint) violation
            res.status(400).json({ error: "Email already exists" });
        } else {
            // Handle other errors
            // res.status(500).json({ error: err.message || "Internal Server Error" });
            next(err)
        }
    }
};