import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from '../../assets/Deparments/Psy4.jpeg';
import Image1 from '../../assets/Deparments/Psy2.jpeg';
import Image2 from '../../assets/Deparments/image6.jpg';
import Image3 from '../../assets/Deparments/image8.jpg'
import image11 from '../../assets/image11.jpeg';
import { useTranslation } from 'react-i18next';
const Psychology = () => {
  const {t} = useTranslation();
  return (
    <>
      {/* Psychology Department Banner */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: '40vh', sm: '50vh', md: '58vh' },
          width: '99vw',
          marginBottom: { xs: '40px', md: '70px' },
          backgroundImage: `url(${image11})`,
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
         {t('department4')}
        </Typography>
      </Box>

      {/* Sections with Responsive Layout */}
      {[
        { title: 'testingService', image: Image, items: [
          'testingService1', 'testingService2', 'testingService3',
          'testingService4', 'testingService5',
          'testingService6'
        ] },
        { title: 'therapyServices', image: Image1, items: [
          'therapyServices1', 'therapyServices2',
          'therapyServices3', 'therapyServices4',
          'therapyServices5', 'therapyServices6', 'therapyServices7', 'therapyServices8',
          'therapyServices9','therapyServices10'
        ] },
        { title: 'communityOutreac', image: Image2, items: [
          'communityOutreach1', 'communityOutreach2', 'communityOutreach3',
          'communityOutreach4', 'communityOutreach5', 'communityOutreach6'
        ] },
        { title: 'amenities', image: Image3, items: [
          'amenities1', 'amenities2', 'amenities3',
          'amenities4', 'amenities5'
        ] },
      ].map((section, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: { xs: '20px', md: '40px' },
            backgroundColor: '#f9f9f9',
            height: { xs: 'auto', md: '70vh' },
            marginBottom: { xs: '20px', md: '30px' },
          }}
        >
          {/* Left side content */}
          <Box sx={{ flex: 1, padding: { xs: '0 0 20px', md: '0 20px' } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                color: '#000',
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {t(section.title)}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              sx={{
                marginTop: '20px',
                lineHeight: '1.7',
                color: '#555',
                fontSize: { xs: '1rem', md: '1.3rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <ol>
                {section.items.map((item, idx) => (
                  <li key={idx}>{t(item)}</li>
                ))}
              </ol>
            </Typography>
          </Box>

          {/* Right side image */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: { xs: '10px 0', md: '0' },
            }}
          >
            <img
              src={section.image}
              alt={section.title}
              style={{
                width: '80%',
                height: 'auto',
                borderRadius: '8px',
                maxWidth: { xs: '100%', md: '80%' },
              }}
            />
          </Box>
        </Box>
      ))}

      {/* Contact Information */}
      <Typography
        variant="h6"
        color="textSecondary"
        align="center"
        sx={{ paddingBottom: { xs: '20px', md: '40px' } }}
      >
        {t('mail')}: clinicalpsychologist@pcmcdivyangbhavan.org
      </Typography>
      <Typography variant='h6'sx={{backgroundColor:'#ff6600',textAlign:'center'}}>
         {t('floorPsychology')}
        </Typography>
    </>
  );
};

export default Psychology;
