import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const BotanicalNames = () => {
  const botanicalNames = [
    {
      name: "Plantago Ovata",
      description: "Primary botanical classification"
    },
    {
      name: "Plantago Ispaghula",
      description: "Alternative scientific nomenclature"
    }
  ];

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-100/50 rounded-full blur-2xl"></div>
        
        {/* Content Container */}
        <div className="relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <Leaf className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-emerald-900" style={{ fontFamily: "Signika" }}>
              <i>Botanical Names of Psyllium Seeds</i>
            </h2>
          </motion.div>

          {/* Names List */}
          <div className="space-y-1">
            {botanicalNames.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="flex items-center gap-4 p-1 rounded-xl hover:bg-white/80 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300" 
                        style={{ fontFamily: "Manrope" }}>
                      {item.name}
                    </h3>
                    <p className="text-lg text-slate-900  group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotanicalNames;