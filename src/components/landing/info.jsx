// src/components/InfoSection.jsx

import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Icon,
  Button
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import backgroundImage from "../../assets/video_thumbnail.jpeg"
import { useTranslation } from "react-i18next";

const InfoSection = () => {
  const { t } = useTranslation();

  // Texts in different languages
  const texts = {
    totalEmployees: "totalEmployees",
    employeeCount: "employeeCount",
    employeeDescription: "employeeDescription",
    services: "services",
    servicesCount: "servicesCount",
    servicesDescription: "servicesDescription",
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0A2A50",
        padding: { xs: "0rem", md: "0rem" },
        color: "white",
        position: "relative", // Make sure to position relative to place buttons correctly
      }}
    >
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack on mobile, horizontal on desktop
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              flex: 1,
              textAlign: "center",
              padding: { xs: "1rem 0", md: "2rem" },
            }}
          >
            {/* First Subsection */}
            <Icon
              component={PeopleIcon}
              sx={{ fontSize: { xs: 40, md: 60 }, color: "#FFC107" }}
            />
            <Typography
              variant="h3"
              sx={{ color: "#FFC107", fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              {t(texts.employeeCount)}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              {t(texts.totalEmployees)}
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "1rem", fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              {t(texts.employeeDescription)}
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              flex: 1,
              textAlign: "center",
              padding: { xs: "1rem 0", md: "2rem" },
            }}
          >
            {/* Second Subsection */}
            <Icon
              component={VolunteerActivismIcon}
              sx={{ fontSize: { xs: 40, md: 60 }, color: "#4CAF50" }}
            />
            <Typography
              variant="h3"
              sx={{ color: "#4CAF50", fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              {t(texts.servicesCount)}
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              {t(texts.services)}
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "1rem", fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              {t(texts.servicesDescription)}
            </Typography>
          </Box>
        </Grid>

        {/* Right Section with Background Image and Play Button */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 0, // No padding around the right section
            backgroundImage: {
              xs: `url(${backgroundImage})`,
              md: `url(${backgroundImage})`,
            },
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: { xs: "300px", md: "400px" }, // Height adjustment for mobile and desktop
            position: "relative",
          }}
        >
          {/* Play Button */}
          <Button
            href="https://youtu.be/ML76DRU-c6U?feature=shared" // Replace with your desired link
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "50%",
              padding: "20px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            }}
          >
            <PlayCircleOutlineIcon sx={{ fontSize: { xs: 40, md: 60 } }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoSection;
