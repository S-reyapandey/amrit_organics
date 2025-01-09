import React, { useRef, useState } from "react";
import products from "../utils/productData";
import Slider from "react-slick";
import { Divider, IconButton } from "@mui/material";
import { Share } from "@mui/icons-material";
import { Link } from "react-router-dom";

function OurProducts() {
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
    <div className="container mx-auto px-8 py-10">
      {/*Header Section */}
      <div className="text-center mb-3">
        <h3
          className="text-yellow-400 text-6xl mb-3"
          style={{ fontFamily: "Courgette" }}
        >
          Our Products
        </h3>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-2"
          style={{ fontFamily: "Manrope" }}
        >
          What we Offer
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
          className="p-2 border btn-grad rounded-md hover:bg-gray-100 transition-colors"
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

      {/* Products Grid */}

      <Slider {...settings} ref={sliderRef}>
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`px-3 transition-all duration-300 ${
              hoverCard !== null && hoverCard !== idx
                ? "opacity-99 blur-sm"
                : ""
            }`}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handelMouseLeave}
          >
           
              <div
                className={`bg-[#C3B59C] rounded-3xl p-4 transition-all duration-300`}
                style={{
                  height: 530,
                }}
              >
                <div className="mb-3 overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`w-full h-64 object-cover transition-transform duration-500 ${
                      hoverCard === idx ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                <h3
                className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${
                  hoverCard === idx ? "text-emerald-800" : "text-black"
                }`}
                  style={{ fontFamily: "Signika", textDecoration: "none" }}
                >
                  {product.title}
                </h3>
                <Divider
                  sx={{
                    width: "100%",
                    marginBottom: 2,
                    bgcolor: "#4E574A",
                    height: "0.08rem",
                    color: "#EEF2EC",
                  }}
                />
                <p
                  className={`text-gray-700 mb-6 text-md transition-colors duration-300 ${
                    hoverCard === idx ? "text-gray-900" : "text-gray-700"
                  }`}
                  style={{ fontFamily: "Signika" }}
                >
                  {product.description}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <Link to={product.path}>
                    <button
                      className="text-yellow-600 text-lg"
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
                      onClick={() => handleShare(product)}
                    >
                      {" "}
                      <Share sx={{ color: "#000" }} />
                    </IconButton>
                  </a>
                </div>
              </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurProducts;
