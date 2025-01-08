import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Grid, ArrowRightCircle, Filter, Microscope } from "lucide-react";

const Sizes = () => {
  const [hoveredSize, setHoveredSize] = useState(null);

  const meshSizes = [
    {
      size: "100 Mesh",
      description: "Ultra-fine grade powder",
      particleSize: "149 microns",
      color: "from-blue-400 to-blue-600",
    },
    {
      size: "80 Mesh",
      description: "Fine grade powder",
      particleSize: "177 microns",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      size: "70 Mesh",
      description: "Medium-fine grade powder",
      particleSize: "210 microns",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      size: "60 Mesh",
      description: "Medium grade powder",
      particleSize: "250 microns",
      color: "from-teal-400 to-teal-600",
    },
    {
      size: "40 Mesh",
      description: "Coarse grade powder",
      particleSize: "420 microns",
      color: "from-green-400 to-green-600",
    },
  ];

  const handleHover = useCallback((index) => {
    setHoveredSize(index);
  }, []);

  return (
    <div className="relative py-8 w-full">
      {/* Static Background with reduced complexity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-black/5 rounded-full"
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

      {/* Content Container */}
      <div className="relative container mx-auto px-2">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2
            className="text-5xl font-bold text-[#EEC044] mb-3"
            style={{ fontFamily: "Signika" }}
          >
            Available Sizes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select the perfect mesh size for your specific application needs
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Mesh Sizes Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {meshSizes.map((mesh, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="relative"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div
                className={`relative bg-gradient-to-br ${mesh.color} rounded-2xl p-6 h-full
                           transform transition-transform duration-300 hover:scale-102
                           hover:shadow-lg`}
              >
                {/* Main Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Grid className="w-8 h-8 text-white" />
                    <div className="flex items-center space-x-2">
                      <Filter className="w-4 h-4 text-white/80" />
                      <Microscope className="w-4 h-4 text-white/80" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    {mesh.size}
                  </h3>
                  <p className="text-white/90 font-medium mb-2">
                    {mesh.description}
                  </p>
                  <div className="text-white/80 text-sm mb-4">
                    Particle size: {mesh.particleSize}
                  </div>
                  
                </div>

                {/* Simplified Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sizes;
