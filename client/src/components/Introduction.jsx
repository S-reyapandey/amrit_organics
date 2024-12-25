import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  const slideFadeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full px-24 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left side with images */}
          <motion.div
            className="relative w-full md:w-1/2 flex justify-center"
            variants={slideFadeVariant}
          >
            <div className="relative">
              {/* Main large circular image */}
              <div className="w-[360px] h-[360px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/imagesIntro/bottom.png"
                  alt="Farm machinery in field at sunset"
                />
              </div>

              {/* Small circular image positioned on the left */}
              <div className="absolute -left-4 -bottom-1 transform -translate-x-10 translate-y-10 w-44 h-44 rounded-full overflow-hidden border-8 border-white bg-white">
                <img
                  className="w-full h-full object-cover"
                  src="/imagesIntro/upper.png"
                  alt="Hands holding produce"
                />
              </div>
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
                className="text-yellow-400 text-2xl mb-2"
                style={{ fontFamily: "Courgette" }}
              >
                Our Introductions
              </h3>
              <h2
                className="text-2xl md:text-3xl font-extrabold mb-3 slide-in"
                style={{ fontFamily: "Manrope" }}
              >
                Agriculture & Organic Product Farm
              </h2>
              <div
                className=" text-md font-bold mb-3 slide-in"
                style={{ fontFamily: "Manrope", color: "#4BAF47" }}
              >
                Amrit Organics is the emerging organisation for sustainable
                farming
              </div>
              <p
                className="text-gray-600 text-sm  mx-auto mb-6 slide-in"
                style={{ lineHeight: "1.6", fontSize: "0.8rem" }}
              >
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humor or random word which don't look even.
              </p>

              {/* Feature items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto slide-in">
                <motion.div
                  className="flex items-center gap-4"
                  variants={slideFadeVariant}
                  transition={{ delay: 0.4 }}
                >
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center">
                      {/* Icon placeholder */}
                      <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                    </div>
                  </div>
                  <div className="gap-3">
                    <h4 className="font-semibold text-sm mb-1.5">
                      Growing fruits vegetables
                    </h4>
                    <p
                      className="text-xs text-gray-600"
                      style={{ lineHeight: "1.2", fontSize: "0.7rem" }}
                    >
                      Lorem ipsum is not simply random text.
                    </p>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-4">
                  <div
                    className="p-3 bg-yellow-100 rounded-lg"
                    variants={slideFadeVariant}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      {/* Icon placeholder */}
                      <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1.5">
                      Tips for ripening your fruits
                    </h4>
                    <p
                      className="text-xs text-gray-600"
                      style={{ lineHeight: "1.2", fontSize: "0.7rem" }}
                    >
                      Making this the first true generator on the internet.
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
