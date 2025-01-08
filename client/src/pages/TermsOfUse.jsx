import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function TermsOfUse() {
  return (
    <div className="md:px-6 mb-20 sm:px-0 lg:px-6">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45">
              <h1
                className="text-white text-6xl font-bold slide-in mb-4"
                style={{
                  fontFamily: "Signika",
                  fontSize: "clamp(2.2rem, 6vw, 4rem)",
                  textAlign: "center",
                }}
              >
                Terms & Conditions
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
                <Typography
                  sx={{ color: "#fff", fontSize: "clamp(0.6rem, 2.5vw, 1rem)" }}
                >
                  Terms & Conditions
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>

        {/*Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="justify-center align-middle"
            style={{
              backgroundColor: "#fff",
              padding: "36px",
              borderRadius: "8px",
              maxWidth: "90%",
              lineHeight: "1.6",
              marginBottom: "1rem",
            }}
          >
            <p style={{ fontFamily: "Signika", marginBottom: "12px" }}>
              By using our website, you agree to the following terms:
            </p>
            <h3
              className="text-lg mb-1"
              style={{
                fontFamily: "Signika",

                textAlign: "left",
                color: "#000",
              }}
            >
              Usage :
            </h3>
            <p style={{ fontFamily: "Signika", marginBottom: "12px" }}>
              Content on this website is for informational purposes only. Users
              must not engage in activities that harm the website’s integrity.
            </p>
            <h3
              className="text-lg mb-1"
              style={{
                fontFamily: "Signika",

                textAlign: "left",
                color: "#000",
              }}
            >
              Liability :
            </h3>
            <p style={{ fontFamily: "Signika", marginBottom: "12px" }}>
              Amrit Organics is not liable for inaccuracies or third-party
              content linked from our site.
            </p>
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default TermsOfUse;
