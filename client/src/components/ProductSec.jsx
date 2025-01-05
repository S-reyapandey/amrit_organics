import React from "react";
import products from "../utils/productData";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import { Share } from "@mui/icons-material";
import { Link } from "react-router-dom";

function ProductSec() {
  const handleShare = async (product) => {
    const shareData = {
      title: product.title,
      text: `Check out this product: ${product.title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Shared Successfully!");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing not supported on this browser.");
    }
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
        {products.map((product, idx) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
            rootMargin: "50px",
          });
          return (
            <Box
              ref={ref}
              sx={{
                transform: inView
                  ? "translateY(0) scale(1)"
                  : "translateY(50px) scale(0.9)",
                opacity: inView ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Card
                sx={{
                  position: "relative",
                  height: 420,
                  maxWidth: 345,
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",

                  "&:hover .product-image": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <CardHeader
                  title={product.title}
                  sx={{
                    bgcolor: "#545A4D",
                    color: "#fff",
                    height: 65,
                    fontWeight: "bold",
                  }}
                />
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    height: 190,
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="product-image"
                />
                <CardContent
                  sx={{ bgcolor: "#545A4D", color: "#fff", height: 165 }}
                >
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{
                      fontFamily: "Signika",
                      fontSize: "0.95rem",
                    }}
                  >
                    {product.description.slice(0, 120)}...
                  </Typography>
                  <div className="flex justify-between items-center">
                    <Link to={product.path}>
                      <button
                        className="text-yellow-100 font-medium"
                        style={{ fontFamily: "Signika" }}
                      >
                        Learn More
                      </button>
                    </Link>

                    <IconButton
                      className="p-2"
                      style={{
                        backgroundColor: "rgba(252, 211, 77, 1)",
                        borderRadius: "50%",
                      }}
                      onClick={() => handleShare(product)}
                    >
                      {" "}
                      <Share sx={{ color: "#000" }} />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSec;
