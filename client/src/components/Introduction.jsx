import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaSeedling } from "react-icons/fa";

const Introduction = () => {
  const slideFadeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageFadeVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const leafVibrateVariant = {
    initial: { y: 0 },
    animate: {
      y: [0, -6, 0, 6, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full px-4 py-8 md:py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left side with images */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center py-10"
            variants={slideFadeVariant}
          >
            <div className="relative">
              {/* Main large circular image */}
              <motion.div
                className="w-[360px] h-[360px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] rounded-full overflow-hidden"
                variants={imageFadeVariant}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  className="w-full h-full object-cover"
                  src="/imagesIntro/bottom.png"
                  alt="Farm machinery in field at sunset"
                />
              </motion.div>

              {/* Small circular image positioned on the left */}
              <motion.div
                className="absolute -left-4 -bottom-4 sm:-left-8 sm:-bottom-8 md:-left-12 md:-bottom-10 
                           transform -translate-x-4 translate-y-4 sm:-translate-x-8 sm:translate-y-8 md:-translate-x-10 md:translate-y-10 
                           w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 
                           rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white bg-white"
                variants={leafVibrateVariant}
                initial="initial"
                animate="animate"
              >
                <img
                  className="w-full h-full object-cover"
                  src="/imagesIntro/upper.png"
                  alt="Hands holding produce"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div
            className="w-full md:w-1/2"
            variants={slideFadeVariant}
            transition={{ delay: 0.2 }}
          >
            <div className="text-left">
              <h3
                className="text-yellow-400 text-4xl sm:text-5xl mb-3"
                style={{ fontFamily: "Courgette" }}
              >
                Our Introductions
              </h3>
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-2 slide-in"
                style={{ fontFamily: "Manrope" }}
              >
                Welcome to Amrit Organics
              </h2>
              <div
                className=" text-xl font-bold mb-3 slide-in"
                style={{ fontFamily: "Manrope", color: "#4BAF47" }}
              >
                Pioneering Sustainable Farming and Organic Excellence
              </div>
              <p
                className="text-gray-600 text-lg  mx-auto mb-6 slide-in"
                style={{ lineHeight: "1.6" }}
              >
                At Amrit Organics, we are committed to delivering the finest
                natural and organic products, nurtured with care and rooted in
                sustainable farming practices. From premium Psyllium Husk to
                superfoods like Moringa Powder and Stevia, we aim to inspire
                healthier living while protecting our planet.
              </p>

              {/* Feature items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto slide-in">
                <motion.div
                  className="flex items-start gap-4"
                  variants={slideFadeVariant}
                  transition={{ delay: 0.4 }}
                >
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center">
                      {/* Icon placeholder */}
                      <FaLeaf className="text-yellow-400 text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1.5">
                      Premium Quality Products
                    </h4>
                    <p
                      className="text-md text-gray-600"
                      style={{ lineHeight: "1.3" }}
                    >
                      Our products meet the highest global standards of purity
                      and quality.
                    </p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-4">
                  <div
                    className="p-2 bg-yellow-100 rounded-lg"
                    variants={slideFadeVariant}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      {/* Icon placeholder */}
                      <FaSeedling className="text-yellow-400 text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1.5">
                      Eco-Friendly Practices
                    </h4>
                    <p
                      className="text-md text-gray-600"
                      style={{ lineHeight: "1.4" }}
                    >
                      Sustainable farming methods for a greener, healthier
                      future.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
