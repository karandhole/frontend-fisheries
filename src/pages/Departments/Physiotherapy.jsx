import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import React from 'react';
import ImageSlider from '../../components/PhysiotherapySlider';
import GreenFloor from '../../assets/Deparments/GreenFloor.jpeg';
import { useTranslation } from 'react-i18next';
// Data array for Facility and Services
const servicesData = [
    { description: 'physioFacility1' },
    {  description: 'physioFacility2' },
    {  description: 'physioFacility3' },
    {  description: 'physioFacility4' },
    {  description: 'physioFacility5' },
    {  description: 'physioFacility6' },
    {  description: 'physioFacility7' },
    {  description: 'physioFacility8' },
  ];

// Data array for Features of Department
const featuresData = [
    { title: 'physioFeaturesTitle1', description: 'physioFeaturesDescription1' },
    { title: 'physioFeaturesTitle2', description: 'physioFeaturesDescription2' },
    { title: 'physioFeaturesTitle3', description: 'physioFeaturesDescription3' },
    { title: 'physioFeaturesTitle4', description: 'physioFeaturesDescription4' },
    { title: 'physioFeaturesTitle5', description: 'physioFeaturesDescription5' },
  ];

const Physiotherapy = () => {
  const {t} = useTranslation()
  return (
    <>
      {/* Audio Department Banner */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '40vh', sm: '50vh', md: '58vh' },
          width: '99vw',
          marginBottom: { xs: '40px', md: '70px' },
          backgroundImage: `url(${GreenFloor})`,
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
         {t('department11')}
        </Typography>
      </Box>

      {/* Full-Width Text Section */}
      <Box
        sx={{
         
          padding: { xs: '20px', sm: '30px', md: '50px' },
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            maxWidth: '90%',
            marginBottom: '20px',
            lineHeight: 1.6,
          }}
        >
          {t('physioTagline')}
        </Typography>

        {/* Highlighted Sentence */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#800080',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
          }}
        >
         {t('physioHighlight')}
        </Typography>
      </Box>

     {/* Facility and Services Section */}
     <Box
        sx={{
         
          padding: { xs: '20px', sm: '30px', md: '50px' },
          backgroundColor: '#ffffff',
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          {t('physioFacilityTitle')}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  padding: '20px',
                  backgroundColor: '#f9f9f9',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius: '8px',
                  maxWidth: '280px',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                
                <Typography variant="h6" >
                  {t(service.description)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Features of Department Section */}
      <Box
        sx={{
         
          padding: { xs: '20px', sm: '30px', md: '50px' },
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          {t('physioFeatures')}
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {featuresData.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Card
                sx={{
                  height: '80%',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius: '8px',
                  backgroundColor:'#800080',
                  color: 'white',
                 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '15px',
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px',textAlign:'left' ,pt:2}}>
                    {t(feature.title)}
                  </Typography>
                  <Typography variant="body1" color="	#FFFFFF" sx={{textAlign:'left',px:2,pt:2}}>
                    {t(feature.description)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
     <Box sx={{ marginTop: '40px',
        padding: { xs: '20px', sm: '30px', md: '50px' },
        backgroundColor: '#ffffff',
        textAlign: 'center',
       
        justifyContent: 'center',
        alignItems: 'center',}}>
     <ImageSlider/>
     </Box>
     <Box sx={{
        marginTop: '40px',
        padding: { xs: '20px', sm: '30px', md: '50px' },
        backgroundColor: '#ffffff',
        textAlign: 'center',
       
        justifyContent: 'center',
        alignItems: 'center',
 
     }}>
     <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'semibold',textAlign:'center' }}>
      {t('mail')}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'semibold',textAlign:'center' }}>
     'physiotherapist@pcmcdivyangbhavan.org'
        </Typography>
        <Typography variant='h6'sx={{backgroundColor:' #ace600'}}>
          {t('floorPhysio')}
        </Typography>
     </Box>
    </>
  );
};

export default Physiotherapy;
