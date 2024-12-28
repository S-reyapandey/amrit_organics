import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function MoringaPowder() {
  return (
    <div className="px-4 mb-20">
      <Stack spacing={6}>
        {/*Header Section */}
        <div className="relative mb-8">
          {/*Image Container */}
          <div className="relative">
            <img
              src="/productProfile.png"
              alt="headerImage"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
              <h1
                className="text-white text-6xl font-bold slide-in mb-4"
                style={{ fontFamily: "Signika" }}
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
                <Typography sx={{ color: "#fff" }}>Moringa Powder</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/*description */}

        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="/productsImages/moringaPowder.png"
                alt="Right side content"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700">
                  <b>
                    <i>Moringa : The Superfood for Health and Wellness </i>
                  </b>
                  , also known as the "Drumstick Tree" or the "Tree of Life," is
                  a remarkable plant celebrated for its exceptional nutritional
                  profile and health benefits. Revered for centuries, Moringa is
                  often considered one of the most nutritious plants on earth,
                  with every part of the tree—from its leaves and pods to its
                  seeds—packed with essential vitamins, minerals, and
                  antioxidants.
                </p>

                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700 mt-4">
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

        {/* Buy button */}

        <div className="flex justify-center mt-8">
          <button className="btn-grad3">Buy Now</button>
        </div>

        {/*Why section */}

        <div className="w-full mb-8 px-6">
          {/* Card Container */}
          <div
            className="max-w-full flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "#DBD2" }}
          >
            {/* Content on Right Side */}
            <div className="w-full sm:w-full">
              <h3
                className="text-yellow-400 text-2xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                Why Choose Our Organic Moringa Powder ?
              </h3>
              <p
                className="text-gray-600"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
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

        <div className="w-full mb-8 px-6">
          {/* Card Container */}
          <div
            className="max-w-full flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "#4BAF47" }}
          >
            {/* Content on Right Side */}
            <div className="w-full sm:w-full">
              <h3
                className="text-white text-2xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                Packaging and Availability
              </h3>
              <p
                className="text-white"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
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

        {/*Get in touch */}
        <div className="container mx-auto p-10 mb-12">
          <p>
            <Link to={"/contact"}>
              <b>Get in touch </b>
            </Link>{" "}
            today for samples, pricing, or to discuss your specific requirements
          </p>
        </div>
      </Stack>
    </div>
  );
}

export default MoringaPowder;
