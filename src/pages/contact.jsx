import React from 'react';
import { Box, Typography, Breadcrumbs, Link, TextField, Button, Grid, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import bg from '../assets/scheme4.jpg';
import { useTranslation } from 'react-i18next';
const Contact = () => {
const {t} =useTranslation();
  return (
    <>
      {/* Header with Breadcrumb and Image */}
      <Box
        sx={{
          backgroundImage:`url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 14,
          px: 4,
          textAlign: 'left',
          position: 'relative'
        }}
      >
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#fff', mb: 2 }}>
          <Link underline="hover" color="inherit" href="/">
            {t("home")}
          </Link>
          <Typography color="white">{t("contact")}</Typography>
        </Breadcrumbs>
        <Typography variant="h4" component="h1" fontWeight="bold">
        {t("contact")}
        </Typography>
      </Box>

      {/* Form and Map Section */}
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Inquiry Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                
                {t("message")}
              </Typography>
              <TextField label="Name" fullWidth margin="normal" />
              <TextField label="Email" fullWidth margin="normal" />
              <TextField label="Phone" fullWidth margin="normal" />
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                {t("submit")}
              </Button>
            </Paper>
          </Grid>

          {/* Google Map */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ height: '100%', overflow: 'hidden' }}>
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, minHeight: 400 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.02489727562!2d72.82050127497348!3d18.930292082244545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e8a6d73b1b%3A0xae1d10bf0b6f173b!2sNK%20Mehta%20International%20House!5e0!3m2!1sen!2sin!4v1745230964196!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};



export default Contact;
