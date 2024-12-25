import React, { useRef, useState } from "react";
import projects from "../utils/projectData";
import Slider from "react-slick";
import { motion } from "framer-motion";

function ExploreProject() {
  const [hoverCard, setHoverCard] = useState(null);

  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handleMouseEnter = (idx) => {
    sliderRef.current.slickPause();
    setHoverCard(idx);
  };

  const handelMouseLeave = () => {
    sliderRef.current.slickPlay();
    setHoverCard(null);
  };

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="container mx-auto px-16 py-10">
      {/*Header Section */}
      <div className="text-center mb-8">
        <h3
          className="text-yellow-400 text-2xl mb-2"
          style={{ fontFamily: "Courgette" }}
        >
          Recently Completed
        </h3>
        <h2
          className="text-2xl md:text-3xl font-extrabold mb-2"
          style={{ fontFamily: "Manrope" }}
        >
          Explore Projects
        </h2>
      </div>

      {/*Arrow */}

      <div className="flex justify-end mb-4 gap-3">
        <button
          onClick={prevSlide}
          className="p-2 border btn-grad rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Previous projects"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-2 border btn-grad rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Next projects"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Products Grid */}

      <Slider {...settings} ref={sliderRef}>
        {projects.map((project, idx) => (
          <div key={project.id} className="px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-500 ${
                hoverCard === idx ? "scale-105" : "scale-100"
              }`}
              onMouseEnter={() => setHoverCard(idx)}
              onMouseLeave={() => setHoverCard(null)}
            >
              <div className="flex flex-col md:flex-row">
                <motion.div
                  variants={staggerChildren}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="md:w-1/2 p-8 flex flex-col justify-center"
                >
                  <motion.h3
                    variants={fadeInUp}
                    className={`text-3xl font-bold mb-4 transition-all duration-300  ${
                      hoverCard === idx ? "text-yellow-400" : ""
                    }`}
                    style={{ fontFamily: "Signika" }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeInUp}
                    className="text-gray-600 mb-6 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div variants={fadeInUp} className="flex gap-4">
                    <button className="px-6 py-2 text-white rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-md btn-gradient">
                      View Details
                    </button>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="md:w-1/2 relative h-[400px]"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-black/20 transition-opacity duration-300 
                    ${hoverCard === idx ? "opacity-100" : "opacity-0"}`}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ExploreProject;

