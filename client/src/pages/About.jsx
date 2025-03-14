import { Breadcrumbs, CardContent, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LazyImage from "../components/Loading/LazyImage";

function About() {
  useEffect(() => {
    const video = document.getElementById("backgroundVideo");
    if (video) {
      video.playbackRate = 0.4;
    }
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal classes
    document
      .querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right"
      )
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="md:px-6 mb-20 sm:px-0 lg:px-3">
      <Stack spacing={6}>
        {/*Header Section */}
        <div className="relative mb-8 bg-white">
          {/*Image Container */}
          <div className="relative">
            <LazyImage
              src="/profile1.png"
              alt="headerImage"
              className="w-full h-[55vh] sm:h-[70vh] lg:h-[85vh] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45">
              <h1
                className="text-white text-6xl font-bold slide-in mb-4"
                style={{
                  fontFamily: "Signika",
                  fontSize: "clamp(2.2rem, 6vw, 4rem)",
                  textAlign: "center",
                }}
              >
                About Us
              </h1>
              <Breadcrumbs
                className="slide-in"
                aria-label="breadcrumb"
                sx={{
                  "& .MuiBreadcrumbs-separator": {
                    color: "white",
                  },
                  "& .MuiBreadcrumbs-ol": {
                    justifyContent: "center",
                  },
                  "& .MuiBreadcrumbs-li": {
                    fontSize: "clamp(0.6rem, 2.5vw, 1rem)",
                  },
                }}
              >
                <Link
                  to="/"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Amrit Organics
                </Link>
                <Typography
                  sx={{ color: "#fff", fontSize: "clamp(0.6rem, 2.5vw, 1rem)" }}
                >
                  About Us
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/*About 1*/}
          <div className="container mx-auto px-2 mb-16">
            {/* Fixed Background Video */}
            <div className="fixed top-60 left-0 w-full h-full -z-10 overflow-hidden">
              <video
                id="backgroundVideo"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{
                  filter: "brightness(-0.1)",
                  mixBlendMode: "multiply",
                  opacity: "0.3",
                }}
              >
                <source
                  src="https://res.cloudinary.com/dqmieig0r/video/upload/v1736514784/video1_uq91bv.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 scroll-reveal-left">
                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 font-semibold max-w-prose">
                  At Amrit Organics, we specialize in premium organic & natural
                  agricultural products, with a strong focus on sustainability.
                  Our commitment is to deliver pure, ethically sourced, and
                  globally certified products.  Driven by a vision to transform
                  organic farming, we have established ourselves as a trusted
                  manufacturer and supplier, serving customers across India and
                  internationally. Our offerings represent not only superior
                  quality but also a dedication to fostering a healthier planet
                  through responsible farming practices. We maintain the highest
                  standards throughout every stage of our operations. <br/> Located in
                  the Jaisalmer District of Rajasthan—an area renowned for its
                  Psyllium, Cumin, Guar, and other Spices & Herbs—our
                  manufacturing unit works closely with over 20,000 farmers. By
                  ensuring traceability and adhering to stringent quality
                  controls, we deliver the finest products of nature, untouched
                  and uncompromised.
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 scroll-reveal-right">
                <LazyImage
                  src="/rightSide.png"
                  alt="Right side content"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Mission Statement */}

          <div className="w-full mb-12 scroll-reveal">
            {/* Card Container */}
            <div
              className="max-w-full flex flex-col sm:flex-row items-center p-5 border rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
              style={{ backgroundColor: "#4BAF47", opacity: "0.84" }}
            >
              {/* Image on Left Side */}
              <div className="w-full sm:w-1/3 py-2">
                <img
                  src="/mission.png"
                  alt="our vision"
                  className="w-2/3 h-1/3 pl-5 object-cover rounded-lg"
                />
              </div>

              {/* Content on Right Side */}
              <div className="w-full sm:w-2/3 py-2">
                <h3
                  className="text-gray-900 text-4xl font-semibold mb-3"
                  style={{ fontFamily: "Courgette" }}
                >
                  Our Mission
                </h3>
                <p
                  className="text-gray-700"
                  style={{ lineHeight: "1.6", fontSize: "1.2rem" }}
                >
                  Our mission is to provide high-quality, organic products while
                  promoting sustainability and ethical farming practices. We aim
                  to bridge the gap between farmers and global markets, ensuring
                  a healthier future for our planet and our customers.
                </p>
              </div>
            </div>
          </div>

          {/*Vision Statement */}

          <div className="w-full py-6 mb-12 scroll-reveal">
            {/* Card Container */}
            <div
              className="max-w-full flex flex-col sm:flex-row items-center p-5 border rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
              style={{ backgroundColor: "#C5CE38", opacity: "0.84" }}
            >
              {/* Content on left Side */}
              <div className="w-full sm:w-3/4 py-2 sm:pr-8 pl-5">
                <h3
                  className="text-gray-900 text-4xl font-semibold mb-3"
                  style={{ fontFamily: "Courgette" }}
                >
                  Our Vision
                </h3>
                <p
                  className="text-gray-600"
                  style={{ lineHeight: "1.6", fontSize: "1.2rem" }}
                >
                  We envision a world where organic agriculture is the standard,
                  not the exception. Through innovation, collaboration, and
                  commitment to quality, we strive to be a global leader in the
                  organic industry
                </p>
              </div>

              {/* Image on right Side */}

              <div className="w-full sm:w-2/4 py-2 flex justify-center sm:justify-center">
                <img
                  src="/vision.png"
                  alt="our vision"
                  className="w-1/3 h-1/3 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Our Core Values */}

          <div className="w-full mb-4 scroll-reveal">
            {/* Card Container */}
            <div
              className="max-w-full flex flex-col sm:flex-row items-center p-5 border rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
              style={{ backgroundColor: "#EEC044", opacity: "0.84" }}
            >
              {/* Image on Left Side */}
              <div className="w-full sm:w-1/3 py-2">
                <img
                  src="/values.png"
                  alt="our vision"
                  className="w-2/3 h-1/3 pl-5 object-cover rounded-lg"
                />
              </div>

              {/* Content on Right Side */}
              <div className="w-full sm:w-2/3 py-2">
                <h3
                  className="text-gray-900 text-4xl font-semibold mb-4"
                  style={{ fontFamily: "Courgette" }}
                >
                  Our Core Values
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-black text-2xl font-bold">•</span>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        Quality First
                      </h4>
                      <p className="text-gray-600 text-lg">
                        We ensure that every product meets the highest
                        standards.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black text-2xl font-bold">•</span>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        Sustainability
                      </h4>
                      <p className="text-gray-600 text-lg">
                        Protecting the environment through eco-friendly
                        practices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black text-2xl font-bold">•</span>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        Integrity
                      </h4>
                      <p className="text-gray-600 text-lg">
                        Honesty and transparency in everything we do.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black text-2xl font-bold">•</span>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">
                        Community Impact
                      </h4>
                      <p className="text-gray-600 text-lg">
                        Empowering farmers and local communities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default About;
