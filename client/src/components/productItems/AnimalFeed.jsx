import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function AnimalFeed() {
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
                style={{
                  fontFamily: "Signika",
                  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  textAlign: "center",
                }}
              >
                Animal Feed
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
                  Animal Feed
                </Typography>
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
                src="/productsImages/animalFeed.png"
                alt="Right side content"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700">
                  <b>
                    <i>
                      Psyllium Animal Feed: A Natural Fiber Solution for
                      Livestock Health{" "}
                    </i>
                  </b>{" "}
                  is the by-product of Psyllium Husk from Psyllium Seeds while
                  processing it is also known as Kha Kha Powder.
                </p>

                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700 mt-4">
                  It is a rich, fibrous powder commonly used as a key ingredient
                  in animal feed, particularly for dairy cattle. Known for its
                  excellent digestive benefits, psyllium Kha Kha powder promotes
                  healthy digestion and nutrient absorption in livestock.
                  Produced under strict hygiene standards, this organic feed
                  ingredient is an ideal choice for improving the overall
                  health, productivity, and milk yield of cattle, making it a
                  valuable addition to animal nutrition programs.
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
                Why Choose Psyllium Kha Kha Powder for Animal Feed ?
              </h3>
              <p
                className="text-gray-600"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
              >
                <li>
                  <b>Rich in Fiber : </b> It is a natural source of fiber,
                  supporting healthy digestion and preventing digestive
                  disorders in livestock.
                </li>
                <li>
                  <b>Boosts Milk Production :</b> Improve milk yield by
                  enhancing gut health and nutrient absorption.
                </li>
                <li>
                  <b>Organic & Hygienic :</b>
                  Made from 100% organic material, our product is produced in
                  hygienic conditions, ensuring the best quality for your
                  cattle.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*Contacting us */}

        <div className="container mx-auto px-10 mb-12">
          <h2
            style={{
              fontFamily: "Signika",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
            className="mb-3"
          >
            Looking for a dependable supplier of Psyllium Animal Feed?
          </h2>
          <p>
            At Amrit Organics, we are dedicated to delivering quality products
            that support animal health and meet your business needs. <br />
            Contact us today to request samples, get a quote, or discuss your
            specific requirements.
          </p>
        </div>
      </Stack>
    </div>
  );
}

export default AnimalFeed;
