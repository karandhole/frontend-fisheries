import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from 'react-i18next';

const headlines = [
  'rti1',
  'rti2',
  'rti3',
  'rti4',
  'rti5',
  'rti6',
  'rti7',
];

const Rti2 = () => {

    const {t} =useTranslation();
  return (
    <Container  sx={{ marginTop: '40px' }}>
      <Box
        sx={{
          width:'100%',
          p: 2,
          backgroundColor: '#f0f4f8',
          borderRadius: 3,
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        }}
      >
        {/* Header */}
        <Box
          sx={{
           
            mb: 2,
          }}
        >
      
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
            {t("RtiHeadlines")}
          </Typography>
        </Box>

        {/* Headlines */}
        <Stack spacing={1.5}>
          {headlines.map((headline, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
               
                borderRadius: 2,
                px: 2,
                py: 1.5,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                width: '100%',
                '&:hover': {
                  backgroundColor: '#e3f2fd',
                  transform: 'translateX(4px)',
                },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="body1" sx={{ fontWeight: 500, color: '#444' }}>
                {t(headline)}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Rti2;
