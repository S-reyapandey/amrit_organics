import React from 'react';
import { Leaf, Computer, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@mui/material';
import { TrackChanges } from '@mui/icons-material';

const Feature = () => {
  const features = [
    {
      title: "Sustainability & Eco-Friendly",
      description: "Eco-friendly practices for a greener future.",
      icon: Leaf
    },
    {
      title: "Tech Driven",
      description: "Innovating with advanced technology.",
      icon: Computer
    },
    {
      title: "E2E Traceability",
      description: "Complete transparency in supply chains.",
      icon: TrackChanges
    },
    {
      title: "Tradition & Innovation",
      description: "Merging heritage with modern ideas.",
      icon:Lightbulb
    }
  ];

  return (
    <div className="w-full max-w-full mx-auto p-2 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
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
              <CardContent sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: "18px", sm: "23px", md: "26px" },
                "&:last-child": {
                  paddingBottom: { xs: "20px", sm: "25px", md: "28px" },
                },
              }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EDDD5E]">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-2xl sm:text-2xl font-semibold font-['Signika'] text-black">
                    {feature.title}
                  </h3>
                </div>
                
                <div className="w-full h-px bg-[#252b22] mb-4" />
                
                <p className="text-lg font-['Roboto'] leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;