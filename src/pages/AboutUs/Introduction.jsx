import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import img from "../../assets/plant/plant15.jpg";

const Introduction = ({ title, description, image, reverse }) => {
  return (
    <Box sx={{ my: 5, maxWidth: '70%', mx: 'auto' }}>
      <Grid container spacing={4} direction={reverse ? 'row-reverse' : 'row'} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={image || img}
            alt={title || "Introduction"}
            sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {title || "Introduction"}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description || "We are a dedicated organization committed to the sustainable development of fisheries and aquatic resources across Maharashtra."}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Introduction;
