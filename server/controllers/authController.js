import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../middleware/error.js";

export const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return next(errorHandler(401, "Authentication required"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return next(errorHandler(401, "Invalid token"));
    }
    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return next(errorHandler(401, "Invalid token"));
    }

    req.admin = admin;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(errorHandler(401, "Token expired"));
    }
    next(errorHandler(401, "Invalid token"));
  }
};

export const login = async (req, res, next) => {
  try {
    // Check if admin exists
    const { email, password } = req.body;

    if (!email || !password) {
      next(errorHandler(400, "All Fields are required"));
    }

    const validAdmin = await Admin.findOne({ email });

    if (!validAdmin) {
      return next(errorHandler(404, "Admin not found"));
    }

    // Verify password
    const validPassword = bcrypt.compare(password, validAdmin.password);

    if (!validPassword) {
      return next(errorHandler(401, "Invalid password"));
    }

    // Generate JWT
    const token = jwt.sign({ id: validAdmin._id }, process.env.JWT_SECRET, {expiresIn: '1h'});

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({ message: "Login successful", token, adminId: validAdmin._id });
  } catch (error) {
    next(errorHandler(500, "Internal Server error"));
  }
};

export const logOut = async (req, res, next) => {
  try {
    res
      .clearCookie("access_token", { httpOnly: true })
      .status(200)
      .json("User Logout Successfully");
  } catch (err) {
    next(errorHandler(500, "Internal Server error"));
  }
};
