import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CorianderPowder() {


  useEffect(() => {
        const observerOptions = {
          threshold: 0.2 // Trigger when 20% of element is visible
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, observerOptions);
    
        // Observe all elements with scroll-reveal classes
        document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
          .forEach(element => observer.observe(element));
    
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
              src="/productsImages/corianderSeed.png"
              alt="headerImage"
              className="w-full object-cover"
              style={{
                height: "500px",
                objectFit: "cover"
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
                Coriander Seeds
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
                  Coriander Seeds
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/*description */}

        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Content Section */}
            <div className="w-full space-y-6 px-10 py-3 scroll-reveal-left">
              <div className="prose prose-gray max-w-none">
                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900">
                  <b className="text-2xl text-[#5B8C51]">
                    <i>Coriander Seeds : A Spice of Flavor and Wellness {" "}</i>
                  </b>{" "}
                  derived from plant Coriander sativum, cherished for their
                  warm, citrusy flavor and aroma, are a staple ingredient in
                  kitchens and traditional remedies around the globe. Beyond
                  their culinary uses, coriander seeds are prized for their
                  health benefits and play a vital role in herbal and medicinal
                  formulations, offering digestive support and enhancing overall
                  well-being.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  At Amrit Organics, we are dedicated to providing the
                  finest-quality coriander seeds, grown organically and
                  processed with utmost care to preserve their natural flavor,
                  aroma, and nutritional value. Our coriander seeds meet the
                  highest international standards, making them the ideal choice
                  for culinary and medicinal applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Why section */}

        <div className="w-full mb-8 px-6 py-3">
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
                Why Choose Our Senna Powder ?
              </h3>
              <p
                className="text-gray-700 text-lg"
                style={{ lineHeight: "1.6"}}
              >
                <li>
                  <b>Pure & Natural :</b>Free from additives, preservatives, and
                  artificial colors, ensuring 100% natural goodness.
                </li>
                <li>
                  <b>Rich Aroma & Flavor :</b> Carefully processed to retain its
                  natural oils, providing an authentic taste and aroma to your
                  dishes.
                </li>

                <li>
                  <b>Global Standards Compliance : </b>Produced under stringent
                  quality controls to meet international food safety standards.
                </li>
                <li>
                  <b>Sustainability Focus : </b> Sourced from sustainable
                  farming practices to support the environment and local
                  farmers. satisfaction.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*partner with us */}

        <div className="w-full mb-8 px-6 py-3">
          {/* Card Container */}
          <div
            className="max-w-full flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "#51624F" }}
          >
            {/* Content on Right Side */}
            <div className="w-full scroll-reveal">
              <h3
                className="text-white text-2xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                Our Export Offering
              </h3>
              <p
                className="text-white text-lg"
                style={{ lineHeight: "1.6"}}
              >
                <li>
                  <b>Global Export Expertise : </b>Seamless export solutions to
                  cater to international markets.
                </li>
                <li>
                  <b>Quality Assurance : </b>Stringent quality checks to ensure
                  premium-grade seeds for every batch.
                </li>
                <li>
                  <b>Sustainability Focus : </b>Committed to eco-friendly and
                  organic farming practices.
                </li>
                <li>
                  <b>Timely Delivery : </b>Efficient logistics to ensure your
                  shipment arrives on schedule.
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
                    excellence. <Link to="/contact" style={{fontWeight: 900}}>Get in touch</Link> today to request a quote, product samples,
                    or learn more about our offerings.
                  </p>
                </div>
      </Stack>
    </div>
  );
}

export default CorianderPowder;
