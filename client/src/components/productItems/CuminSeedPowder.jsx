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
import Varieties from "../Varieties";
import NutritionalValues from "../NutrionalValues";
import LazyImage from "../Loading/LazyImage";

function CuminSeedPowder() {
  const feature = [
    {
      id: 1,
      title: "100% Organic",
      description: "Grown naturally without harmful chemicals or pesticides."
    },
    {
      id: 2,
      title: "Premium Quality",
      description: "Hand-selected seeds processed to perfection."
    },
    {
      id: 3,
      title: "Globally Trusted",
      description: "Used by chefs and home cooks worldwide."
    },
  ];

  useEffect(() => {
        const observerOptions = {
          threshold: 0.2 
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, observerOptions);
    
        document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
          .forEach(element => observer.observe(element));
    
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
              src="/productsImages/cuminSeedPowder.png"
              alt="headerImage"
              className="w-full object-cover"
              style={{
                height: "500px",
                objectFit: "cover"
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
                Cumin Seeds & Powder
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
                  Cumin Seed 
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
                    <i>Cumin: The Spice of Flavor and Wellness {" "}</i>
                  </b>{" "}
                  also known as Jeera, is a beloved spice that has earned its
                  place in kitchens worldwide. Renowned for its warm, earthy
                  flavor and aromatic richness, cumin adds a distinct depth to a
                  variety of dishes, from curries and stews to rice and spice
                  mixes. Its versatility goes beyond cooking, as it is often
                  used in traditional medicine for its health benefits,
                  particularly for digestive health and boosting immunity.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  At Amrit Organics, we provide premium, 100% organic cumin that
                  is grown with care in natural, sustainable conditions. Our
                  cumin seeds are hand-picked at the peak of their maturity to
                  ensure maximum flavor, aroma, and nutritional value. We
                  prioritize quality, ensuring that every batch of cumin is free
                  from pesticides and harmful chemicals, delivering a product
                  that is as pure and natural as nature intended.
                </p>

                <p className="font-['Manrope'] text-lg leading-relaxed text-gray-900 mt-4">
                  Whether used in savory dishes, aromatic spice blends, or
                  wellness remedies, our organic cumin is the perfect way to
                  elevate your culinary creations and support your health.
                  Experience the true essence of cumin with Amrit Organics,
                  where quality and sustainability come together in every seed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Varities*/}
        <Varieties/>
        

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
                Why Choose Our Organic Cumin ?
              </h3>
              <p
                className="text-gray-700 text-lg"
                style={{ lineHeight: "1.6"}}
              >
                <li>
                  <b>100% Organic :</b> Grown without synthetic pesticides or
                  fertilizers, ensuring pure and natural cumin.
                </li>
                <li>
                  <b>Sustainable Farming :</b> Cultivated using eco-friendly,
                  sustainable farming practices that protect the environment.
                </li>
                <li>
                  <b>Rich Flavor & Aroma :</b>
                  Adds a warm, earthy taste to your dishes, enhancing their
                  depth and complexity.
                </li>
                <li>
                  <b>Health Benefits :</b>Packed with antioxidants, cumin aids
                  digestion, boosts immunity, and supports overall well-being.
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
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
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

        <NutritionalValues/>

        {/*Packaging */}

        <div className="w-full mb-8 px-6 py-4">
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
              <p
                className="text-white text-lg"
                style={{ lineHeight: "1.6"}}
              >
                <li>
                  <b>Packaging Options :</b> Available in variety of sizes –
                  100g, 500g, 1 kg, 10kg, 25kg etc.
                </li>
                <li>
                  <b>Custom Packaging :</b> Tailored solutions for bulk orders
                  or exports.
                </li>
                <li>
                  <b>Shelf Life : </b>
                  Sealed for freshness, with a long-lasting shelf life of up 24
                  month.
                </li>
              </p>
            </div>
          </div>
        </div>

        {/*Nutritional Value */}

        <div className="container mx-auto p-10 mb-12 scroll-reveal-left">
          <h2
            style={{
              fontFamily: "Signika",
              fontWeight: "600",
            }}
            className="mb-3 text-2xl"
          >
            Looking for a trusted supplier of high-quality Cumin Seeds Powder?
          </h2>
          <p className="text-lg">
            At Amrit Organics, we partner with trusted 20,000+ farmers who
            practice eco-friendly and sustainable agriculture. Each batch of
            cumin undergoes rigorous quality checks to ensure it meets our high
            standards of purity and authenticity.
            <br />
            <Link to="/contact" style={{fontWeight: 900}}>Get in touch</Link> today for product samples, pricing, or to discuss your
            specific requirements.
          </p>
        </div>
      </Stack>
    </div>
  );
}

export default CuminSeedPowder;
