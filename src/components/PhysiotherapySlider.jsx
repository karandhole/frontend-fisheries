import React, { useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Phy1 from '../../src/assets/Deparments/Phy1.jpeg'
import Phy2 from '../../src/assets/Deparments/Phy2.jpeg'
import Phy3 from '../../src/assets/Deparments/Phy3.jpeg'
import Phy4 from '../../src/assets/Deparments/Phy4.jpeg'
import Phy5 from '../../src/assets/Deparments/Phy5.jpeg'
// Array of image paths
const sliderImages = [
  Phy1,
  Phy2,
  Phy3,
 Phy4,
  Phy5,
];

const ImageSlider = () => {
  const sliderRef = useRef(null);

  // Function to scroll slider to the left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll slider to the right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        marginBottom: '40px',
      }}
    >
      {/* Left Arrow Button */}
      <IconButton
        onClick={scrollLeft}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Image Slider Container */}
      <Box
        ref={sliderRef}
        sx={{
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {/* Image Slides */}
        {sliderImages.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image}
            alt={`Slide ${index + 1}`}
            sx={{
              minWidth: '30%',
              maxHeight: '400px',
              height: 'auto',
              margin: '0 10px',
              borderRadius: '10px',
              objectFit: 'cover',
              scrollSnapAlign: 'center',
            }}
          />
        ))}
      </Box>

      {/* Right Arrow Button */}
      <IconButton
        onClick={scrollRight}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
