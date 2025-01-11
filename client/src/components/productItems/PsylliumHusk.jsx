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
import Varities from "../Varities";
import Names from "../Names";

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
            <img
              src="/productsImages/psylliumHusk.png"
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
                Psyllium Husk
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
                  Psyllium Husk
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/*description */}

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Content Section */}
            <div className="w-full space-y-6 px-10 py-3 scroll-reveal-left">
              <div className="prose prose-gray max-w-none">
                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900">
                  <b className="text-2xl text-[#5B8C51]">
                    <i>
                      Psyllium husk: A Natural Fiber for Health and Wellness ,
                    </i>
                  </b>{" "}
                  derived from the seeds of the Plantago Ovata plant, is a
                  natural dietary fiber renowned for its exceptional health
                  benefits. With over 80% fiber content—far surpassing wheat
                  bran's 10%—psyllium husk is a powerhouse for digestive health,
                  weight management, and heart wellness.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  Its primary fiber, hemicellulose, promotes regular bowel
                  movements by enhancing stool hydration, making it a natural
                  remedy for digestive irregularities. Additionally, it supports
                  healthy cholesterol levels, reducing the risk of heart
                  disease, and helps control appetite, making it a valuable ally
                  for weight management.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
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

        {/*Name section */}

        <Names/>

        {/*Available Sizes */}
        <Varities/>

        {/*Why section */}

        <div className="w-full mb-8 px-6 py-9">
          {/* Card Container */}
          <div
            className="max-w-full flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "#F7C35F" }}
          >
            {/* Content on Right Side */}
            <div className="w-full sm:w-2/3 scroll-reveal">
              <h3
                className="text-gray-800 text-2xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                Why Choose Psyllium Husk ?
              </h3>
              <p
                className="text-gray-700 text-lg"
                style={{ lineHeight: "1.6" }}
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

        <div className="container mx-auto px-4 mb-12 scroll-reveal">
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

export default PsylliumHusk;
