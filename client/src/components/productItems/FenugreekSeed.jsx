import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LazyImage from "../Loading/LazyImage";

function FenugreekSeed() {
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
    <div className="md:px-6 mb-20 sm:px-0 lg:px-6">
      <Stack spacing={6}>
        {/*Header Section */}
        <div className="relative mb-8">
          {/*Image Container */}
          <div className="relative">
            <LazyImage
              src="/productsImages/fenugreekSeed.png"
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
                Fenugreek Seed
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
                  Fenugreek Seed
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/*description */}

        <div className="container mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Content Section */}
            <div className="w-full px-10 py-3 scroll-reveal-left space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900">
                  <b className="text-2xl text-[#5B8C51]">
                    <i>Fenugreek Seeds : Nature's Golden Remedy </i>
                  </b>
                  are small, golden-brown seeds known for their distinctive
                  flavor and remarkable medicinal properties. Widely used in
                  cooking, traditional medicine, and wellness products,
                  fenugreek seeds are a staple in many cultures due to their
                  incredible nutritional profile and versatile health benefits.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  Packed with essential nutrients like fiber, iron, magnesium,
                  vitamin B6, and antioxidants, fenugreek seeds are known to
                  support digestion, balance blood sugar levels, and improve
                  lactation in breastfeeding mothers. Fenugreek is also used to
                  support heart health, improve skin conditions, and enhance
                  overall vitality, making it a valuable addition to your daily
                  health regimen.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  At Amrit Organics, we offer premium-quality, organically grown
                  fenugreek seeds, carefully sourced and processed to preserve
                  their natural benefits. Whether used in cooking, herbal teas,
                  or wellness products, our fenugreek seeds provide a simple and
                  effective way to enhance your health naturally. Experience the
                  power of fenugreek with Amrit Organics—your trusted source for
                  high-quality organic ingredients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Why section */}

        <div className="w-full mb-8 px-6 py-2">
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
                Why Choose Our Fenugreek Seeds ?
              </h3>
              <p
                className="text-gray-700 text-lg"
                style={{ lineHeight: "1.6" }}
              >
                <li>
                  <b>100% Organic :</b> Free from pesticides, chemicals, and
                  artificial additives.
                </li>
                <li>
                  <b>Rich Flavor & Aroma :</b> Naturally fresh and aromatic,
                  perfect for culinary use.
                </li>

                <li>
                  <b>Nutrient-Dense :</b>High in fiber, protein, and essential
                  nutrients.
                </li>
                <li>
                  <b>Sustainability Sourced :</b>Grown using eco-friendly
                  farming practices.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*Packaging */}

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
                Packaging and Availability
              </h3>
              <p className="text-white text-lg" style={{ lineHeight: "1.6" }}>
                <li>
                  <b>Consumer Packs :</b> 100g, 250g, and 500g sizes.
                </li>
                <li>
                  <b>Bulk Packaging :</b> Customizable options for businesses
                  and bulk buyers.
                </li>
                <li>
                  <b>Shelf Life : </b>
                  Up to 12–18 months when stored in a cool, dry place.
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
            style={{ backgroundColor: "#C5CE38" }}
          >
            {/* Content on Right Side */}
            <div className="w-full scroll-reveal">
              <h3
                className="text-white text-2xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                Our Export Offering
              </h3>
              <p className="text-white text-lg" style={{ lineHeight: "1.6" }}>
                <li>
                  <b>Products : </b>Whole fenugreek seeds and fenugreek powder.
                </li>
                <li>
                  <b>Quality Assurance : </b>Strict quality control measures to
                  ensure compliance with global standards such as USDA Organic,
                  FSSAI, and ISO certifications.
                </li>
                <li>
                  <b>Packaging Options : </b>Custom bulk packaging, from 10kg to
                  50kg sacks, or as per client needs.
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

export default FenugreekSeed;
