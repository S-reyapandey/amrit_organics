import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Benefit from "../components/Benfit";
import LazyImage from "../components/Loading/LazyImage";

function PsylliumBenefit() {
  return (
    <div className="md:px-6 mb-20 sm:px-0 lg:px-6">
      <Stack spacing={6}>
        {/*Header Section */}
        <div className="relative mb-8">
          {/*Image Container */}
          <div className="relative">
            <LazyImage
              src="/productProfile.png"
              alt="headerImage"
              className="w-full h-[55vh] sm:h-[70vh] lg:h-[85vh] object-cover "
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
                Psyllium Benefits
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
                <Typography sx={{ color: "#fff", fontSize: "clamp(0.6rem, 2.5vw, 1rem)" }}>Psyllium Benefits</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        <Benefit/>

      </Stack>
    </div>
  )
}

export default PsylliumBenefit
