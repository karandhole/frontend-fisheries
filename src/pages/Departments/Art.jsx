import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import YellowFloor from '../../assets/YellowFloor.jpeg';
import SE4 from '../../assets/Deparments/SE4.jpeg';
import SE2 from '../../assets/Deparments/SE2.jpeg';
import { useTranslation } from 'react-i18next';
const Art = () => {
  const {t} = useTranslation()
  const sections = [
    {
      title:  'artTitle1',
      items: [
        'artDescription1a',
        'artDescription1b',
        'artDescription1c',
        
      ],
    },
    {
      title: 'artTitle2',
      items: [
        'artDescription2a',
        'artDescription2b',
        'artDescription2c',
        
      ],
    },
    {
      title: 'artTitle3',
      items: [
        'artDescription3a',
        'artDescription3b',
        'artDescription3c',
        'artDescription3d',
        'artDescription3e',
       
      ],
    },
    {
      title: 'artTitle4',
      items: [
        'artDescription4a',
        'artDescription4b',
        'artDescription4c',
        
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
          variant="h2"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            textAlign: 'center',
            zIndex: 4,
          }}
        >
         {t('department9')}
        </Typography>
      </Box>

      {/* Information Cards Section */}
      <Box sx={{ padding: { xs: '20px', md: '40px' } }}>
        <Grid container spacing={3}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                      textAlign: 'center',
                      marginBottom: '10px',
                    }}
                  >
                    {t(section.title)}
                  </Typography>
                  <Typography component="div" variant="body1" sx={{ color: '#555', px:2, fontSize: { xs: '1.1rem', md: '1.1rem', } }}>
                    <ul>
                      {section.items.map((item, idx) => (
                        <li key={idx}>{t(item)}</li>
                      ))}
                    </ul>
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
          flexDirection: { xs: 'column', md: 'row' },
          padding: { xs: '20px', md: '40px' },
          gap: 3,
          marginTop: { xs: '20px', md: '40px' },
        }}
      >
        <img
          src={SE4} // Replace with the path to your first image
          alt="Art & Craft 1"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
        <img
          src={SE2} // Replace with the path to your second image
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
       
        <Typography variant="body1" sx={{ fontWeight: '500', color: '#800080' }}>
          {t('mail')}: specialeducatormr<br />@pcmcdivyangbhavan.org 
        </Typography>
        <Typography variant='h5'sx={{backgroundColor:' #ffd11a',textAlign:'center'}}>
          {t('floorArt')}
        </Typography>
      </Box>

     
    </>
  );
};

export default Art;
