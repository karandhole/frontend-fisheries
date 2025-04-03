import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Grid} from '@mui/material';
import ppl from '../../assets/ppl.png'
import therapist from '../../assets/therapst.png';
import capacity from '../../assets/capacity.png';
import department from '../../assets/department.png';
import b1 from '../../assets/01.png';
import b2 from '../../assets/04.png';
import bgImage from "../../assets/image5.jpg"
import { useTranslation } from 'react-i18next';

const Services = () => {
  const {t} = useTranslation()
  const services = [
    {
      title:"service1Title",
      value:"service1Value",
      icon: <img src={ppl} alt="people icon" style={{ width: '50px', height: '50px' }} />,
      backimg: <img src={b1} alt="department icon" style={{ width: '50px', height: '50px' }} />,
    },
    {
      title:"service2Title",
      value:"service2Value",
      icon: <img src={capacity} alt="capacity icon" style={{ width: '50px', height: '50px' }} />,
      backimg: <img src={b2} alt="capacity icon" style={{ width: '50px', height: '50px' }} />,
    },
    {
      title:"service3Title",
      value:"service3Value",
      icon: <img src={therapist} alt="therapist icon" style={{ width: '50px', height: '50px' }} />,
      backimg: <img src={b1} alt="department icon" style={{ width: '50px', height: '50px' }} />,
    },
    {
      title:"service4Title",
      value:"service4Value",
      icon: <img src={department} alt="department icon" style={{ width: '50px', height: '50px' }} />,
      backimg: <img src={b2} alt="department icon" style={{ width: '50px', height: '50px' }} />,
    },
  ];

  return (
    <Box sx={{ padding: '20px', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />

      <Grid container spacing={1} sx={{ position: 'relative', zIndex: 1 }}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card sx={{ padding: '20px', textAlign: 'center', backgroundColor: 'transparent' }}>
              <CardContent sx={{ color: 'white' }}>
                <Typography sx={{ backgroundImage: `url('${service.backimg.props.src}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  {service.icon}
                </Typography>
                <Typography variant="h3" component="div" sx={{ fontWeight: '600' }}>
                  {t(service.value)} {/* Render value based on selected language */}
                </Typography>
                <Typography variant="h6" component="div">
                  {t(service.title)} {/* Render title based on selected language */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
