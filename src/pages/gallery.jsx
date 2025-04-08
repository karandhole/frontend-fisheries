import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import ApiManager from "../apiManager/apiManager";
import { useTranslation } from "react-i18next";
import zIndex from "@mui/material/styles/zIndex";

const GalleryCard = ({ filePath }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();

  useEffect(() => {
    (async () => {
      const response = await ApiManager.getSignedUrl(filePath);
      if (response.data?.status) {
        setUrl(response.data?.data);
        console.log(response.data?.data);
      }
      setIsLoading(false);
    })();
  }, [filePath]);
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
      }}
    >
      {isLoading ? (
        <Skeleton sx={{ height: 300 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="300"
          image={url}
          alt={"NA"}
          sx={{ objectFit: "cover" }}
        />
      )}
    </Card>
  );
};

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const {t} = useTranslation();


  useEffect(() => {
    (async () => {
      try {
        const response = await ApiManager.getGalleryImages();
        if (response.data?.status) {
          setData(response.data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("src/assets/image11.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: "auto",
          height: "auto",
          padding: { xs: "2rem", md: "4rem" },
          color: "white",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
          }}
        />
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "300px",
          }}
        >
          <Typography variant="h3" component="div" sx={{ fontWeight: "600" } } zIndex='10'>
            {t("ourGallery")}
          </Typography>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F4F4F4", // Light background for the gallery section
          padding: "40px 0",
        }}
      >
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {data.map((gallery, index) => (
              <Grid item xs={12} sm={6} md={3.5} key={index}>
                <GalleryCard key={gallery?._id} filePath={gallery?.filePath} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Gallery;
