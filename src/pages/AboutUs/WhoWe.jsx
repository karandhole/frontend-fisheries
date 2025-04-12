import React from 'react';
import { Box, Typography } from '@mui/material';

const WhoWe = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Who We Are
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        We are an organization devoted to the sustainable development and management of fisheries and aquatic resources across the region. With a deep understanding of environmental responsibility, we aim to balance economic growth with ecological preservation.
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Our team consists of professionals, researchers, and local community partners who work together to implement innovative practices, provide support to fish farmers, and promote awareness about conservation and responsible aquaculture.
      </Typography>
    </Box>
  );
};

export default WhoWe;
