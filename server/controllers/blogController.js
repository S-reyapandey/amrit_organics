import Blog from "../models/blogModel.js";
import DOMPurify from "isomorphic-dompurify";

export const getBlog = async (req, res) => {
  //console.log("Entering to fetch the blogs");
  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .select("-_v")
      .lean();

    //console.log(`Found ${blogs.length} blogs`);

    if (!blogs || blogs.length === 0) {
      // console.log("No blogs found in database");

      return res.status(404).json({ message: "No blogs found" });
    }

    res.json({ status: "success", results: blogs.length, blogs });
  } catch (err) {
    //console.log("Error fetching blogs : ", err);
    res.status(500).json({
      message: err.message,
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

export const getBlogById = async (req, res) => {
  // console.log("Request parameters: ", req.params); // Debugging line
  // console.log("Entering to fetch the blog by id", req.params?.id);

  try {
    const blog = await Blog.findById(req.params.id).select("-__v").lean();

    if (!blog) {
      //console.log("Blog not found with id: ".req.params.id);
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    // blog.content = DOMPurify.sanitize(blog.content);

    //console.log("Successfully found blog");
    res.json({ status: "success", blog });
  } catch (err) {
    // console.log("Error fetching blog details: ", err);
    res.status(500).json({
      status: "error",
      message: "Error fetching blog details",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

export const createPost = async (req, res) => {
  // console.log("Entering in the post creating api");
  try {
    const { title, description, content, author, category } = req.body;

    if (!title || !description || !content) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }

    // const sanitizedContent = DOMPurify.sanitize(content);

    const imageData = req.file ? {
      url: req.file.path,
      publicId: req.file.filename
    } : null;

    const newPost = new Blog({
      title,
      description,
      content,
      author: author || "Anonymous",
      category: category || "Uncategorised",
      image: imageData
    });

    await newPost.save();
    res.json({
      status: "success",
      message: "Blog created successfully",
      post: newPost,
      id: newPost._id,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error creating blog post",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
};

