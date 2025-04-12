import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Import icons/logos for quick links
import link1 from '../../assets/logo.png';
import link2 from '../../assets/quicklinks2.png';
import link3 from '../../assets/quciklinks3.png';
import link4 from '../../assets/quicklinks3.jpg';
import bgImage from "../../assets/bg1.jpg";

const quickLinks = [
  {
    title: "quickLink1Title",
    url: "https://pmmsy.dof.gov.in/",
    icon: link1,
  },
  {
    title: "quickLink2Title",
    url: "https://fisheries.maharashtra.gov.in/",
    icon: link2,
  },
  {
    title: "quickLink3Title",
    url: "https://fisheries.maharashtra.gov.in/index.php/marine-and-inland",
    icon: link3,
  },
  {
    title: "quickLink4Title",
    url: "https://sagarmala.gov.in/",
    icon: link4,
  },
];

const QuickLinks = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: '30px', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />

      <Typography variant="h4" sx={{ textAlign: 'center', color: 'white', fontWeight: 'bold', position: 'relative', zIndex: 1 }}>
        {t('quicklinesheading')}
      </Typography>

      <Grid container spacing={5} sx={{ marginTop: 3, position: 'relative', zIndex: 1,justifyContent:'center' }}>
        {quickLinks.map((link, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card sx={{ padding: '10px', textAlign: 'center', backgroundColor: 'rgba(230, 255, 255, 0.64)', borderRadius: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.3)' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                      src={link.icon}
                      alt={link.title}
                      style={{ width: '60px', height: '60px', marginBottom: '10px' }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: '#000033', fontWeight: 'bold', textAlign: 'center' }}
                    >
                      {t(link.title)}
                    </Typography>
                  </Box>
                </a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuickLinks;