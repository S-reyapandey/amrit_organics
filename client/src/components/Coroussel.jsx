import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Coroussel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('right');

  const slides = [
    {
      image: "/images/img1.png",
      title: "Sustainable Farming",
      subtitle: "Growing for tomorrow"
    },
    {
      image: "/images/img2.png",
      title: "Organic Agriculture",
      subtitle: "Nature's way of farming"
    },
    {
      image: "/images/img3.png",
      title: "Modern Techniques",
      subtitle: "Innovation in agriculture"
    },
    {
      image: "/images/img4.png",
      title: "Traditional Methods",
      subtitle: "Preserving our heritage"
    },
    {
      image: "/images/img5.png",
      title: "Traditional Methods",
      subtitle: "Preserving our heritage"
    },
    {
      image: "/images/img6.png",
      title: "Traditional Methods",
      subtitle: "Preserving our heritage"
    }
  ];

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(nextSlide, 4000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="relative w-full sm:h-[85vh] h-[60vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 ease-in-out transform
              ${index === currentSlide ? 'opacity-100 translate-x-0' : 
                direction === 'right' ? 
                  (index === (currentSlide + 1) % slides.length ? 'opacity-100 translate-x-full' : 'opacity-90 translate-x-full') :
                  (index === (currentSlide - 1 + slides.length) % slides.length ? 'opacity-100 -translate-x-full' : 'opacity-90 -translate-x-full')
              }`}
           
          >
            {/* Image with overlay */}
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className={`text-6xl md:text-8xl font-bold mb-4 transition-all duration-700 delay-100 text-center
                  ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{fontFamily: "Courgette"}}>
                  {slide.title}
                </h2>
                <p className={`text-3xl md:text-4xl transition-all duration-700 delay-200
                  ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 
          hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-all
          text-white border border-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 
          hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-all
          text-white border border-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full
              ${index === currentSlide ? 'w-12 bg-white' : 'w-6 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Coroussel;