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
import LazyImage from "../Loading/LazyImage";

function SteviaPowder() {
  const feature = [
    {
      id: 1,
      title: "Global Reach",
      description: "Delivering Stevia Powder to clients worldwide.",
    },
    {
      id: 2,
      title: "Compliance & Certifications",
      description: "Adherence to international quality and safety standards.",
    },
    {
      id: 3,
      title: "Efficient Logistics",
      description:
        "Reliable and timely delivery with optimized supply chain management.",
    },
    {
      id: 4,
      title: "Sustainability Focus",
      description:
        "Partnering with eco-friendly farms to support environmental stewardship.",
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
              src="/productsImages/steviaPowder.png"
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
                Stevia Powder & Leaves
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
                  Stevia Powder
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
                  <b>
                    <i>
                      Stevia : The Natural Sweetener for a Healthier
                      World{" "}
                    </i>
                  </b>{" "}
                  derived from the leaves of the Stevia plant (Stevia
                  rebaudiana), is a natural, zero-calorie sweetener that
                  provides a healthier alternative to traditional sugar. With a
                  sweetness that is 200–300 times greater than sugar, Stevia
                  allows you to enjoy the taste of sweetness without the added
                  calories, making it a popular choice for health-conscious
                  individuals and industries looking to reduce sugar content in
                  food and beverages.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  At Amrit Organics, we offer premium-quality, organically
                  produced Stevia powder, ensuring that every batch is sourced
                  from the finest Stevia plants. Our Stevia powder is carefully
                  processed to retain its natural sweetness and nutritional
                  benefits, providing a perfect solution for sweetening food,
                  beverages, and health products while supporting a low-calorie
                  or sugar-free lifestyle.
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
                Why Choose Our Stevia ?
              </h3>
              <p
                className="text-gray-700 text-lg"
                style={{ lineHeight: "1.6" }}
              >
                <li>
                  <b>Natural & Zero Calories :</b> A healthy, all-natural
                  alternative to sugar with no added calories.
                </li>
                <li>
                  <b>Superior Sweetness :</b> 200–300 times sweeter than sugar,
                  requiring less to achieve the desired sweetness.
                </li>

                <li>
                  <b>Perfect for Health-Conscious Consumers : </b>Ideal for
                  those managing their calorie intake, blood sugar levels, or
                  looking for a natural sweetener.
                </li>
                <li>
                  <b>Versatile Use : </b> Perfect for food, beverages, and
                  health products, offering a great way to enhance flavor
                  without compromising on health.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*Features */}

        <div className="container mx-auto px-6 py-4 mb-12 scroll-reveal">
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

export default SteviaPowder;
