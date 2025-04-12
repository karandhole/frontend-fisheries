import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, IconButton } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import plant1 from "../../assets/plant/plant1.jpg";
import plant2 from "../../assets/plant/plant2.jpg";
import plant3 from "../../assets/plant/plant3.jpg";
import plant4 from "../../assets/plant/plant4.jpg";
import plant5 from "../../assets/plant/plant5.jpg";
import plant6 from "../../assets/plant/plant6.jpg";
import plant7 from "../../assets/plant/plant7.jpg";
import plant8 from "../../assets/plant/plant8.jpg";
import plant9 from "../../assets/plant/plant9.jpg";
import plant10 from "../../assets/plant/plant10.jpg";
import plant11 from "../../assets/plant/plant11.jpg";

const imageData = [
  { src: plant1, link: '/' },
  { src: plant2, link: '/' },
  { src: plant3, link: '/' },
  { src: plant4, link: '/' },
  { src: plant5, link: '/' },
  { src: plant6, link: '/' },
  { src: plant7, link: '/' },
  { src: plant8, link: '/' },
  { src: plant9, link: '/' },
  { src: plant10, link: '/' },
  { src: plant11, link: '/' },
];

const PlantSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box sx={{ width: '100%', mt: 4,mb:6, position: 'relative' }}>
      {/* Custom navigation buttons */}
      <IconButton
        ref={prevRef}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          zIndex: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'white',
          boxShadow: 2,
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        ref={nextRef}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          zIndex: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'white',
          boxShadow: 2,
          '&:hover': { backgroundColor: '#f0f0f0' },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {imageData.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={item.link}>
              <Box
                component="img"
                src={item.src}
                alt={`Plant ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  borderRadius: 2,
                  cursor: 'pointer',
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PlantSlider;
