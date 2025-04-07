// src/components/ImageCarousel.jsx
import React, { useState, useRef } from "react";
import {
  Box,
  IconButton
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import engWinner from "../../assets/engWinner.png";
import divyangBanner1 from "../../assets/Deparments/pcmcimg.jpg";
import divyangBanner2 from "../../assets/Deparments/pcmcimg2.jpg";
import matWinner from "../../assets/matWinner2.jpeg";
import purpleBanner from "../../assets/purpleHD.jpeg"
import slider1 from "../../assets/bg1.jpg";
import slider2 from "../../assets/bg2.jpg"
import { useTranslation } from "react-i18next";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const ImageCarousel = () => {
  const { i18n } = useTranslation();

  const imageArr =
    i18n.language === "en"
      ? [slider1,slider2]
      : [slider1,slider2];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Function to go to the next image
  const nextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  // Function to go to the previous image
  const prevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  // Update activeIndex on slide change
  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "auto",
        overflow: "hidden",
        marginX: "auto",
	    marginTop:"20px"
      }}
    >
      <Swiper
        ref={swiperRef}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={onSlideChange}
      >
        {imageArr.map((image, index) => (
          <SwiperSlide key={index}>
          {/* Banner with clickable link */}
<Box
  sx={{
    position: "relative",
    width: "100%",
    height: "auto",
  }}
>
  {/* <a
    href="https://purplejallosh.pcmcdivyangbhavan.org/" // Replace with your desired URL
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", display: "block", width: "100%", height: "100%" }}
  > */}
    <img
      src={image}
      alt={`Slider ${index + 1}`}
      style={{
        width: "100%",
        height: "auto",
        transition: "opacity 1s ease-in-out",
        opacity: 1,
      }}
    />
  {/* </a> */}

  {image === purpleBanner && (
  <Box
    sx={{
      position: "absolute",
      top: { xs: "10px", md: "60px" }, // Adjust position for mobile and desktop
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
      display: "flex",
      flexDirection: "column", // Stack the icon below the text
      alignItems: "center",
      justifyContent: "center",
      
    }}
  >
    <Box
      sx={{
        fontSize: { xs: "14px", md: "30px" }, // Font size responsive
        fontWeight: "bold",
        color: "#393185",
        marginBottom: "5px", // Space between text and icon
      }}
    >
      Click Here
    </Box>

    <IconButton
      sx={{
        backgroundColor: "transperent",
        top: { xs: "-15px" }, 
        color: "purple",
        // Hover effect
       }}
    >
      <ArrowDownwardIcon  sx={{ fontSize: { xs: "20px", md: "48px" } }}/>
    </IconButton>
  </Box>
)}
</Box>

        </SwiperSlide>
        
        
        ))}
      </Swiper>

      {/* Previous Button */}
      <IconButton
        color="primary"
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Next Button */}
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Dots for navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "20px",
          width: "100%",
          zIndex: 1,
        }}
      >
        {imageArr.map((_, index) => (
          <Box
            key={index}
            onClick={() => swiperRef.current.swiper.slideTo(index)} // Set the slide on dot click
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: activeIndex === index ? "#4287f5" : "#fff", // Active dot is pink
              margin: "0 8px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              zIndex: 2,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageCarousel;
