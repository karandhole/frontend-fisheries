import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel } from "swiper/modules";
import { useTranslation } from "react-i18next";
import scheme1 from "../../assets/scheme1.jpg"
import scheme2 from "../../assets/scheme2.jpg"
import scheme3 from "../../assets/scheme3.jpg"
import scheme4 from "../../assets/scheme4.jpg"

const schemesData = [
  {
    title: "schemetitle1",
    image: scheme1,
    link: "/",
  },
  {
    title: "schemetitle2",
    image: scheme2,
    link: "/",
  },
  {
    title: "schemetitle3",
    image: scheme3,
    link: "/",
  },
  {
    title: "schemetitle4",
    image: scheme4,
    link: "/",
  },
  {
    title: "schemetitle5",
    image: scheme1,
    link: "/",
  },
 
];

const Scheme = () => {

    const {t} =useTranslation();
  return (
    <Box sx={{ padding: "40px", backgroundColor:'rgb(247, 247, 246);' }}>
      <Typography variant="h5" gutterBottom textAlign="center" sx={{fontWeight:'600'}}>
        {t("schemes")}
      </Typography>

      <Swiper
        modules={[Autoplay, Mousewheel]}
        spaceBetween={20}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        mousewheel={{ forceToAxis: true }}
        allowTouchMove={true}
        breakpoints={{
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {schemesData.map((scheme, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                maxWidth: 345,
                mx: "auto",
                minHeight: 320, 
                boxShadow: 3,
                bottom:4,
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={scheme.image}
                alt={scheme.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {t(scheme.title)}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  text="secondary"
                  size="small"
                  href={scheme.link}
                >
                  {t("viewmore")}
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Scheme;
