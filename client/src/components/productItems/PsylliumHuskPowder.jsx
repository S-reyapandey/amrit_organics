import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Sizes from "../Sizes";
import LazyImage from "../Loading/LazyImage";

function PsylliumHuskPowder() {
  const feature = [
    {
      id: 1,
      title: "100% Natural and pure",
      description:
        "Sourced from premium-quality Plantago ovata seeds to ensure maximum purity and effectiveness.",
    },
    {
      id: 2,
      title: "Fine Grinding and High Fibre Content",
      description:
        "Finely processed to retain over 80% fiber, offering unmatched health benefits for digestion, heart health, and weight management.",
    },
    {
      id: 3,
      title: "Global Standards Compliance",
      description:
        "Manufactured in facilities adhering to the highest international quality and safety standards.",
    },
    {
      id: 4,
      title: "Customizable Packaging",
      description:
        "Available in tailored packaging options to meet diverse client and industry needs.",
    },
  ];

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
            <LazyImage
              src="/productsImages/psylliumHuskPowder.png"
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
                Psyllium Husk Powder
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
                  Psyllium Husk Powder
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/*description */}

        <div className="container mx-auto px-6 ">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Content Section */}
            <div className="w-full space-y-6 px-10 py-3 scroll-reveal-left">
              <div className="prose prose-gray max-w-none">
                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900">
                  <b className="text-2xl text-[#5B8C51]">
                    <i>Psyllium Husk Powder: A High-Quality Natural Fibre </i>
                  </b>{" "}
                  is a finely ground form of the husk derived from the seeds of
                  the Plantago ovata plant. Rich in dietary fiber, it is a
                  natural and versatile ingredient known for its ability to
                  support digestive health, heart wellness, and weight
                  management.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  Widely used in the food, nutraceutical, pharmaceutical, and
                  wellness industries, psyllium husk powder is valued for its
                  health benefits and adaptability in various applications.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  At Amrit Organics, we offer premium-quality psyllium husk
                  powder, meticulously processed to retain its natural
                  properties while adhering to the highest global standards of
                  purity and quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Available Sizes */}

        <Sizes />

        {/*Why section */}

        <div className="w-full mb-8 px-6 py-8">
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
                Why Choose Psyllium Husk Powder ?
              </h3>
              <p
                className="text-gray-700 text-lg"
                style={{ lineHeight: "1.6" }}
              >
                Psyllium husk powder is a natural, plant-based fiber with
                unmatched benefits:
                <li>
                  <b>Digestive Support :</b> Promotes healthy digestion and
                  regular bowel movements.
                </li>
                <li>
                  <b>Heart Health :</b> Helps lower cholesterol levels and
                  supports cardiovascular wellness.
                </li>
                <li>
                  <b>Weight Management :</b>
                  Encourages a feeling of fullness, aiding in appetite control.
                </li>
                <li>
                  <b>Blood Sugar Regulation :</b>Slows carbohydrate digestion,
                  stabilizing blood sugar levels.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*Features */}

        <div className="container mx-auto px-4 mb-12 scroll-reveal py-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(370px, 1fr))",
              gap: "60px",
            }}
          >
            {feature.map((fea, idx) => (
              <Card
                key={idx}
                sx={{
                  bgcolor: "#49A760",
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
                        fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.45rem" },
                        marginBottom: 1.4,
                        fontWeight: 530,
                        fontFamily: "Signika",
                        color: "#fff",
                      }}
                    >
                      {fea.title}
                    </Typography>
                  </Box>
                  <Divider
                    sx={{
                      width: "100%",
                      marginBottom: 2,
                      bgcolor: "#fff",
                      height: "0.1rem",
                      color: "#EEF2EC",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "1.130rem",
                        sm: "1.140rem",
                        md: "1.180rem",
                        lg: "1.195rem",
                      },
                      fontFamily: "Roboto",
                      lineHeight: "1.6",
                      color: "#fff",
                    }}
                  >
                    {fea.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/*Why partner with us ? */}

        <div className="w-full px-12 py-6 scroll-reveal-right">
          <h3
            className="text-green-500 text-3xl py-4 font-semibold mb-2"
            style={{ fontFamily: "Signika" }}
          >
            Why Partner with Us ?
          </h3>
          <p className="text-gray-700 text-lg" style={{ lineHeight: "1.6" }}>
            <li>
              <b>Experienced Exporter :</b> Trusted supplier to North America,
              Europe, Asia, and the Middle East.
            </li>
            <li>
              <b>Unmatched Quality :</b> Through quality checks to ensure
              purity, consistency, and safety
            </li>
            <li>
              <b>Sustainable Practices :</b> Eco-friendly sourcing and
              processing methods.
            </li>
            <li>
              <b>Reliable Logistics :</b> Efficient logistics to ensure your
              shipment arrives on schedule.
            </li>
          </p>
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

export default PsylliumHuskPowder;
