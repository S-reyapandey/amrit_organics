import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import path from "path";
import cors from "cors";
import nodemailer from "nodemailer";
import authRoutes from "./routes/authRoutes.js"

import Blog from "./models/blogModel.js";
import { adminAuth } from "./controllers/authController.js";
const router = express.Router();

const DB = process.env.DBURI.replace("<PASSWORD>", process.env.DBPASSWORD);

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 8000;

const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static(path.join(__dirname, 'client/dist')));

import cloudinary from "cloudinary"
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import multer from "multer";

const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog_images",
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
    transformation: [{ width: 1000, crop: "limit" }],
  },
});

const cloudinaryUpload = multer({ storage: storage });

app.get("/api/blogs", async (req, res) => {
  try {
    const blog = await Blog.find().sort({ createdAt: -1 });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post(
  "/api/admin/blogs",
  adminAuth,
  cloudinaryUpload.single("image"),
  async (req, res) => {
    try {
      const { title, description, content } = req.body;
      const blog = new Blog({
        title,
        description,
        content,
        image: {
          url: req.file.path,
          publicId: req.file.filename,
        },
      });
      await blog.save();
      res.status(201).json(blog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

app.put(
  "/api/admin/blogs/:id",
  adminAuth,
  cloudinaryUpload.single("image"),
  async (req, res) => {
    try {
      const { title, description, content } = req.body;
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      const updateData = { title, description, content };

      if (req.file) {
        if (blog.image.publicId) {
          await cloudinary.uploader.destroy(blog.image.publicId);
        }
        updateData.image = {
          url: req.file.path,
          publicId: req.file.filename,
        };
      }

      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );
      res.json(updatedBlog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

app.delete("/admin/blogs/:id", adminAuth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (blog.image.publicId) {
      await cloudinary.uploader.destroy(blog.image.publicId);
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("*", (req, res) => {
  res.send("Hello Api!");
});

/*app.use("/api/admin", authRoutes);*/

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const phone = req.body.phone;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact From Submission - Amrit Organics",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Subject: ${subject}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
