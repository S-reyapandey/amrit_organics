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

function AshwagandhaRoot() {
  const feature = [
    {
      id: 1,
      title: "100% Organic",
    },
    {
      id: 2,
      title: "Rich in Active Compounds",
    },
    {
      id: 3,
      title: "Carefully Tested",
    },
    {
      id: 4,
      title: "Tested for Quality",
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
                Ashwagandha Root
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
                <Typography sx={{ color: "#fff" }}>Ashwagandha Root</Typography>
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
               src="/productsImages/ashwagandhaRoot.png"
               alt="Right side content"
               className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
             />
           </div>

           {/* Content Section */}
           <div className="w-full md:w-1/2 space-y-6">
             <div className="prose prose-gray max-w-none">
               <p className="font-['Manrope'] text-base leading-relaxed text-gray-700">
                 <b>
                   <i>Ashwagandha : The Ancient Herb for Modern Wellness </i>
                 </b>
                 , often referred to as Indian Ginseng or Winter Cherry, is one of the most revered herbs in Ayurveda, the ancient Indian system of medicine. Known for its adaptogenic properties, Ashwagandha has been used for over 3,000 years to promote overall wellness, enhance physical strength, and support mental clarity.
               </p>

               <p className="font-['Manrope'] text-base leading-relaxed text-gray-700 mt-4">
               The name "Ashwagandha" translates to "smell of the horse," symbolizing its powerful vitality-boosting qualities and the energy it imparts to the body. This herb is known for its ability to help the body adapt to stress, improve endurance, and enhance overall vitality, making it a staple in natural health and wellness routines.
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
                Why Choose Our Organic Ashwagandha Root ?
              </h3>
              <p
                className="text-gray-600"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
              >
                <li>
                  <b>Premium Quality :</b> Sourced directly from trusted, organic farmers to ensure the highest quality and potency.
                </li>
                <li>
                  <b>Adaptogenic Power :</b> Known for reducing stress and anxiety while supporting physical and mental resilience.
                </li>
                
                <li>
                  <b>Natural Energy & Vitality :</b>Boosts energy levels and improves overall strength and stamina.
                </li>
                <li>
                  <b>Supports Mental Clarity :</b>Enhances focus, memory, and cognitive function, promoting mental sharpness.
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
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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

        {/*Packaging */}

        <div className="w-full mb-8 px-6">
          {/* Card Container */}
          <div
            className="max-w-full flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "#4BAF47" }}
          >
            {/* Content on Right Side */}
            <div className="w-full sm:w-full">
              <h3
                className="text-white text-2xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                Packaging and Availability
              </h3>
              <p
                className="text-white"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
              >
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

        <div className="w-full mb-8 px-6">
          {/* Card Container */}
          <div
            className="max-w-full flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "#C5CE38" }}
          >
            {/* Content on Right Side */}
            <div className="w-full sm:w-full">
              <h3
                className="text-white text-2xl font-semibold mb-2"
                style={{ fontFamily: "Signika" }}
              >
                Why Partner with Us ?
              </h3>
              <p
                className="text-white"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
              >
                <li>Expertise in Global Exports</li>
                <li>Uncompromising Quality Standards</li>
                <li>Sustainability and Ethical Sourcing</li>
                <li>Reliable Logistics and Timely Delivery</li>
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-10 mb-12">
          <p>
         <Link to={"/contact"}><b>Contact us </b></Link> today for samples, pricing, or to discuss your specific requirements
          </p>
        </div>
      </Stack>
    </div>
  );
}

export default AshwagandhaRoot;