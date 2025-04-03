import { Box, Card, CardContent, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import Prosthe1 from '../../assets/Deparments/Prosthe1.jpeg'
import Prosthe2 from '../../assets/Deparments/Prosthe2.jpeg'
import GreenFloor from '../../assets/Deparments/GreenFloor.jpeg';
import { useTranslation } from 'react-i18next';


// Data array for Features of Department
const featuresData = [
    { title: 'prostheServiceTitle1', description: 'prostheServiceDesciption1' },
    { title: 'prostheServiceTitle2', description: 'prostheServiceDesciption2' },
    { title: 'prostheServiceTitle3', description: 'prostheServiceDesciption3' },
    { title: 'prostheServiceTitle4', description: 'prostheServiceDesciption4' },
    
  ];

  // Data array for Features Section
const faqData = [
    { title: 'featuresProstheTitle1', description: 'featuresProstheDescription1' },
    { title: 'featuresProstheTitle2', description: 'featuresProstheDescription2' },
    { title: 'featuresProstheTitle3', description: 'featuresProstheDescription3' },
    { title: 'featuresProstheTitle4', description: 'featuresProstheDescription4' },
    { title: 'featuresProstheTitle5', description: 'featuresProstheDescription5' },
];
const Prosthetics = () => {
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
         {t('department5')}
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
          {t('prostheContent')}
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
         {t('highlightContent')}
        </Typography>
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
         {t('prostheServises')}
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
                  <Typography variant="h6" sx={{ fontWeight: 'bold',pt:6,py:2, marginBottom: '10px',textAlign:'left' }}>
                    {t(feature.title)}
                  </Typography>
                  <Typography variant="body2" color="	#FFFFFF" sx={{textAlign:'left',py:2}}>
                    {t(feature.description)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box
        sx={{
          padding: { xs: '20px', sm: '30px', md: '50px' },
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        {t('featuresProsthe')}
        </Typography>

        {faqData.map((faq, index) => (
          <Accordion key={index} sx={{ margin: 'auto', marginBottom: '10px',textAlign:'left' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${index}-content`} id={`faq-${index}-header`}>
              <Typography variant="h6" color='#800080'>{t(faq.title)}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{t(faq.description)}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
       {/* Responsive Photo Section */}
       <Box
        sx={{
          padding: { xs: '20px', sm: '30px', md: '50px' },
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
         {t('ourfacilities')}
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src={Prosthe1} // replace with the actual path to your image
              alt="Facility 1"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src={Prosthe2} // replace with the actual path to your image
              alt="Facility 2"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            />
          </Grid>
        </Grid>
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
     'Srprosthetist_orthotist@pcmcdivyangbhavan.org'
        </Typography>
        <Typography variant='h6'sx={{backgroundColor:' #ace600'}}>
          {t('floorProsthe')}
        </Typography>
     </Box>
    </>
  )
}

export default Prosthetics;
