import pkg from "jsonwebtoken";
const {jwt} = pkg;
import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";

export const adminAuth = (req, res, next) => {
  const { email, password } = req.headers;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// export const login = async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       // Fetch the admin from the database
//       const admin = await Admin.findOne({ email });
//       if (!admin) {
//         return res.status(404).json({ message: "Invalid credentials" });
//       }
  
//       // Compare passwords
//       const isPasswordValid = await bcrypt.compare(password, admin.password);
//       if (!isPasswordValid) {
//         return res.status(401).json({ message: "Invalid credentials" });
//       }
  
//       // Generate a JWT token
//       const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
//         expiresIn: "1d", // Token valid for 1 day
//       });
  
//       res.status(200).json({ token });
//     } catch (err) {
//       res.status(500).json({ message: "Server error" });
//     }
//   };

//   export const verifyToken = (req, res, next) => {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
  
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.adminId = decoded.adminId;
//       next();
//     } catch (err) {
//       res.status(401).json({ message: "Unauthorized" });
//     }
//   };
