import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function MoringaPowder() {

   useEffect(() => {
      const observerOptions = {
        threshold: 0.2,
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, observerOptions);
  
      document
        .querySelectorAll(
          ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right"
        )
        .forEach((element) => observer.observe(element));
  
      return () => observer.disconnect();
    }, []);

  return (
    <div className="md:px-6 mb-20 sm:px-0 lg:px-6">
      <Stack spacing={6}>
        {/*Header Section */}
        <div className="relative mb-8">
          {/*Image Container */}
          <div className="relative">
            <img
              src="/productsImages/moringaPowder.png"
              alt="headerImage"
              className="w-full object-cover"
              style={{
                height: "500px",
                objectFit: "cover",
              }}
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
                Moringa Powder
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
                <Link
                  to="/products"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Products
                </Link>
                <Typography
                  sx={{ color: "#fff", fontSize: "clamp(0.6rem, 2.5vw, 1rem)" }}
                >
                  Moringa Powder
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/*description */}

        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Content Section */}
            <div className="w-full px-10 py-3 scroll-reveal-left space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900">
                  <b className="text-2xl text-[#5B8C51]">
                    <i>Moringa : The Superfood for Health and Wellness {" "}</i>
                  </b>
                  ,  also known as the "Drumstick Tree" or the "Tree of Life," is
                  a remarkable plant celebrated for its exceptional nutritional
                  profile and health benefits. Revered for centuries, Moringa is
                  often considered one of the most nutritious plants on earth,
                  with every part of the tree—from its leaves and pods to its
                  seeds—packed with essential vitamins, minerals, and
                  antioxidants.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  This powerhouse superfood is a valuable source of vitamins A,
                  C, and E, calcium, iron, potassium, and protein, offering a
                  natural way to support overall health, boost energy, and
                  enhance immunity. Moringa is known to fight oxidative stress,
                  reduce inflammation, and promote healthy digestion, making it
                  an essential addition to any wellness routine.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/*Why section */}

        <div className="w-full mb-8 px-6 py-4">
          {/* Card Container */}
          <div
            className="max-w-full flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "#F7C35F" }}
          >
            {/* Content on Right Side */}
            <div className="w-full scroll-reveal">
              <h3
                className="text-gray-800 text-2xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                Why Choose Our Organic Moringa Powder ?
              </h3>
              <p
                className="text-gray-600 text-lg"
                style={{ lineHeight: "1.6" }}
              >
                <li>
                  <b>100% Organic :</b> Free from harmful chemicals and
                  pesticides.
                </li>
                <li>
                  <b>Nutrient-Rich :</b> Packed with vitamins, minerals, and
                  antioxidants.
                </li>

                <li>
                  <b>Sustainably Sourced :</b>Grown using eco-friendly farming
                  practices.
                </li>
                <li>
                  <b>Versatile Applications :</b>Suitable for use in food,
                  beverages, and health supplements.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*Packaging */}

        <div className="w-full mb-8 px-6 py-4">
          {/* Card Container */}
          <div
            className="max-w-full flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "#49A760" }}
          >
            {/* Content on Right Side */}
            <div className="w-full scroll-reveal">
              <h3
                className="text-white text-2xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                Packaging and Availability
              </h3>
              <p
                className="text-white text-lg"
                style={{ lineHeight: "1.6"}}
              >
                <li>
                  <b>Consumer Options :</b> Available in 100g, 250g, and 500g,
                  1kg sizes
                </li>
                <li>
                  <b>Bulk Packaging :</b> Customizable options for businesses
                  and exporters.
                </li>
                <li>
                  <b>Shelf Life : </b>
                  Long-lasting freshness when stored in a cool, dry place
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*Contacting */}
                <div className="container mx-auto p-10 mb-12 scroll-reveal-left">
                  <h2
                    style={{
                      fontFamily: "Signika",
                      fontWeight: "600",
                    }}
                    className="mb-3 text-2xl"
                  >
                    Looking for a trusted supplier of high-quality psyllium seeds?
                  </h2>
                  <p className="text-lg">
                    At Amrit Organics, we are dedicated to meeting your needs with
                    excellence.{" "}
                    <Link to="/contact" style={{ fontWeight: 900 }}>
                      Get in touch
                    </Link>{" "}
                    today to request a quote, product samples, or learn more about our
                    offerings.
                  </p>
                </div>
      </Stack>
    </div>
  );
}

export default MoringaPowder;
