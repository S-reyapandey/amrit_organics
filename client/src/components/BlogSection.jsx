import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
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

function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

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
    <div className="container mx-auto px-8 py-10">
      {/*Header Section */}
      <div className="text-center mb-8">
        <h3
          className="text-yellow-400 text-5xl sm:text-6xl mb-3"
          style={{ fontFamily: "Courgette" }}
        >
          From the Blogs
        </h3>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-2"
          style={{ fontFamily: "Manrope" }}
        >
          Latest & Blogs
        </h2>
      </div>

      {/*Arrow */}

      <div className="flex justify-end mb-4 gap-3">
        <button
          onClick={prevSlide}
          className="p-2 border btn-grad rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Previous projects"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-2 btn-grad border rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Next projects"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Blogs Grid */}
      <div className="p-3 ml-4" style={{ overflow: "hidden"}}>
        <Slider {...settings} ref={sliderRef}>
          {blogs.map((blog) => {
            return (
              <Link
                to={`/blogs/${blog._id}`}
                key={blog._id}
                className="no-underline"
                style={{ textDecoration: "none" }}
              >
                <Box sx={{
                  padding: "0 20px",
                }}>
                  <Card
                    sx={{
                      borderRadius: "12px",
                      overflow: "hidden",
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
                        to={`/blogs/${blog._id}`}
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default BlogSection;
