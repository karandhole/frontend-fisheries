// src/components/Campaigns.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import bgImage from "../../assets/competation.webp"

const Campaigns = () => {
  const { t } = useTranslation();
  const campaignData = [
    {
      title: "campaign1Title",
      description: "campaign1Description",
      progress: 100,
      buttonColor: "#f44336",
      winner: 'logoWinner'
    },
    {
      title: "campaign2Title",
      description: "campaign2Description",
      progress: 100,
      buttonColor: "#9c27b0",
      winner: 'marathiTaglineWinner'
    },
    {
      title: "campaign3Title",
      description: "campaign3Description",
      progress: 100,
      buttonColor: "#26a69a",
      winner: 'englishTaglineWinner'
    },
  ];

  const texts = {
    heading: "campaingHeading",
    subheading: "campaingSubheading",
    readMore: "campaingReadMore",
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        padding: "40px 20px",
        textAlign: "left",
        backgroundColor: "#fef3ef",
        position: "relative",
      }}
    >
      {/* Heading */}
      <Typography
        variant="subtitle2"
        sx={{
          color: "#f44336",
          fontWeight: "bold",
          mb: 1,
          letterSpacing: "3px",
        }}
      >
        {t(texts.subheading)}
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, letterSpacing: "1px" }}
      >
        {t(texts.heading)}
      </Typography>

      {/* Carousel Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {campaignData.map((campaign, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 350, margin: "0 auto" }}>
                <Box
                  sx={{
                    backgroundImage: `url(${bgImage})`, // Add your image path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box sx={{ position: "absolute", zIndex: 2 }}>
                    <CircularProgress
                      variant="determinate"
                      value={campaign.progress}
                      size={80}
                      thickness={4}
                      sx={{
                        color: campaign.buttonColor,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        color: campaign.buttonColor,
                        fontWeight: "bold",
                      }}
                    >
                      {`${campaign.progress}%`}
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ padding: "20px" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: campaign.buttonColor,
                      mb: 1,
                      fontWeight: "bold",
					  textTransform:'uppercase'
                    }}
                  >
                    Competition {index + 1}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {t(campaign.title)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {t(campaign.description)}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  {/* <Button
                    variant="contained"
                    sx={{
                      backgroundColor: campaign.buttonColor,
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: campaign.buttonColor,
                      },
                    }}
                  >
                    {t(texts.readMore)}
                  </Button> */}
                  <Typography variant="body1" fontWeight={700}>{t(campaign.winner)}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Campaigns;
