import React, { useRef, useState } from "react";
import blogs from "../utils/blogData";
import Slider from "react-slick";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function BlogSection() {
  const [hoverCard, setHoverCard] = useState(null);

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

  const handleMouseEnter = (idx) => {
    sliderRef.current.slickPause();
    setHoverCard(idx);
  };

  const handelMouseLeave = () => {
    sliderRef.current.slickPlay();
    setHoverCard(null);
  };

  return (
    <div className="container mx-auto px-16 py-10">
      {/*Header Section */}
      <div className="text-center mb-8">
        <h3
          className="text-yellow-400 text-2xl mb-2"
          style={{ fontFamily: "Courgette" }}
        >
          From the Blogs
        </h3>
        <h2
          className="text-2xl md:text-3xl font-extrabold mb-2"
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
      <div className="p-3 ml-4">
        <Slider {...settings} ref={sliderRef}>
          {blogs.map((blog) => (
            <Link>
              <Card
                sx={{
                  height: 450,
                  maxWidth: 345,
                  borderRadius: 3,
                  boxShadow: 3,
                  bgcolor: "transparent",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 2,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt="Blog Image"
                  image={blog.image}
                  sx={{
                    height: 250,
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ padding: "16px 18px 8px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                      color: "text.primary",
                    }}
                  >
                    {blog.title.slice(0, 25)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: "Signika, sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {blog.description.slice(0, 90)}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    pb: 2,
                  }}
                >
                  <button className="px-6 py-2 text-white rounded-lg btn-grad2">
                    View Post
                  </button>
                </CardActions>
              </Card>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BlogSection;
