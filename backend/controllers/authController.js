import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register function
export const register = async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user);
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Login function
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // console.log(user);
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).send({ error: "Invalid login credentials" });
    }
    // console.log(process.env.JWT_SECRET);
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // console.log(token);
    res.send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
};
