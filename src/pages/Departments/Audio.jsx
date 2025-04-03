import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from '../../assets/Deparments/Psy4.jpeg';
import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image1.jpg';
import YellowFloor from '../../assets/YellowFloor.jpeg';
import { useTranslation } from 'react-i18next';
const Audio = () => {
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
         {t('department8')}
        </Typography>
      </Box>

      {/* Sections with Responsive Layout */}
      {[
        { title: 'testingAudio', image: Image, items: [
          'testingAudio1', 'testingAudio2', 'testingAudio3',
          'testingAudio4', 'testingAudio5',
          'testingAudio6', 'testingAudio7', 'testingAudio8', 'testingAudio9'
        ] },
        { title: 'therapyAudio', image: Image1, items: [
          'therapyAudio1',
          'therapyAudio2', 'therapyAudio3', 'therapyAudio4',
          'therapyAudio5', 'therapyAudio6', 'therapyAudio7', 'therapyAudio8',
          'therapyAudio9'
        ] },
        { title: 'comunityAudio', image: Image2, items: [
          'comunityAudio1', 'comunityAudio2', 'comunityAudio3',
          'comunityAudio4', 'comunityAudio5'
        ] },
        // { title: 'Client Amenities for PwDs', image: Image3, items: [
        //   'Free Parking', 'Wheelchair Accessibility', 'Comfortable Waiting Area',
        //   'Refreshments (Food Truck - in process)', 'Play Area for Children'
        // ] },
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
            marginBottom: { xs: '20px', md: '30px' },
          }}
        >
          {/* Content */}
          <Box sx={{ flex: 1, padding: { xs: '0 0 20px', md: '0 20px' } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: '#000',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
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
                fontSize: { xs: '1rem', md: '1.2rem' },
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

          {/* Image */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: { xs: '10px 0', md: '0' },
              maxWidth: '500px', // Limits the width of images
              maxHeight: { xs: '200px', sm: '300px', md: '350px' }, // Controls the height of images
              overflow: 'hidden', // Prevents overflow of large images
            }}
          >
            <img
              src={section.image}
              alt={section.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Ensures the image covers allocated space
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Shadow effect for aesthetics
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
        {t('mail')}: <br/>srspeechtherapist@<br/>pcmcdivyangbhavan.org <br/>jrspeechtherapist@<br/>pcmcdivyangbhavan.org
      </Typography>
      <Typography variant='h5'sx={{backgroundColor:' #ffd11a',textAlign:'center'}}>
          {t('floorAudio')}
        </Typography>
    </>
  );
};

export default Audio;
