

import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Card, CardContent, Button, CircularProgress } from '@mui/material';
import ApiManager from '../apiManager/apiManager';
import DownloadPdf from '../components/DownloadPdf';
import { useTranslation } from 'react-i18next';
import image3  from '../../src/assets/image3.jpg';

const Carrier = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [data,setData] = useState([]);
  const {t} = useTranslation();


  useEffect(()=>{
    (async ()=>{
      try {
        const response = await ApiManager.getCareers();
        if(response.data?.status){
          setData(response.data?.data);
        }
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    })();
  },[])

  return (
    <>
      
      <Box
        sx={{
          backgroundImage: `url(${image3})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: 'auto',
          height: 'auto',
          padding: { xs: '2rem', md: '4rem' },
          color: 'white',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
          }}
        />
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '300px',
          }}
        >
          <Typography variant="h3" component="div" sx={{ fontWeight: '600' }} zIndex='4'>
            {t("ourCareer")}
          </Typography>
        </Grid>
      </Box>

      {/* Career Listings Section */}
      <Box
        sx={{
          backgroundColor: '#F4F4F4', // Light background for the career section
          padding: '40px 0',
        }}
      >
        {isLoading ? <Box sx={{display:'flex',justifyContent:'center'}}><CircularProgress/></Box> : <Grid container spacing={3} justifyContent="center">
          {data.map((job, index) => (
            <Grid item xs={12} sm={6} md={3.2} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ fontWeight: '600', marginBottom: '10px' }}>
                    {job.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '10px',fontSize:14 }}>
                    {job.location} | {job.jobType}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                    {job.description}
                  </Typography>
                  <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                    <DownloadPdf label="Download" imageKey={job?.fileAttachment}/>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>}
      </Box>
    </>
  );
};

export default Carrier;
