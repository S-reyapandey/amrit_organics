import React from "react";
import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function PsylliumSeed() {
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
                style={{
                  fontFamily: "Signika",
                  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  textAlign: "center",
                }}
              >
                Psyllium Seed
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
                  Psyllium Seed
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
                src="/productsImages/psylliumSeed.png"
                alt="Right side content"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="prose prose-gray max-w-none">
                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700">
                  Psyllium seeds are small, brown seeds derived from the
                  Plantago ovata plant. They contain high levels of soluble
                  fiber (10-30%) and swell significantly when mixed with water
                  to form a gel-like substance. They are the premium natural
                  supplements harvested from meticulously maintained tropical
                  farms across India.
                </p>

                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700 mt-4">
                  Psyllium seeds is an agri-farm product of dried ripe seeds of
                  plantago ovata forks (farm. Plantaginancae) and our seeds has
                  been undergo through cleaning and processing to remove all
                  impurities, including dust, waste materials, stones, and iron
                  particles, ensuring the highest quality product.
                </p>

                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700 mt-4">
                  These exceptional seeds contain 40% Linoleic Acid (LA), an
                  essential polyunsaturated fatty acid vital for human health.
                  This omega-6 fatty acid plays a crucial role in maintaining
                  heart health, supporting cellular function, and promoting
                  overall wellness. Our sustainably sourced Psyllium seeds offer
                  a natural solution for digestive health while delivering
                  essential nutrients for your daily wellness routine. Each
                  batch is carefully tested to meet strict quality standards,
                  providing you with a pure, potent, and reliable supplement for
                  your health needs.
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
              <i>Botanical Names of Psyllium Seeds :</i>
            </b>
          </h2>
          <ul className="space-y-2 ml-4">
            {["Plantago Ovata", "Plantago Ispaghula"].map((name, index) => (
              <li
                key={index}
                className="text-md text-slate-700 hover:text-emerald-700 transition-colors duration-300 before:content-['•'] before:mr-3 before:text-emerald-600"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/*Health benefits */}

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
                Why Choose Psyllium Seeds ?
              </h3>
              <p
                className="text-gray-600"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
              >
                <li>Promotes digestive regularity</li>
                <li>Helps lower cholestrol</li>
                <li>Supports blood sugar control</li>
                <li>Aids weight management</li>
                <li>Provides prebiotic effects</li>
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

        {/*Contacting */}
        <div className="container mx-auto p-10 mb-12">
          <h2
            style={{
              fontFamily: "Signika",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
            className="mb-3"
          >
            Looking for a trusted supplier of high-quality psyllium seeds?
          </h2>
          <p>
            At Amrit Organics, we are dedicated to meeting your needs with
            excellence. Get in touch today to request a quote, product samples,
            or learn more about our offerings.
          </p>
        </div>
      </Stack>
    </div>
  );
}

export default PsylliumSeed;
