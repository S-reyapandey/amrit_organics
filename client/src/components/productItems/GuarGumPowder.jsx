import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function GuarGumPowder() {
  const feature = [
    {
      id: 1,
      title: "100% Organic",
    },
    {
      id: 2,
      title: "Premium Quality",
    },
    {
      id: 3,
      title: "Sustainably Sourced",
    },
  ];

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
                style={{ fontFamily: "Signika", fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  textAlign: "center", }}
              >
                Guar Gum Powder
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
                <Typography sx={{ color: "#fff", fontSize: "clamp(0.6rem, 2.5vw, 1rem)" }}>Guar Gum Powder</Typography>
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
                src="/productsImages/guarGumPowder.png"
                alt="Right side content"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700">
                  <b>
                    <i>Guar Gum : A Versatile Natural Thickening Agent</i>
                  </b>{" "}
                  is a natural, plant-based ingredient derived from the seeds of
                  the Guar plant (Cyamopsis tetragonoloba). Known for its
                  exceptional thickening, stabilizing, and emulsifying
                  properties, guar gum is widely utilized across multiple
                  industries, including food, cosmetics, and manufacturing.
                </p>

                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700 mt-4">
                  This versatile polysaccharide is made up of high levels of
                  galactose and mannose, which contribute to its unique ability
                  to bind, thicken, and stabilize various products. Guar gum is
                  particularly valued for its cost-effectiveness, offering an
                  affordable alternative to other thickeners and stabilizers,
                  while maintaining superior performance.
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
                Why Choose Our Guar Gum Powder ?
              </h3>
              <p
                className="text-gray-600"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
              >
                <li>
                  <b>Effective Thickening & Stabilizing :</b> Acts as a powerful
                  thickener and stabilizer in food, cosmetics, and industrial
                  applications.
                </li>
                <li>
                  <b>Cost-Effective :</b> Provides a more affordable solution
                  compared to other common thickeners, making it a popular
                  choice for manufacturers.
                </li>
                <li>
                  <b>Natural & Plant-Based :</b>
                  Sourced from the guar plant, guar gum is a sustainable,
                  eco-friendly ingredient.
                </li>
                <li>
                  <b>Versatile Uses :</b>Functions as a binder, plasticizer, and
                  emulsifier, offering a wide range of applications in food,
                  personal care, and industrial products.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*Features */}

        <div className="container mx-auto px-6 mb-12">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {feature.map((fea, idx) => (
              <Card
                key={idx}
                sx={{
                  bgcolor: "#C3B59C",
                  borderRadius: "8px",
                  color: "#000",
                  height: "100%",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "20px", sm: "25px", md: "28px" },
                    "&:last-child": {
                      paddingBottom: { xs: "20px", sm: "25px", md: "28px" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.7,
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h2"
                      component="div"
                      gutterBottom
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" },
                        marginBottom: 1.4,
                        fontWeight: 530,
                        fontFamily: "Signika",
                        color: "#000",
                      }}
                    >
                      {fea.title}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/*Nutritional Value */}

        <div className="container mx-auto p-10 mb-12">
          <h2
            style={{
              fontFamily: "Signika",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
            className="mb-3"
          >
            Looking for a trusted supplier of high-quality Guar Gum Powder?
          </h2>
          <p>At Amrit Organics, we are dedicated to meeting your needs with excellence. Get in touch today for product samples, pricing, or to discuss your
            specific requirements.
          </p>
        </div>
      </Stack>
    </div>
  );
}

export default GuarGumPowder;
