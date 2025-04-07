import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import bgImage from "../../assets/back3.jpg" 

const DirectorsPage = () => {
	const {t} = useTranslation()

  const directors = [
    { 
        name:'person1Name1',
        designation:'person1Designation1',
        image: '/path-to-image2.jpg' 
    },
    { 
        name:'person2Name1',
        designation:'person2Designation1',
        image: '/path-to-image4.jpg' 
    },
    { 
        name:'person3Name1',
        designation:'person3Designation1',
        image: '/path-to-image3.jpg' 
    },
    { 
        name:'person4Name1',
        designation:'person4Designation1',
        image: '/path-to-image1.jpg' 
    },
];

  return (
    <Box sx={{ padding: '10px', backgroundImage:`url(${bgImage})`, backgroundPosition:'center',minHeight: '80vh', alignContent:'center', position: 'relative' }}>
      {/* Heading Section */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color:'white' }}>
          {t('peopleData')}
    </Typography>
      </Box>

      {/* Directors Cards Section */}
      <Grid container spacing={2} justifyContent="center">
        {directors.map((director, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2.4} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                transition: '0.3s',
                '&:hover': { boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)' },
                minHeight: '300px',
              }}
            >
              <CardContent>
                {/* Image */}
                <Avatar
                  sx={{
                    width: 150,
                    height: 150,
                    margin: '0 auto 20px',
                    borderRadius: '50%',
                  }}
                />
                {/* Name and Designation */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1a3f5c', mb: 1 }}>
                  {t(director.name)} {/* Use the selected language */}
                </Typography>
                <Typography variant="body2" sx={{ color: '#757575' }}>
                  {t(director.designation)} {/* Use the selected language */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DirectorsPage;
