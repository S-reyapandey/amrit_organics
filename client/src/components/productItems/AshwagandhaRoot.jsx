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

function AshwagandhaRoot() {
  const feature = [
    {
      id: 1,
      title: "100% Organic",
      description: "Free from chemicals and pesticides, ensuring purity.",
    },
    {
      id: 2,
      title: "Rich in Active Compounds",
      description: "High levels of withanolides to maximize health benefits.",
    },
    {
      id: 3,
      title: "Carefully Tested",
      description:
        "Retains full potency through meticulous handling and processing.",
    },
    {
      id: 4,
      title: "Tested for Quality",
      description:
        "Every batch undergoes stringent testing for purity, safety, and efficacy.",
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
              src="/productsImages/ashwagandhaRoot.png"
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
                Ashwagandha Root
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
                  Ashwagandha Root
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
                    <i>Ashwagandha : The Ancient Herb for Modern Wellness </i>
                  </b>
                  , often referred to as Indian Ginseng or Winter Cherry, is one
                  of the most revered herbs in Ayurveda, the ancient Indian
                  system of medicine. Known for its adaptogenic properties,
                  Ashwagandha has been used for over 3,000 years to promote
                  overall wellness, enhance physical strength, and support
                  mental clarity.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  The name "Ashwagandha" translates to "smell of the horse,"
                  symbolizing its powerful vitality-boosting qualities and the
                  energy it imparts to the body. This herb is known for its
                  ability to help the body adapt to stress, improve endurance,
                  and enhance overall vitality, making it a staple in natural
                  health and wellness routines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Why section */}

        <div className="w-full mb-8 px-6">
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
                Why Choose Our Organic Ashwagandha Root ?
              </h3>
              <p
                className="text-gray-700 text-lg"
                style={{ lineHeight: "1.6" }}
              >
                <li>
                  <b>Premium Quality :</b> Sourced directly from trusted,
                  organic farmers to ensure the highest quality and potency.
                </li>
                <li>
                  <b>Adaptogenic Power :</b> Known for reducing stress and
                  anxiety while supporting physical and mental resilience.
                </li>

                <li>
                  <b>Natural Energy & Vitality :</b>Boosts energy levels and
                  improves overall strength and stamina.
                </li>
                <li>
                  <b>Supports Mental Clarity :</b>Enhances focus, memory, and
                  cognitive function, promoting mental sharpness.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*Features */}

        <div className="container mx-auto px-6 mb-12 scroll-reveal">
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

        {/*Packaging */}

        <div className="w-full mb-8 px-6">
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
                  <b>Formats :</b> Available as powder, capsules, or extracts.
                </li>
                <li>
                  <b>Packaging Options :</b> Small consumer packs (100g, 500g)
                  and bulk options for businesses.
                </li>
                <li>
                  <b>Shelf Life : </b>
                  Long-lasting freshness with up to 24 months of shelf life when
                  stored properly.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*partner with us */}

        <div className="w-full px-14 scroll-reveal-right">
          <h3
            className="text-green-500 text-3xl py-4 font-semibold mb-2"
            style={{ fontFamily: "Signika" }}
          >
            Why Partner with Us ?
          </h3>
          <p className="text-gray-700 text-lg" style={{ lineHeight: "1.6" }}>
            <li>Expertise in Global Exports</li>
            <li>Uncompromising Quality Standards</li>
            <li>Sustainability and Ethical Sourcing</li>
            <li>Reliable Logistics and Timely Delivery</li>
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

export default AshwagandhaRoot;
