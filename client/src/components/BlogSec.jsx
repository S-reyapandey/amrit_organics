import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogSec() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/post/getposts");

        if (response.data.status === "success") {
          setBlogs(response.data.blogs);
        } else {
          setError(response.data.message);
          setBlogs([]);
        }
      } catch (err) {
        console.log("Error fetching blogs : ", err);
        setBlogs(err.response?.data?.message || "Failed to fetch blogs");
      } finally {
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

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div className="text-center mt-10">No blogs found</div>;
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
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {blogs.map((blog) => {
          return (
            <Link
              to={`/blogs/${blog.id}`}
              key={blog.id}
              className="no-underline"
              style={{ textDecoration: "none" }}
            >
              <Box>
                <Card
                  sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    position: "relative",
                    transition: "all 0.3s",
                    "&:hover .blog-image": {
                      transform: "scale(1.1)",
                    },
                    "&:hover .blog-text": {
                      color: "#5B8C51",
                    },
                    bgcolor: "#C3F5C1",
                    backgroundImage: `url("/back2.png"), linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.1))`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "screen",
                  }}
                  style={{
                    height: 400,
                    ...(window.innerWidth < 440 ? { height: 450 } : {}),
                  }}
                >
                  <CardMedia
                    component="img"
                    image={blog.image?.url || "/default.png"}
                    alt={blog.title || "Blog Image"}
                    sx={{
                      height: 200,
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className="blog-image"
                  />
                  <CardContent sx={{ padding: "20px" }}>
                    <Typography
                      variant="h6"
                      className="blog-text"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        marginBottom: "10px",
                        color: "#333",
                        transition: "color 0.3s ease-in-out",
                      }}
                    >
                      {blog.title.length > 50
                        ? `${blog.title.slice(0, 50)}...`
                        : blog.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.9rem",
                        color: "#555",
                        marginBottom: "15px",
                      }}
                    >
                      {`By ${blog.author} • ${formatDate(blog.createdAt)}`}
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#45a049",
                        },
                      }}
                      component={Link}
                      to={`/blogs/${blog.id}`}
                    >
                      Read More
                    </Button>
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
