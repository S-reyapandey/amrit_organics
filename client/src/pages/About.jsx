import { Breadcrumbs, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="px-4 mb-20">
      <Stack spacing={6}>
        {/*Header Section */}
        <div className="relative mb-8">
          {/*Image Container */}
          <div className="relative">
            <img
              src="/other.png"
              alt="headerImage"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
              <h1
                className="text-white text-6xl font-bold slide-in mb-4"
                style={{ fontFamily: "Signika" }}
              >
                About Us
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
                <Typography sx={{ color: "#fff" }}>About Us</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/*About 1*/}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6">
              <p className="font-['Manrope'] text-sm leading-relaxed text-gray-700 max-w-prose">
                At Amrit Organics we specialize in premium organic agriculture
                products. With sustainability at the heart of our operations, we
                are committed to delivering products that are pure, ethically
                sourced, and globally certified.
                <br />
                With a vision to revolutionize organic farming, we have grown
                into a trusted manufacturer and supplier for customers across
                India and worldwide. Our products are not just about quality but
                also about fostering a healthier planet through sustainable
                farming practices.
                <br />
                We uphold the highest standards in every step of our process. By
                working closely with 20,000+ farmers, ensuring traceability, and
                adhering to strict quality controls, we bring you the best of
                nature—untouched and uncompromised.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src="/rightSide.png"
                alt="Right side content"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Mission Statement */}

        <div className="w-full mb-8">
          {/* Card Container */}
          <div className="max-w-full bg-white flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out">
            {/* Image on Left Side */}
            <div className="w-full sm:w-1/3 py-2">
              <img
                src="/mission.png"
                alt="our vision"
                className="w-2/3 h-1/3 pl-5 object-cover rounded-lg"
              />
            </div>

            {/* Content on Right Side */}
            <div className="w-full sm:w-2/3 py-2">
              <h3
                className="text-yellow-400 text-2xl font-semibold mb-2"
                style={{ fontFamily: "Courgette" }}
              >
                Our Mission
              </h3>
              <p
                className="text-gray-600"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
              >
                Our mission is to provide high-quality, organic products while
                promoting sustainability and ethical farming practices. We aim
                to bridge the gap between farmers and global markets, ensuring a
                healthier future for our planet and our customers.
              </p>
            </div>
          </div>
        </div>

        {/*Vision Statement */}

        <div className="w-full mb-8">
          {/* Card Container */}
          <div className="max-w-full flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md bg-white hover:shadow-2xl transition-all duration-300 ease-in-out">
            {/* Content on left Side */}
            <div className="w-full sm:w-3/4 py-2 sm:pr-8 pl-5">
              <h3
                className="text-yellow-400 text-2xl font-semibold mb-2"
                style={{ fontFamily: "Courgette" }}
              >
                Our Vision
              </h3>
              <p
                className="text-gray-600"
                style={{ lineHeight: "1.6", fontSize: "0.9rem" }}
              >
              We envision a world where organic agriculture is the standard, not the exception. Through innovation, collaboration, and commitment to quality, we strive to be a global leader in the organic industry
              </p>
            </div>

            {/* Image on right Side */}

            <div className="w-full sm:w-2/4 py-2 flex justify-center sm:justify-center">
              <img
                src="/vision.png"
                alt="our vision"
                className="w-1/3 h-1/3 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>


         {/* Our Core Values */}

         <div className="w-full mb-8">
         {/* Card Container */}
         <div className="max-w-full bg-white flex flex-col sm:flex-row items-center p-5 border border-gray-400 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out">
           {/* Image on Left Side */}
           <div className="w-full sm:w-1/3 py-2">
             <img
               src="/values.png"
               alt="our vision"
               className="w-2/3 h-1/3 pl-5 object-cover rounded-lg"
             />
           </div>

           {/* Content on Right Side */}
           <div className="w-full sm:w-2/3 py-2">
             <h3
               className="text-yellow-400 text-2xl font-semibold mb-4"
               style={{ fontFamily: "Courgette" }}
             >
               Our Core Values
             </h3>
             <ul className="space-y-2">
             <li className="flex items-start gap-3">
               <span className="text-yellow-400 text-2xl font-bold">•</span>
               <div>
                 <h4 className="text-lg font-semibold text-gray-800">
                   Quality First
                 </h4>
                 <p className="text-gray-600 text-sm">
                   We ensure that every product meets the highest standards.
                 </p>
               </div>
             </li>
             <li className="flex items-start gap-3">
               <span className="text-yellow-400 text-2xl font-bold">•</span>
               <div>
                 <h4 className="text-lg font-semibold text-gray-800">
                   Sustainability
                 </h4>
                 <p className="text-gray-600 text-sm">
                   Protecting the environment through eco-friendly practices.
                 </p>
               </div>
             </li>
             <li className="flex items-start gap-3">
               <span className="text-yellow-400 text-2xl font-bold">•</span>
               <div>
                 <h4 className="text-lg font-semibold text-gray-800">
                   Integrity
                 </h4>
                 <p className="text-gray-600 text-sm">
                   Honesty and transparency in everything we do.
                 </p>
               </div>
             </li>
             <li className="flex items-start gap-3">
               <span className="text-yellow-400 text-2xl font-bold">•</span>
               <div>
                 <h4 className="text-lg font-semibold text-gray-800">
                   Community Impact
                 </h4>
                 <p className="text-gray-600 text-sm">
                   Empowering farmers and local communities.
                 </p>
               </div>
             </li>
           </ul>
           </div>
         </div>
       </div>
      </Stack>
    </div>
  );
}

export default About;
