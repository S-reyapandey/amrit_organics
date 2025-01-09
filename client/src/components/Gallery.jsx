import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import gallery from "../utils/galleryData";

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  return (
    <div className="relative bg-gray-50 py-16 ">
      {/* Static Background with reduced complexity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-black/15 rounded-full"
              style={{
                width: `${Math.max(100, Math.random() * 200)}px`,
                height: `${Math.max(100, Math.random() * 200)}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/90" />
        <div className="absolute inset-0 opacity-[0.02] bg-[length:60px_60px]" />
      </div>

      <div className="relative container mx-auto px-4">
        {/*Header Section */}
        <div className="text-center mb-5">
          <h3
            className="text-yellow-400 text-6xl mb-3"
            style={{ fontFamily: "Courgette" }}
          >
            Gallery
          </h3>
        </div>

        {/* Gallery Carousel */}
        <div className="relative px-8">
          <div className="slick-list-wrapper overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
              {gallery.map((item, idx) => (
                <div key={item.id} className="px-3 py-4">
                  <div
                    className={`relative group overflow-hidden rounded-xl transition-all duration-500
                      ${
                        idx === activeSlide
                          ? "scale-110"
                          : "scale-95 opacity-80"
                      }
                      hover:scale-105 hover:opacity-100`}
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 
                          group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white"></div>

                      {/* Zoom Icon */}
                      <div
                        className="absolute top-4 right-4 bg-white/20 p-2 rounded-full 
                        backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={previous}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white 
              p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300
              hover:scale-110 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white 
              p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300
              hover:scale-110 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {gallery.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 
                ${
                  idx === activeSlide ? "w-6 bg-purple-500" : "w-2 bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Add required styles for Slick slider */}
      <style jsx global>{`
        .slick-list-wrapper .slick-list {
          margin: 0 -12px;
        }
        .slick-track {
          display: flex !important;
        }
        .slick-slide {
          height: inherit !important;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
