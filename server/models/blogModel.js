import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      url: {
        type: String,
        required: true,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fclimate.copernicus.eu%2Fglobal-agriculture-project&psig=AOvVaw0R9F6k_xR2y7IfqyCRZrZm&ust=1735921866007000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOj69YO714oDFQAAAAAdAAAAABAE'
      },
      publicId: {
        type: String,
        required: true,
        default: 'default_public_id',
      },
    },
    category:{
      type: String,
      required: true,
      default: 'No category'
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
