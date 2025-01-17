import { Breadcrumbs, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "../components/Loading/LazyImage";

function PrivacyPolicy() {
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
              className="w-full h-[55vh] sm:h-[70vh] lg:h-[85vh] object-cover"
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
                Privacy Policy
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
                  Privacy Policy
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
              At Amrit Organics, we are committed to safeguarding your privacy.
              This policy outlines how we collect, use, and protect your
              personal information.
            </p>
            <h3
              className="text-lg mb-1"
              style={{
                fontFamily: "Signika",

                textAlign: "left",
                color: "#000",
              }}
            >
              Information We Collect :
            </h3>
            <p style={{ fontFamily: "Signika", marginBottom: "12px" }}>
              Personal data such as name, email address, and phone number when
              you fill out forms or contact us. Usage data such as cookies and
              IP addresses for website analytics.
            </p>
            <h3
              className="text-lg mb-1"
              style={{
                fontFamily: "Signika",

                textAlign: "left",
                color: "#000",
              }}
            >
              How We Use Your Information :
            </h3>
            <p style={{ fontFamily: "Signika", marginBottom: "12px" }}>
              To respond to inquiries or provide requested services. To improve
              our website and customer experience.
            </p>

            <h3
              className="text-lg mb-1"
              style={{
                fontFamily: "Signika",

                textAlign: "left",
                color: "#000",
              }}
            >
              Data Protection:
            </h3>
            <p style={{ fontFamily: "Signika", marginBottom: "12px" }}>
              We use secure servers and encryption to protect your information.
              We do not share your data with third parties without your consent.
            </p>
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default PrivacyPolicy;
