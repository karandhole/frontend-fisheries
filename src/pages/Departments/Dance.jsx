import { Box, Typography } from '@mui/material';
import React from 'react';
import YellowFloor from '../../assets/YellowFloor.jpeg';
import dance1 from '../../assets/Deparments/dance1.png';
import dance2 from '../../assets/Deparments/dance2.png';
import { useTranslation } from 'react-i18next';
const Dance = () => {
  const {t} = useTranslation()
  return (
    <>
      {/* Dance & Music Department Banner */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '40vh', sm: '50vh', md: '58vh' },
          width: '100%',
          marginBottom: { xs: '40px', md: '70px' },
          backgroundImage: `url(${YellowFloor})`,
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
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textAlign: 'center',
            zIndex: 4,
          }}
        >
          {t('department10')}
        </Typography>
      </Box>

      {/* Information Text Section */}
      <Box
        sx={{
          padding: { xs: '20px', md: '40px' },
          backgroundColor: '#f9f9f9',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: '1.6',
            fontWeight: '500',
          }}
        >
         {t('danceTagline')}
        </Typography>
      </Box>

      {/* Department Details Section */}
      <Box
        sx={{
          padding: { xs: '20px', md: '40px' },
          backgroundColor: '#ffffff',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px',
            fontSize: { xs: '1.8rem', md: '2rem' },
          }}
        >
          {t('workDanceDep')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#555',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: '1.6',
            marginBottom: '10px',
          }}
        >
         {t('workTagline')}
        </Typography>

        <Box sx={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
          <ul>
            <li>
              <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: '1.6' }}>
             {t('workDescription1')}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: '1.6' }}>
              {t('workDescription2')}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: '1.6' }}>
              {t('workDescription3')}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: '1.6' }}>
              {t('workDescription4')}
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

       {/* Responsive Image Section */}
       <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          padding: { xs: '20px', md: '40px' },
          gap: 3,
          marginTop: { xs: '20px', md: '40px' },
        }}
      >
        <img
          src={dance1}// Replace with the path to your first image
          alt="Art & Craft 1"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
        <img
          src={dance2} // Replace with the path to your second image
          alt="Art & Craft 2"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </Box>

      {/* Contact Information */}
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          padding: { xs: '20px', md: '40px' },
          textAlign: 'center',
        }}
      >
       
        
        <Typography variant='h5'sx={{backgroundColor:' #ffd11a',textAlign:'center'}}>
          {t('floorDance')}
        </Typography>
      </Box>
    </>
  );
};

export default Dance;
