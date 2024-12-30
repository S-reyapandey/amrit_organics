import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function PsylliumHusk() {
  const feature = [
    {
      id: 1,
      title: "100% Natural and organic",
      description: "Free from pesticides, chemicals, and artificial additives.",
    },
    {
      id: 2,
      title: "High Purity and Yield",
      description:
        "Carefully cleaned and processed for superior seed quality and optimal husk extraction.",
    },
    {
      id: 3,
      title: "International Standards Compliance",
      description:
        "Certified by USDA Organic, FSSAI, ISO and other global regulatory bodies.",
    },
    {
      id: 4,
      title: "Customizable Packaging",
      description:
        "Available in various sizes and labelling options to suit your market needs.",
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
                style={{ fontFamily: "Signika" }}
              >
                Psyllium Husk
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
                <Typography sx={{ color: "#fff" }}>Psyllium Husk</Typography>
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
                src="/productsImages/psylliumHusk.png"
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
                      Psyllium husk: A Natural Fiber for Health and Wellness
                    </i>
                  </b>
                  , derived from the seeds of the Plantago Ovata plant, is a
                  natural dietary fiber renowned for its exceptional health
                  benefits. With over 80% fiber content—far surpassing wheat
                  bran's 10%—psyllium husk is a powerhouse for digestive health,
                  weight management, and heart wellness.
                </p>

                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700 mt-4">
                  Its primary fiber, hemicellulose, promotes regular bowel
                  movements by enhancing stool hydration, making it a natural
                  remedy for digestive irregularities. Additionally, it supports
                  healthy cholesterol levels, reducing the risk of heart
                  disease, and helps control appetite, making it a valuable ally
                  for weight management.
                </p>

                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700 mt-4">
                  Widely used in the food, pharmaceutical, and nutraceutical
                  industries, psyllium husk is a versatile ingredient
                  incorporated into baked goods, dietary supplements, and
                  natural remedies. Embrace the transformative benefits of
                  psyllium husk and make it a part of your journey to better
                  health.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buy button */}

        <div className="flex justify-center mt-8">
          <button className="btn-grad3">Buy Now</button>
        </div>

        {/*Name section */}

        <div className="container mx-auto px-10 mb-12">
          <h2
            style={{ fontFamily: "Signika", fontSize: "1.3rem" }}
            className="mb-3"
          >
            <b>
              <i>Common Names of Psyllium Husk :</i>
            </b>
          </h2>
          <ul className="space-y-2 ml-4">
            {[
              "Flea",
              "Ispaghula",
              "Spogel",
              "Pantago Psyllium",
              "Isaphgol",
              "Isabgua",
            ].map((name, index) => (
              <li
                key={index}
                className="text-md text-slate-700 hover:text-emerald-700 transition-colors duration-300 before:content-['•'] before:mr-3 before:text-emerald-600"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/*Available Sizes */}
        <div className="container mx-auto px-16 mb-12">
          <h2
            style={{
              fontFamily: "Signika",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
            className="mb-3"
          >
            Avaiable variety :
          </h2>
          <p> 99% purity, 98% purity, 95% purity, 85% purity </p>
        </div>

        {/*Why section */}

        <div className="w-full mb-8 px-6">
          {/* Card Container */}
          <div
            className="max-w-full flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "#DBD2" }}
          >
            {/* Content on Right Side */}
            <div className="w-full sm:w-2/3">
              <h3
                className="text-yellow-400 text-2xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                Why Choose Psyllium Husk ?
              </h3>
              <p
                className="text-gray-600"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
              >
                <li>
                  <b>High Fiber Content : </b>Over 80% fiber, supporting
                  digestion and regularity.
                </li>
                <li>
                  <b>Digestive Health : </b>
                  Relieves constipation and promotes gut wellness.
                </li>
                <li>
                  <b>Heart Wellness : </b>
                  Lowers bad cholesterol and supports heart health.
                </li>
                <li>
                  <b>Weight Management :</b>Increases fullness, aiding in
                  appetite control.
                </li>
                <li>
                  <b>Blood Sugar Regulation : </b> Stabilizes sugar levels,
                  ideal for managing diabetes.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*Features */}

        <div className="container mx-auto px-4 mb-12">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "60px",
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
                  <Divider
                    sx={{
                      width: "100%",
                      marginBottom: 2,
                      bgcolor: "#4E574A",
                      height: "0.06rem",
                      color: "#EEF2EC",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "0.830rem",
                        sm: "0.840rem",
                        md: "0.880rem",
                        lg: "0.895rem",
                      },
                      fontFamily: "Roboto",
                      lineHeight: "1.6",
                    }}
                  >
                    {fea.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/*Contacting us */}

        <div className="container mx-auto p-10 mb-12">
          <h2
            style={{
              fontFamily: "Signika",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
            className="mb-3"
          >
            Looking for a trusted supplier of high-quality psyllium Husk?
          </h2>
          <p>
            Amrit Organics is here to meet your requirements with high-quality
            products and exceptional service.
            <br />
            Get in touch today to request samples, get a quote, or discuss your
            specific needs
          </p>
        </div>
      </Stack>
    </div>
  );
}

export default PsylliumHusk;
