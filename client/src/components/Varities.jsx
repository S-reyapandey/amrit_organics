import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Monitor, Package, Award, Factory } from 'lucide-react';

const Varities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const varieties = [
    {
      purity: "99%",
      title: "Premium Grade",
      description: "Highest purity level for pharmaceutical applications",
      icon: Award,
      color: "from-emerald-400 to-emerald-600"
    },
    {
      purity: "98%",
      title: "Export Quality",
      description: "Meeting international quality standards",
      icon: Monitor,
      color: "from-emerald-500 to-emerald-700"
    },
    {
      purity: "95%",
      title: "Commercial Grade",
      description: "Ideal for food industry applications",
      icon: Package,
      color: "from-emerald-600 to-emerald-800"
    },
    {
      purity: "85%",
      title: "Industrial Grade",
      description: "Perfect for bulk industrial uses",
      icon: Factory,
      color: "from-emerald-700 to-emerald-900"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % varieties.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + varieties.length) % varieties.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 1700);
      return () => clearInterval(interval);
    }
  }, [isPaused, activeIndex]);


  return (
    <div className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden min-w-full" onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.3)' }}
      >
        <source src="https://res.cloudinary.com/dqmieig0r/video/upload/v1736514171/video2_qbs6iy.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: "Signika" }}>
            Discover Our Varieties
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative flex items-center justify-center mb-4">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg transition-all duration-200"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-96 flex items-center justify-center">
            {varieties.map((variety, index) => {
              const distance = (index - activeIndex + varieties.length) % varieties.length;
              const isActive = distance === 0;
              
              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: isActive ? 1 : 0.8,
                    x: `${(distance - 1) * 60}%`,
                    zIndex: varieties.length - Math.abs(distance),
                    opacity: 1 - Math.abs(distance) * 0.2
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute w-full max-w-lg px-6 cursor-pointer`}
                >
                  <div className={`bg-gradient-to-br ${variety.color} rounded-2xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105`}>
                    <div className="relative z-10">
                      {/* Variety Icon */}
                      <div className="mb-6">
                        <variety.icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-4xl font-bold text-white mb-2">
                        {variety.purity}
                      </h3>
                      <h4 className="text-xl font-semibold text-white/90 mb-4">
                        {variety.title}
                      </h4>
                      <p className="text-white/80">
                        {variety.description}
                      </p>
                      
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-2xl"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Custom Packaging", icon: Package },
            { title: "Quality Certified", icon: Award },
            { title: "Global Export", icon: Monitor }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <feature.icon className="w-8 h-8 text-white mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Varities;