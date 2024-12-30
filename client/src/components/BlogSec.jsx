import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Share } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogSec() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-16 py-10">
      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {blogs.map((blog, idx) => {
          return (
            <Link to={`/blogs/${blog._id}`} key={blog._id} className="no-underline" style={{textDecoration: 'none'}}>
              <Box key={idx}>
                <Card
                  sx={{
                    position: "relative",
                    height: 400,
                    maxWidth: 345,
                    boxShadow: 3,
                    bgcolor: "transparent",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 2,
                    },
                  }}
                >
                  <CardHeader
                    title={
                      blog.title.length > 18
                        ? `${blog.title.slice(0, 18)}...`
                        : blog.title
                    }
                    subheader={`By ${blog.author} • ${formatDate(
                      blog.createdAt
                    )}`}
                    sx={{
                      bgcolor: "#4BAF89",
                      color: "#fff",
                      height: 95,
                      fontWeight: "bold",
                      "& .MuiCardHeader-subheader": {
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.80rem",
                  },
                  "& .MuiCardHeader-title": {
                    fontSize: "1.3rem",
                  }
                    }}
                  />
                  <CardMedia
                    component="img"
                    image={blog.image.url}
                    alt={blog.title}
                    sx={{
                      height: 170,
                      objectFit: "cover",
                    }}
                  />
                  <CardContent
                    sx={{ bgcolor: "#4BAF89", color: "#fff", height: 135 }}
                  >
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{
                        fontFamily: "Signika",
                        fontSize: "0.95rem",
                      }}
                    >
                    {blog.description.length > 120 
                        ? `${blog.description.slice(0, 120)}...` 
                        : blog.description}
                    </Typography>
                    <div className="flex justify-between items-center">
                      <button
                        className="text-gray-700 font-medium"
                        style={{ fontFamily: "Signika" }}
                      >
                        Read More 
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BlogSec;
