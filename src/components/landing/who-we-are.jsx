// src/components/WhoWeAre.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button
} from "@mui/material";
import { useTranslation } from "react-i18next";
import bgImage from "../../assets/WhoWeAre.jpg"

const WhoWeAre = () => {
  const { t } = useTranslation();

  const content = {
    title: "title",
    description: "description",
    buttonText: "buttonText",
    features: [
      { title: "feature1Title", description: "feature1Description" },
      { title: "feature2Title", description: "feature2Description" },
      { title: "feature3Title", description: "feature3Description" },
      { title: "feature4Title", description: "feature4Description" },
      { title: "feature5Title", description: "feature5Description" },
      { title: "feature6Title", description: "feature6Description" },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Section 1: Title and Button Section with Overlay */}
      <Box
        sx={{
          position: "relative",
          flexBasis: { xs: "100%", md: "35%" }, // 100% width on mobile, 35% on larger screens
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "20px", md: "50px" }, // Smaller padding for mobile
          backgroundImage: `url(${bgImage})`, // Your background image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(123, 123, 122, 0.65)", // Semi-transparent overlay
            zIndex: 1,
          }}
        />
        {/* Content on Top of Overlay */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2, // Ensures content appears above overlay
            maxWidth: "400px",
            textAlign: "justify",
            color: "#fff", // White text for better contrast on dark overlay
            padding: { xs: "10px", md: "20px" }, // Smaller padding for mobile
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: { xs: "30px", md: "70px" }, // Adjust spacing for mobile
              textAlign: "left",
            }}
          >
            {t(content.title)}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: { xs: "30px", md: "60px" },
              fontSize: { xs: "1.5rem", md: "2rem" }, // Reduce font size on mobile
              textAlign: "left",
            }}
          >
            {t(content.description)}
          </Typography>
          <Button
            variant="contained"
			sx={{fontSize:15,color:'white',backgroundColor:'#34a8eb','&:hover':{backgroundColor:'#66bced'}}}
          >
            {t(content.buttonText)}
          </Button>
        </Box>
      </Box>

      {/* Section 2: Features Section */}
      <Box
        sx={{
          flexBasis: { xs: "100%", md: "65%" }, // 100% width on mobile, 65% on larger screens
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", // Center items on mobile
          alignItems: "flex-start",
          padding: { xs: "10px", md: "20px" }, // Smaller padding for mobile
          backgroundColor: "#f9f9f9",
        }}
      >
        {content.features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 30%" }, // Full width on mobile, 30% on larger screens
              margin: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
              padding: { xs: "10px", md: "20px" }, // Smaller padding for mobile
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              minWidth: { xs: "100%", md: "30%" }, // Ensure the boxes don't shrink too much on mobile
			  minHeight:{xs:'auto',md:140}
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1rem", md: "1.2rem" }, // Smaller font size for mobile
              }}
            >
              {t(feature.title)}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" }, // Adjust font size for mobile
              }}
            >
              {t(feature.description)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhoWeAre;
