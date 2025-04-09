import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import YellowFloor from '../../assets/YellowFloor.jpeg';
import SE4 from '../../assets/Deparments/SE4.jpeg';
import SE2 from '../../assets/Deparments/SE2.jpeg';
import { useTranslation } from 'react-i18next';
const Mainoffice = () => {
  const {t} = useTranslation()


  return (
    <>
      {/* Banner Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '40vh', sm: '50vh', md: '58vh' },
          width: '100%',
          marginBottom: { xs: '40px', md: '70px' },
      
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
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
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textAlign: 'center',
            zIndex: 4,
          }}
        >
         {t('Main Office')}
        </Typography>
      </Box>

      

     
    </>
  );
};

export default Mainoffice;
