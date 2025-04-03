import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import building from '../assets/building.jpeg'
import DIR1 from '../assets/Shekhar Singh Sir.jpg'
import DIR2 from '../assets/Omprakash Deshmukh.jpg'
import DIR3 from '../assets/Pradeep Jambhale Patil.jpg'
import DIR4 from '../assets/Tanaji Narale.jpg'
import DIR5 from '../assets/Shriniwas Dangat Sir.jpg'
import img from '../assets/image8.jpg'
import committee from '../assets/committee.png'
import meeting from '../assets/meeting.png'
import advisor from '../assets/advisor.png'
import advisor1 from '../assets/advisor1.jpeg'
import EC from '../assets/EC.jpg'
import { useTranslation } from "react-i18next";

const BackgroundImageSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '50vh',  // Adjust height as necessary
  backgroundImage: 'url("../assets/image5.jpg")',  // Replace with your image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '30vh',
  },
}));

const TitleOverlay = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  zIndex:'4',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'serif',
    textAlign:'justify',
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  }));
  
  const LeftSection = styled(Box)(({ theme }) => ({
    flex: 3,
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  }));
  
  const RightSection = styled(Box)(({ theme }) => ({
    flex: 7,
    display: 'flex',
    
    flexDirection: 'column',
    justifyContent: 'center',
  }));

  // Board of Directors Section styles
const DirectorsSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(3),
  }));
  
  const DirectorCard = styled(Card)(({ theme }) => ({
    width: '400px',
    height:'500px', 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Adjust the width as needed
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }));
  
  // Executive Committee Section styles
const ExecutiveSection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(5),
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(3),
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',  // Stacks in smaller screens
    },
  }));
  
  const CommitteeCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
   backgroundColor:'#993399',
    borderRadius: theme.shape.borderRadius,  // Border radius effect
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',  // Slight zoom on hover
    },
  }));

  const AdvisorySection = styled(Box)(({ theme }) => ({
    padding: theme.spacing(5),
   
  }));
  
  const directors = [
    {
      name: ' Shekhar Singh, I.A.S (Commissioner, PCMC)',
      designation: 'Chairman',
      image: DIR1,  // Replace with actual profile image URL
    },
    {
      name: 'Omprakash Deshmukh  (IAS Retd.)',
      designation: 'Managing Director ',
      image: DIR2,
    },
    {
      name: 'Pradip Jambhale Patil (Additional Commissioner, PCMC)',
      designation: 'Director',
      image: DIR3,
    },
    {
      name: 'Tanaji Narale (Assistant Commissioner, Samaj Vikas Department, PCMC)',
      designation: ' Director',
      image: DIR4,
    },
    {
      name: 'Shriniwas Dangat (Assistant Commissioner, Divyang Kaksh, PCMC)',
      designation: 'Director ',
      image: DIR5,
    },
  ];
  
  // Executive committee member data
const executiveCommittee = [
   
    { title: 'Omprakash Deshmukh  (IAS Retd.)', designation: 'Chairman' },
   
    { title: 'Tanaji Narale (Assistant Commissioner, Samaj Vikas Department, PCMC)', designation: 'Director' },
    { title: 'Shriniwas Dangat (Assistant Commissioner, Samaj Vikas Department (Divyang Kaksh), PCMC)', designation: 'Director' },
    { title: 'Paresh Gandhi', designation: 'CEO' },
   
    { title: 'Girish Paralikar', designation: '	Company Secretary ' },
  ];

  const advisors = [
    { name: 'Dr Rajendra Wabale', designation: 'YCM Dean', email: 'deanpgiycmh@pcmcindia.gov.in' },
    { name: 'Vijay Kanhekar', designation: 'Parkalpa Sanchalak DDRC & National Award winner organisation that works for PWD', email: 'vijaykanhekar@gmail.com' },
    { name: 'Abhijeet Murugkar', designation: 'Accessiblity consultant and special child parent Attended on VC', email: 'designbridgepune@gmail.com' },
    { name: 'Anuradha Joshi', designation: 'Ex- Divyang Commissioner for the State of Goa', email: 'anusanket@gmail.com' },
    { name: 'Dhananjay Bhole (PwD)', designation: 'Non-Executive Director Sugamya Digital Solutions', email: 'dhananjay.bhole@gmail.com' },
    { name: 'Dr. Sanjay Jain (PwD) ', designation: 'Law expert, Law college Pune-attended on VC', email: 'sanjay.jain@nls.ac.in' },
    { name: 'Dr. Kalyani Mandke', designation: 'Audiologist excellent work in hearing impaired disability, American & Indian Association secretary', email: 'kalyani.mandke@gmail.com' },
    { name: 'Commander Bijur', designation: 'Autistic Parents Association Head', email: 'bijurns@gmail.com' },
    { name: 'Suvarna Bobade', designation: 'Psychologist', email: 'bobadesuvarna13@gmail.com' },
    { name: 'Aparna Panse', designation: 'Sport & Culture expert', email: 'balkalyansanstha@gmail.com' },
    { name: 'Minetta Patil', designation: 'Public Relations Advisor', email: 'advisor11@example.com' },
    { name: 'Datta Bhosale (PwD)', designation: 'Social Worker & Orthopedically Disable', email: '' },
  ];

const AboutUs = () => {

  const { t } = useTranslation();

    const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <BackgroundImageSection>
         <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
          }}
        />
      <TitleOverlay variant="h1">
      {t('aboutUs')}</TitleOverlay>
    </BackgroundImageSection>

     {/* Content Section with Image and Text */}
     <ContentSection>
        {/* Left Section with Image */}
        <LeftSection>
          <img
            src={building}  // Replace with your image
            alt="About Us"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </LeftSection>

        {/* Right Section with Information */}
        <RightSection>
          <Typography variant="h4" sx={{maxWidth:'900px', fontSize:'40px',padding:'20px', textAlign:'center'}} gutterBottom>
           {t('ourStoryTitle')}
          </Typography>
          
          <Typography variant="body1" sx={{maxWidth:'900px', fontSize:'21px',padding:'20px',}}>
          {t('ourStory')}
          </Typography>
          
        </RightSection>
      </ContentSection>

      {/* Board of Directors Section */}
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          Board of Directors
        </Typography>
        <img src={meeting}  alt=''/>
      </Box>

      {/* Director Cards */}
      <DirectorsSection>
        {directors.map((director, index) => (
          <DirectorCard key={index}>
            <CardMedia
              component="img"
              alt={director.name}
              height='70%'
             
              image={director.image} 
              sx={{ objectFit: 'contain' }}   // Use the image URL from the data
            />
            <CardContent>
              <Typography variant="h5">
                {director.name}  {/* Use the name from the data */}
              </Typography>
              <Typography variant="h6" color="text.secondary" >
                {director.designation}  {/* Use the designation from the data */}
              </Typography>
            </CardContent>
          </DirectorCard>
        ))}
      </DirectorsSection>

  {/* Executive Committee Section */}
<Box sx={{ textAlign: 'center', marginTop: 5 }}>
  <Typography variant="h4" gutterBottom>
    Our Executive Committee
  </Typography>
  <img
    src={committee}
    alt="Executive Committee"
      // Responsive image sizing
  />
</Box>

{/* Executive Committee Cards */}
<ExecutiveSection>
  {executiveCommittee.map((member, index) => (
    <CommitteeCard key={index}>
      <Typography variant="h5" sx={{ color: 'white' }}>{member.title}</Typography>
      <Typography variant="h6" sx={{ color: 'white' }}>
        {member.designation}
      </Typography>
    </CommitteeCard>
  ))}
</ExecutiveSection>

<Box sx={{ textAlign: 'center', marginTop: 5 }}>
  <img
    src={EC} // Replace with your image path
    alt="Executive Committee"
    style={{
      width: '90%', 
      borderRadius: '8px', 
      objectFit: 'cover', 
      maxHeight: '80vh',  // Limit the height for better responsiveness
      maxWidth: '100%',
    }}
  />
</Box>

{/* Meet our Advisory Board Section */}
<Box sx={{ textAlign: 'center', marginTop: 5 }}>
  <Typography variant="h4" gutterBottom>
    Meet Our Advisory Board
  </Typography>
  <Typography variant="h5">Pradip Jambhale Patil (Additional Commissioner, PCMC)</Typography>
  <Typography variant="h6">Chairman of Advisory Board</Typography>
</Box>

{/* Advisory Board Accordion Section */}
<AdvisorySection>
  <Grid container spacing={3} justifyContent="center">
    {/* Advisor List: Spanning 10 columns now to increase width */}
    <Grid item xs={12} md={10}>
      <Grid container spacing={3}>
        {/* First column of advisors */}
        <Grid item xs={12} sm={6}>
          {advisors.slice(0, 6).map((advisor, index) => (
            <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">{advisor.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">{advisor.designation}</Typography>
                <Typography variant="body2" color="text.secondary">{advisor.email}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {/* Second column of advisors */}
        <Grid item xs={12} sm={6}>
          {advisors.slice(6, 12).map((advisor, index) => (
            <Accordion key={index + 6} expanded={expanded === index + 6} onChange={handleChange(index + 6)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">{advisor.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6">{advisor.designation}</Typography>
                <Typography variant="body1" color="text.secondary">{advisor.email}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  {/* Image at the bottom */}
  <Box sx={{ textAlign: 'center', marginTop: 5 }}>
  <img
    src={advisor1} // Replace with your image path
    alt="Advisory Board"
    style={{
      width: '80%',         // Full width for smaller screens
      maxWidth: '1000px',    // Limits the max width for larger screens
      borderRadius: '8px',
      objectFit: 'cover',
      height: 'auto',        // Maintain aspect ratio and adjust height automatically
      maxHeight: '70vh',     // Set a max height to prevent it from being too tall
    }}
  />
</Box>

</AdvisorySection>


</>
  );
};

export default AboutUs;
