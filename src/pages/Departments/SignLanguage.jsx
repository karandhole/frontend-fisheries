import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import image9 from '../../assets/image9.jpg';
import sign1 from '../../assets/Deparments/sign1.jpeg';
import { useTranslation } from 'react-i18next';
const SignLanguage = () => {
  const {t} = useTranslation();
  const sections = [
    {
      title: 'signWork',
      items: [
        'signWork1',
       
      ],
    },
    {
      title: 'signCapacity',
      items: [
        'signCapacity1',
        
      ],
    },
    {
      title: 'signFeatures',
      items: [
        'signFeatures1',
        'signFeatures2',
        'signFeatures3',
        'signFeatures4',
        'signFeatures5',
        
      ],
    },
  ];

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
          backgroundImage: `url(${image9})`,
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
          {t('department3')}
        </Typography>
      </Box>

      {/* Information Cards Section */}
      <Box sx={{ padding: { xs: '20px', md: '40px' } }}>
        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: { xs: '1.5rem', md: '1.8rem' },
                      textAlign: 'center',
                      marginBottom: '10px',
                    }}
                  >
                    {t(section.title)}
                  </Typography>
                  <Typography component="div" variant="body1" sx={{ color: '#555', px:2,fontSize: { xs: '1rem', md: '1.2rem' } }}>
                    <ol>
                      {section.items.map((item, idx) => (
                        <li key={idx}>{t(item)}</li>
                      ))}
                    </ol>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Responsive Image Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: '20px', md: '40px' },
          marginTop: { xs: '20px', md: '40px' },
        }}
      >
        <img
          src={sign1} // Replace with the path to your image
          alt="Sign language Department"
          style={{
            width: '70%',
            maxWidth: '1200px',
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
       
        <Typography variant="body1" sx={{ fontWeight: '500', color: '#800080' }}>
          {t('mail')}: signlanguageinterpreter<br/>@pcmcdivyangbhavan.org
        </Typography>
        <Typography variant="h6" sx={{ backgroundColor: '#ff6600', padding: '10px', marginTop: '10px' }}>
          {t('floorSign')}
        </Typography>
      </Box>

      
    </>
  );
};

export default SignLanguage;
