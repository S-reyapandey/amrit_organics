import React from "react";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";

const Names = () => {
  const names = [
    {
      name: "Flea",
      origin: "English",
      description: "Common Western refers seed's appearance",
    },
    {
      name: "Ispaghula",
      origin: "Persian",
      description: "Traditional Persian term for the plant",
    },
    {
      name: "Spogel",
      origin: "German",
      description: "Germanic variation of the name",
    },
    {
      name: "Plantago Psyllium",
      origin: "Latin",
      description: "Scientific botanical name",
    },
    {
      name: "Isaphgol",
      origin: "Indian",
      description: "Common name in South Asian regions",
    },
    {
      name: "Isabgua",
      origin: "Arabic",
      description: "Middle Eastern variation",
    },
  ];

  return (
    <div className="relative py-10 overflow-hidden ">
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold text-black mb-4"
            style={{ fontFamily: "Signika" }}
          >
            Global Recognition
          </h2>
          <div className="flex items-center justify-center gap-2 text-emerald-700">
            <Globe className="w-5 h-5" />
            <p className="text-lg">Known Worldwide By Many Names</p>
          </div>
        </motion.div>

        {/* Names Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {names.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="relative overflow-hidden rounded-xl bg-black/65 backdrop-blur-sm 
                            border border-black/70 p-6 hover:bg-black/70 transition-all duration-300
                            transform hover:-translate-y-1"
              >
                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black-600/0 to-black-600/0 
                              group-hover:from-black-600/10 group-hover:to-black-400/10 transition-all duration-300"
                />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-emerald-400 text-sm mb-3">{item.origin}</p>
                  <p className="text-white/70">{item.description}</p>

                  {/* Arrow Icon */}
                  <div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 
                                transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(2); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default Names;
