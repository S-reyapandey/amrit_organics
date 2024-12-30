import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { FaRegMap } from "react-icons/fa";
import { Agriculture, LocalFlorist, VerifiedUser } from "@mui/icons-material";

function Feature() {
  const features = [
    {
      title: "Professional Farmers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaRegMap />,
    },
    {
      title: "Fresh Vegetables",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <LocalFlorist />,
    },
    {
      title: "Agriculture Products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <Agriculture />,
    },
    {
      title: "100% Guaranteed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <VerifiedUser />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: { xs: "15px", sm: "25px", md: "35px" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, minmax(0, 1fr))",
          },
          gap: { xs: "20px", sm: "25px", md: "30px" },
          width: "100%",
        }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            sx={{
              bgcolor: "#73796C",
              borderRadius: "8px",
              color: "white",
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
                {/* Icon aligned with the title */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#EDDD5E",
                    color: "#000",
                    fontSize: "1.1rem",
                    marginBottom: "9px",
                  }}
                >
                  {feature.icon}
                </Box>
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
                  {feature.title}
                </Typography>
              </Box>
              <Divider
                sx={{
                  width: "100%",
                  marginBottom: 2,
                  bgcolor: "#4E574A",
                  height: "0.06rem",
                  color: "#EEF2EC",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.830rem",
                    sm: "0.840rem",
                    md: "0.880rem",
                    lg: "0.895rem",
                  },
                  fontFamily: "Roboto",
                  lineHeight: "1.6",
                }}
              >
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Feature;
