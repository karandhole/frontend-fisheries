import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const schemes = [
  { name: 'PMMSY', path: '/schemes' },
  { name: 'GAIS', path: '/schemes' },
  { name: 'FIDF', path: '/schemes' },
  { name: 'Blue Revolution', path: '/schemes' },
];

export default function Schemes() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', mt: 6, px: { xs: 2, sm: 4, md: 6 } }}>
      <Grid container spacing={3}>
        {schemes.map((scheme, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Item>
              <Typography variant="h6" gutterBottom>
                {scheme.name}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Brief info about {scheme.name}. You can add more here.
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate(scheme.path)}
              >
                Know More
              </Button>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
