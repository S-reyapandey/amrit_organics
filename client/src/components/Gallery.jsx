import React, { useRef, useState } from "react";
import gallery from "../utils/galleryData";
import Slider from "react-slick";

function Gallery() {
  const [hoverCard, setHoverCard] = useState(null);
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
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

  const handleMouseEnter = (idx) => {
    sliderRef.current.slickPause();
    setHoverCard(idx);
  };

  const handelMouseLeave = () => {
    sliderRef.current.slickPlay();
    setHoverCard(null);
  };

  return (
    <div className="relative container mx-auto px-8 py-10">


    
      {/* Products Grid */}

      <Slider {...settings} ref={sliderRef} className="w-full">
        {gallery.map((gal, idx) => (
          <div
            key={gal.id}
            className="flex items-center justify-center px-4"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handelMouseLeave}
            
          >
            <div
              className={`relative overflow-hidden bg-[#C3B59C] rounded-lg transform transition-transform duration-500 ease-out ${
                hoverCard === idx ? "scale-110 z-20" : "scale-100"
               }`} style={{
                position: "relative",
                transform: hoverCard === idx ? "scale(1.1) rotate3d(1, 1, 0, 10deg)" : "scale(1) rotate3d(0, 0, 0, 0deg)",
                boxShadow: hoverCard === idx ? "0px 10px 30px rgba(0, 0, 0, 0.3)" : "none",
                transition: "transform 0.5s ease-out, box-shadow 0.5s ease-out",
                
               }}
            >
            <div className="flex items-center justify-center h-full">
                <img
                  src={gal.image}
                  alt={gal.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

  
}

export default Gallery