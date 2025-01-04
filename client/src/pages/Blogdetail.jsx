import {
  Badge,
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, User } from "lucide-react";
import DOMPurify from "dompurify";

function Blogdetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        //console.log("fetching blogdetails");
        const response = await axios.get(`/api/post/getpost/${id}`);
        // console.log("Response: ", response.data);
        if (response.data.status === "success") {
          setBlog(response.data.blog);
        } else {
          setError(response.data.message || "Failed to fetch blog details");
        }
      } catch (err) {
        //console.log("Error fetching blog details : ", err);
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to fetch blog details"
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogDetail();
    }
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress sx={{ color: "#4BAF89" }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (!blog) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Typography>No Blog Found</Typography>
      </Box>
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
    <div className="px-4 mb-20">
      <Stack spacing={6}>
        {/*Header Section */}
        <div className="relative mb-8">
          {/*Image Container */}
          <div className="relative">
            <img
              src="/other.png"
              alt="headerImage"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
              <h1
                className="text-white text-6xl font-bold slide-in mb-4"
                style={{ fontFamily: "Signika",  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  textAlign: "center", }}
              >
                Blogs
              </h1>
              <Breadcrumbs
                className="slide-in"
                aria-label="breadcrumb"
                sx={{
                  "& .MuiBreadcrumbs-separator": {
                    color: "white",
                  },
                  "& .MuiBreadcrumbs-ol": {
                    justifyContent: "center",
                  },
                  "& .MuiBreadcrumbs-li": {
                    fontSize: "clamp(0.6rem, 2.5vw, 1rem)",
                  },
                }}
              >
                <Link
                  to="/"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Amrit Organics
                </Link>
                <Typography sx={{ color: "#fff" , fontSize: "clamp(0.6rem, 2.5vw, 1rem)"}}>Blogs</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {/* Title */}
            <h1
              className="text-4xl md:text-5xl font-bold text-center leading-tight hover:text-[#5B8C51] transition-colors duration-300"
              style={{ fontFamily: "Signika" }}
            >
              {blog.title}
            </h1>

            {/* Category Badge */}
            <div className="text-center">
              <Badge
                className="bg-emerald-100 text-emerald-900 px-4 py-1 text-sm"
                style={{ borderRadius: 15 }}
              >
                {blog.category}
              </Badge>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 text-center leading-relaxed">
              {blog.description}
            </p>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden">
              {blog.image?.url || true ? (
                <img
                  src={blog.image?.url || "/default.png"}
                  alt={blog.title || "Blog Image"}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <Typography
                variant="body1"
                component="div"
                className="text-gray-900 text-lg leading-relaxed"
                style={{ lineHeight: "1.8" }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.content),
                }}
              />
                
            </div>

            {/* Author Card */}
            <Card
              className="bg-gradient-to-br from-emerald-100 to-teal-100 border-none"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-400 flex items-center justify-center">
                  <User size={36} color="#fff" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{blog.author}</h3>
                  <p className="text-gray-600">
                    Content Writer & Agricultural Expert
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default Blogdetail;
