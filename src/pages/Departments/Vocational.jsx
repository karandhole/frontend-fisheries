import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import VocationalCounseler from '../../assets/Deparments/Vocatioal Counseler.jpeg';
import VocationalCounseler2 from '../../assets/Deparments/Vocational Counseler2.jpeg';
import image9 from '../../assets/image9.jpg';
import { useTranslation } from 'react-i18next';
const Vocational = () => {
  const {t} = useTranslation();
 

  // Translations for English and Marathi
  
      const sections = [
        {
          title: 'roleVocational',
          items: [
            'role1',
            'role2',
            'role3',
            'role4',
            'role5',
          ],
        },
        {
          title: 'responsibilityVocational',
          items: [
            'responsibility1',
            'responsibility2',
            'responsibility3',
            'responsibility4',
            'responsibility5',
          ],
        },
        {
          title: 'benefitsVocational',
          items: [
            'benefits1',
            'benefits2',
            'benefits3',
            'benefits4',
            'benefits5',
          ],
        },
        {
          title: 'qualitiesVocational',
          items: [
            'qualities1',
            'qualities2',
            'qualities3',
            'qualities4',
            'qualities5',
          ],
        },
      ];
      
    
    
   

  

  return (
    <>
      {/* Language Toggle Button */}
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '20px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
        >
          {language === 'en' ? 'Switch to Marathi' : 'Switch to English'}
        </Button>
      </Box> */}

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
          {t('department1')}
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
                  <Typography component="div" variant="h5" sx={{ color: '#555',px:2, fontSize: { xs: '1.2rem', md: '1.1rem' } }}>
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
          src={VocationalCounseler} // Replace with the path to your first image
          alt="Art & Craft 1"
          style={{
           width:'100%',
            maxWidth: '600px',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        />
        <img
          src={VocationalCounseler2} // Replace with the path to your second image
          alt="Art & Craft 2"
          style={{
            width:'100%',
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
        <Typography
          variant="h6"
          color="textSecondary"
          sx={{ paddingBottom: { xs: '20px', md: '40px' }, fontWeight: '600' }}
        >
         {t('mail')}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: '500', color: '#800080' }}>
        vocationalcounsellor@pcmcdivyangbhavan.org
        </Typography>
        <Typography variant="h6" sx={{ backgroundColor: '#ff6600', padding: '10px', marginTop: '10px' }}>
          {t('floorVocationl')}
        </Typography>
      </Box>
    </>
  );
};

export default Vocational;
