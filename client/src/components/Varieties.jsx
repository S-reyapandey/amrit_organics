import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Sprout, Check } from 'lucide-react';

const Varieties = () => {
  const [hoveredVariety, setHoveredVariety] = useState(null);

  const varieties = [
    {
      name: "IPM Cumin",
      description: "Integrated Pest Management cultivated cumin",
      features: "Premium quality with controlled pest management",
      color: "from-blue-400 to-emerald-600",
      icon: Shield
    },
    {
      name: "Organic Cumin",
      description: "100% Organically grown cumin",
      features: "Natural and chemical-free cultivation",
      color: "from-green-400 to-green-600",
      icon: Leaf
    },
    {
      name: "Conventional Cumin",
      description: "Traditional cultivation method",
      features: "Standard quality cumin seeds",
      color: "from-teal-400 to-teal-600",
      icon: Sprout
    }
  ];

  return (
    <div className="relative py-12 w-full bg-gray-50">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-black/5 rounded-full"
              style={{
                width: `${Math.max(100, Math.random() * 200)}px`,
                height: `${Math.max(100, Math.random() * 200)}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#73796C] mb-3 font-['Signika']">
            Variety Available
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Roboto']">
            Explore our premium selection of cumin varieties
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#73796C] to-[#EDDD5E] mx-auto mt-6"></div>
        </motion.div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {varieties.map((variety, index) => {
            const Icon = variety.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredVariety(index)}
                onMouseLeave={() => setHoveredVariety(null)}
              >
                <div
                  className={`relative bg-gradient-to-br ${variety.color} 
                    rounded-2xl p-6 h-full transform transition-all duration-300 
                    hover:scale-105 hover:shadow-xl`}
                >
                  {/* Main Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Check className="w-5 h-5 text-white/80" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 font-['Signika']">
                      {variety.name}
                    </h3>
                    <p className="text-white/90 font-medium mb-2 font-['Roboto']">
                      {variety.description}
                    </p>
                    <p className="text-white/80 text-sm font-['Roboto']">
                      {variety.features}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Varieties;