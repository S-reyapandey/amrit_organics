import { Stack } from "@mui/material";
import React from "react";
import Coroussel from "../components/Coroussel";
import Feature from "../components/Feature";
import Introduction from "../components/Introduction";
import OurProducts from "../components/OurProducts";
import ExploreProject from "../components/ExploreProject";
import MapComponent from "../components/MapComponent";
import Gallery from "../components/Gallery";
import CertificateSec from "../components/CertificateSec";
import BlogSection from "../components/BlogSection";

function Home() {
  return (
    <div>
      <Stack spacing={6}>
        <Coroussel />
        <Feature />
        <Introduction />
        <OurProducts />
        <ExploreProject />
        <CertificateSec/>
        <Gallery/>
        <BlogSection/>
        <MapComponent />
      </Stack>
    </div>
  );
}

export default Home;
