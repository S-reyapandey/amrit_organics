import { Stack } from "@mui/material";
import React from "react";
import Feature from "../components/Feature";
import Introduction from "../components/Introduction";
import OurProducts from "../components/OurProducts";
import MapComponent from "../components/MapComponent";
import Gallery from "../components/Gallery";
import CertificateSec from "../components/CertificateSec";
import BlogSection from "../components/BlogSection";
import HeroSection from "../components/Hero";

function Home() {
  return (
    <div>
      <div className="relative">
        <HeroSection />
        {/* Make Feature overlap Hero */}
        <div className="relative -mt-[7rem] z-10 mb-10">
          <Feature />
        </div>
      </div>
      <Stack spacing={6}>
        <Introduction />
        <OurProducts />
        <CertificateSec />
        <Gallery />
        <BlogSection />
        <MapComponent />
      </Stack>
    </div>
  );
}

export default Home;
