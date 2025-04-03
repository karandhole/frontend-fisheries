import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Import icons/logos for quick links
import link1 from '../../assets/favorite.png';
import link2 from '../../assets/favorite.png';
import link3 from '../../assets/favorite.png';
import link4 from '../../assets/favorite.png';
import bgImage from "../../assets/bg1.jpg";

const quickLinks = [
  {
    title: "quickLink1Title",
    url: "https://example1.com",
    icon: link1,
  },
  {
    title: "quickLink2Title",
    url: "https://example2.com",
    icon: link2,
  },
  {
    title: "quickLink3Title",
    url: "https://example3.com",
    icon: link3,
  },
  {
    title: "quickLink4Title",
    url: "https://example4.com",
    icon: link4,
  },
];

const QuickLinks = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: '20px', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      
      <Typography variant="h4" sx={{ textAlign: 'center', color: 'white', fontWeight: 'bold', position: 'relative', zIndex: 1 }}>
        {t('quicklinesheading')}
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: 3, position: 'relative', zIndex: 1 }}>
        {quickLinks.map((link, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#e6eeff', borderRadius: '10px', boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.3)' }}>
              <CardContent>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src={link.icon} alt={link.title} style={{ width: '50px', height: '50px' }} />
                  <Typography variant="h6" sx={{ marginTop: 1, color: ' #000033', fontWeight: 'bold' }}>
                    {t(link.title)}
                  </Typography>
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