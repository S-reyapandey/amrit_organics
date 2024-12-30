import { Box, Breadcrumbs, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SteviaPowder() {
  const feature = [
    {
      id: 1,
      title: "Global Reach",
    },
    {
      id: 2,
      title: "Compliance & Certifications",
    },
    {
      id: 3,
      title: "Efficient Logistics",
    },
    {
      id: 4,
      title: "Sustainability Focus"
    }
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
                Stevia Powder
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
                <Typography sx={{ color: "#fff" }}>Stevia Powder</Typography>
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
                src="/productsImages/steviaPowder.png"
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
                      Stevia Powder : The Natural Sweetener for a Healthier
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

                <p className="font-['Manrope'] text-base leading-relaxed text-gray-700 mt-4">
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
                Why Choose Our Stevia Powder ?
              </h3>
              <p
                className="text-gray-600"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
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

        <div className="container mx-auto px-6 mb-12">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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

export default SteviaPowder;
