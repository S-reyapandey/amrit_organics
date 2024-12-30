// import express from "express";
// import Blog from "../models/blogModel";
// import { adminAuth } from "./authController";
// import { cloudinary, cloudinaryUpload } from "../config/cloudinary";
// const router = express.Router();

// router.get("/blog", async (req, res) => {
//   try {
//     const blog = await Blog.find().sort({ createdAt: -1 });
//     res.json(blog);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.get("/api/blog/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }
//     res.json(blog);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.post(
//   "/api/admin/blogs",
//   adminAuth,
//   cloudinaryUpload.single("image"),
//   async (req, res) => {
//     try {
//       const { title, decription, content } = req.body;
//       const blog = new Blog({
//         title,
//         description,
//         content,
//         image: {
//           url: req.file.path,
//           publicId: req.file.filename,
//         },
//       });
//       await blog.save();
//       res.status(201).json(blog);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   }
// );

// router.put(
//   "/api/admin/blog/:id",
//   adminAuth,
//   cloudinaryUpload.single("image"),
//   async (req, res) => {
//     try {
//       const { title, decription, content } = req.body;
//       const blog = await Blog.findById(req.params.id);
//       if (!blog) {
//         return res.status(404).json({ message: "Blog not found" });
//       }
//       const updateData = { title, description, content };

//       if (req.file) {
//         if (blog.image.publicId) {
//           await cloudinary.uploader.destroy(blog.image.publicId);
//         }
//         updateData.image = {
//           url: req.file.path,
//           publicId: req.file.filename,
//         };
//       }

//       const updatedBlog = await Blog.findByIdAndUpdate(
//         req.params.id,
//         updateData,
//         { new: true }
//       );
//       res.json(updatedBlog);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   }
// );

// router.delete("/admin/blogs/:id", adminAuth, async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }
//     if (blog.image.publicId) {
//       await cloudinary.uploader.destroy(blog.image.publicId);
//     }
//     res.json({ message: "Blog deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

// router.post("/blogs", cloudinaryUpload.single("image"), async (req, res) => {
//   try {
//     const blog = new Blog({
//       title: req.body.title,
//       description: req.body.description,
//       content: req.body.content,
//       image: req.file.path, // Cloudinary returns the URL in req.file.path
//     });

//     await blog.save();
//     res.status(201).json(blog);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
