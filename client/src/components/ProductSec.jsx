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
              key={idx}
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
                    height: 180,
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{ bgcolor: "#545A4D", color: "#fff", height: 155 }}
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

                    <a>
                      <IconButton
                        className="p-2"
                        style={{
                          backgroundColor: "rgba(252, 211, 77, 1)",
                          borderRadius: "50%",
                        }}
                      >
                        {" "}
                        <Share sx={{ color: "#000" }} />
                      </IconButton>
                    </a>
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
