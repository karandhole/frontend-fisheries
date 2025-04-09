import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardActionArea,
} from '@mui/material';

const  Latestnews = () => {
  const { t } = useTranslation();

  const latestNews = [
    {
      id: 1,
      title: 'latestnews1',
      date: 'April 10, 2025',
      link: '#', // Replace with actual URL or route
    },
    {
      id: 2,
      title: 'latestnews2',
      date: 'March 28, 2025',
      link: '#',
    },
    {
      id: 3,
      title: 'latestnews3',
      date: 'March 15, 2025',
      link: '#',
    },
  ];

  return (
    <Box sx={{ p: 5 }}>
      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <Grid item>
          <Typography variant="h5" fontWeight="bold">
            {t('latestnewst')}
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="text" size="small" sx={{backgroundColor:"aliceblue"}}>
            View All
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {latestNews.map((news) => (
          <Grid item xs={12} md={4} key={news.id}>
            <Card elevation={2}>
              <CardActionArea href={news.link}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {t(news.title)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Latestnews;
