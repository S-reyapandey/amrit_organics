import React from "react";
import projects from "../utils/projectData";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useInView } from "react-intersection-observer";


function ProjectSec() {
  return (
    <div className="container mx-auto px-16 py-10">
      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {projects.map((project, idx) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
            rootMargin: "50px",
          });
          return (
            <Box
              key={idx}
              ref={ref}
              sx={{
                transform: inView
                  ? "translateY(0) scale(1)"
                  : "translateY(50px) scale(0.9)",
                opacity: inView ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Card
                sx={{
                  position: "relative",
                  height: 400,
                  maxWidth: 345,
                  boxShadow: 3,
                  bgcolor: "transparent",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 2,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    height: 320,
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{ bgcolor: "#2E5E4E", color: "#fff", height: 80 }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontFamily: "Signika",
                      fontSize: "1.34rem",
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSec;
