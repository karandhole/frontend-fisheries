import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CPM from '../../assets/CPM.jpeg';
import image3  from '../../assets/image3.jpg';
import { useTranslation } from 'react-i18next';

// Data array for Features Section
const faqData = [
    { title: 'featuresCPMTitle1', description: 'featuresCPMDescription1' },
    { title: 'featuresCPMTitle2', description: 'featuresCPMDescription2' },
    { title: 'featuresCPMTitle3', description: 'featuresCPMDescription3' },
    { title: 'featuresCPMTitle4', description: 'featuresCPMDescription4' },
    { title: 'featuresCPMTitle5', description: 'featuresCPMDescription5' },
    { title: 'featuresCPMTitle6', description: 'featuresCPMDescription6' },
    { title: 'featuresCPMTitle7', description: 'featuresCPMDescription7' },
    { title: 'featuresCPMTitle8', description: 'featuresCPMDescription8' },
    { title: 'featuresCPMTitle9', description: 'featuresCPMDescription9' },
    { title: 'featuresCPMTitle10', description: 'featuresCPMDescription10' },
    { title: 'featuresCPMTitle11', description: 'featuresCPMDescription11' },
    { title: 'featuresCPMTitle12', description: 'featuresCPMDescription12' },
    { title: 'featuresCPMTitle13', description: 'featuresCPMDescription13' },
    { title: 'featuresCPMTitle14', description: 'featuresCPMDescription14' },
    { title: 'featuresCPMTitle15', description: 'featuresCPMDescription15' },

];

const Counselling = () => {
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
         
          marginBottom: { xs: '40px', md: '70px' },
          backgroundImage: `url(${image3})`, 
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
        {t('department7')}
        </Typography>
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
          {t('featuresCPM')}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq, index) => (
              <Accordion key={index} sx={{ marginBottom: '10px', textAlign: 'left' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${index}-content`} id={`faq-${index}-header`}>
                  <Typography variant="h6" color="#800080">{t(faq.title)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{t(faq.description)}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            {faqData.slice(Math.ceil(faqData.length / 2)).map((faq, index) => (
              <Accordion key={index} sx={{ marginBottom: '10px', textAlign: 'left' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${index + Math.ceil(faqData.length / 2)}-content`} id={`faq-${index + Math.ceil(faqData.length / 2)}-header`}>
                  <Typography variant="h6" color="#800080">{t(faq.title)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{t(faq.description)}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Box>
       {/* Image at the bottom */}
  <Box sx={{ textAlign: 'center', marginTop: 5 }}>
  <img
    src={CPM} // Replace with your image path
    alt="Councelling department"
    style={{
      width: '80%',         // Full width for smaller screens
      maxWidth: '1000px',    // Limits the max width for larger screens
      borderRadius: '8px',
      objectFit: 'cover',
      height: 'auto',        // Maintain aspect ratio and adjust height automatically
      maxHeight: '70vh',     // Set a max height to prevent it from being too tall
    }}
  />
</Box>
<Box
      sx={{
        marginTop: '40px',
        padding: { xs: '20px', sm: '30px', md: '40px' },
        backgroundColor: '#ffffff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: '10px',
          fontWeight: '600',
          textAlign: 'center',
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
        }}
      >
        {t('mail')}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          
          marginBottom: '10px',
          fontWeight: '600',
          textAlign: 'center',
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' }, // Responsive font size
          wordWrap: 'break-word', // Allows long email addresses to break if needed
        }}
      >
        counsellorprogramorganizer1<br/>@pcmcdivyangbhavan.org
        <br />
        counsellorprogramorganizer2<br/>@pcmcdivyangbhavan.org
      </Typography>
     
    </Box>
    <Typography sx={{backgroundColor:'  #33bbff',textAlign:'center',fontSize:'20px',fontWeight:'500'}}>
     {t('floorCPM')}
    </Typography>
    </>
  )
}

export default Counselling
