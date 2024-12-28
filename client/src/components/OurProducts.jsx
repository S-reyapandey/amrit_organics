import React, { useRef, useState } from "react";
import products from "../utils/productData";
import Slider from "react-slick";
import { Divider, IconButton } from "@mui/material";
import { ArrowLeft, ArrowRight, Share } from "@mui/icons-material";
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

  return (
    <div className="container mx-auto px-16 py-10">
      {/*Header Section */}
      <div className="text-center mb-3">
        <h3
          className="text-yellow-400 text-2xl mb-2"
          style={{ fontFamily: "Courgette" }}
        >
          Our Products
        </h3>
        <h2
          className="text-2xl md:text-3xl font-extrabold mb-2"
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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="p-2 border btn-grad rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Next projects"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

      {/* Products Grid */}

      <Slider {...settings} ref={sliderRef}>
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`px-3 transition-all duration-300 ${
                hoverCard !== null && hoverCard !== idx ? "opacity-97 blur-sm" : ""
              }`}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handelMouseLeave}
          >
            <div
              className={`bg-[#C3B59C] rounded-3xl p-4 transition-all duration-300 ${
                hoverCard === idx ? "scale-100 shadow-md z-100" : ""
              }`}
              style={{
                transform: hoverCard === idx ? "translateY(-8px)" : "none",
                height: 510
              }}
            >
              <div className="mb-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-2xl w-full h-64 object-cover"
                />
              </div>

              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                {product.title}
              </h3>
              <Divider
                sx={{
                  width: "100%",
                  marginBottom: 2,
                  bgcolor: "#4E574A",
                  height: "0.05rem",
                  color: "#EEF2EC",
                }}
              />
              <p
                className="text-gray-700 mb-6 text-sm"
                style={{ fontFamily: "Signika" }}
              >
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
              <Link to={product.path}>
              <button
              className="text-yellow-600 font-medium"
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurProducts;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import { Card, CardContent, CardMedia, CardActions } from '@/components/ui/card';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { Button } from '@/components/ui/button';
// import { Check, Copy, Facebook, Twitter, WhatsApp, Link as LinkIcon } from 'lucide-react';
// import products from "../../utils/productData";

// function OurProducts() {
//   const [copied, setCopied] = useState(false);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const copyToClipboard = (productId) => {
//     const url = `${window.location.origin}/product/${productId}`;
//     navigator.clipboard.writeText(url);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const shareProduct = (platform, productId) => {
//     const url = encodeURIComponent(`${window.location.origin}/product/${productId}`);
//     const text = encodeURIComponent("Check out this amazing product!");

//     const shareUrls = {
//       facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
//       twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
//       whatsapp: `https://wa.me/?text=${text}%20${url}`
//     };

//     window.open(shareUrls[platform], '_blank');
//   };

//   return (
//     <div className="py-16 px-8">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h3 className="text-orange-400 text-2xl font-semibold">Our Products</h3>
//         <h2 className="text-4xl font-bold text-gray-800">What we Offer</h2>
//       </div>

//       {/* Products Carousel */}
//       <Slider {...settings}>
//         {products.map((product) => (
//           <div key={product.id} className="px-3">
//             <Card className="bg-[#e6e0d8] rounded-3xl overflow-hidden">
//               <CardMedia>
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-64 object-cover"
//                 />
//               </CardMedia>

//               <CardContent className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
//                 <p className="text-gray-600">{product.description}</p>
//               </CardContent>

//               <CardActions className="flex justify-between items-center p-6 pt-0">
//                 <button className="text-blue-600 font-medium">
//                   Learn More
//                 </button>

//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button className="p-2 bg-yellow-300 rounded-full hover:bg-yellow-400">
//                       <LinkIcon className="h-5 w-5" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-56" align="end">
//                     <div className="space-y-2">
//                       <h4 className="font-medium mb-2">Share Product</h4>

//                       {/* Copy Link Button */}
//                       <Button
//                         variant="outline"
//                         className="w-full justify-start gap-2"
//                         onClick={() => copyToClipboard(product.id)}
//                       >
//                         {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
//                         {copied ? 'Copied!' : 'Copy Link'}
//                       </Button>

//                       {/* Social Share Buttons */}
//                       <Button
//                         variant="outline"
//                         className="w-full justify-start gap-2"
//                         onClick={() => shareProduct('facebook', product.id)}
//                       >
//                         <Facebook className="h-4 w-4" />
//                         Facebook
//                       </Button>

//                       <Button
//                         variant="outline"
//                         className="w-full justify-start gap-2"
//                         onClick={() => shareProduct('twitter', product.id)}
//                       >
//                         <Twitter className="h-4 w-4" />
//                         Twitter
//                       </Button>

//                       <Button
//                         variant="outline"
//                         className="w-full justify-start gap-2"
//                         onClick={() => shareProduct('whatsapp', product.id)}
//                       >
//                         <WhatsApp className="h-4 w-4" />
//                         WhatsApp
//                       </Button>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </CardActions>
//             </Card>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default OurProducts;
