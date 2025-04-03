import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button, ToggleButton, ToggleButtonGroup, CircularProgress, Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import bgImage from '../../assets/image3.jpg'
import blog1 from '../../assets/blog2.jpeg'
import blog2 from '../../assets/blog1.jpeg'
import { Link } from 'react-router-dom';
import ApiManager from '../../apiManager/apiManager';
import { formatDate } from '../../utiils/dateFormatter';


// Example blog posts with translations
const blogPosts = [
  {
    date: 'event1Date',
    title: 'event1Title',
    image: blog1,
  },
  {
    date: 'event2Date',
    title: 'event2Title',
    image: blog2,
  },
];

const NewsCard = ({filePath}) => {
  console.log(filePath)
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();

  useEffect(() => {
    (async () => {
      const response = await ApiManager.getSignedUrl(filePath);
      if (response.data?.status) {
        setUrl(response.data?.data);
      }
      setIsLoading(false);
    })();
  }, [filePath]);
  if (isLoading) {
    return (
      <Skeleton sx={{ height: 200 }} animation="wave" variant="rectangular" />
    );
  } else {
    return (
      <Box
        component="img"
        src={url}
        alt={`blog-post`}
        sx={{ height: "200px", objectFit: "cover", mb: 2 }}
      />
    );
  }
};


// Translations for various texts in both languages
const translations = {
  leftSection: {
    heading:'leftSectionHeading',
    subheading:'leftSectionSubheading',
    buttonText:'leftSectionButtonText',
  },
  blog: {
    adminText:'blogAdminText',
    commentsText:'blogCommentsText',
    knowMoreButton:'blogKnowMoreButton',
  },
};

const News = () => {
	const {t} = useTranslation()
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await ApiManager.getBlogs();
        if (response.data?.status) {
          setData(response.data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#fef3ef', position: 'relative' }}>
      {/* Lower Section */}
      <Grid container columnSpacing={2}>
        {/* Left Section (30% Width) */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: '#f7931e',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', mb: 2 }}>
              {t(translations.leftSection.heading)} {/* Translated heading */}
            </Typography>
            <Typography variant="h3" sx={{ color: '#fff', fontWeight: 'bold', mb: 4 }}>
              {t(translations.leftSection.subheading)} {/* Translated subheading */}
            </Typography>
            <Button LinkComponent={Link} to="/blog" variant="contained" sx={{fontSize:13,color:'white',backgroundColor:'#800080','&:hover':{backgroundColor:'#9b009b'}}}>
              {t(translations.leftSection.buttonText)} {/* Translated button text */}
            </Button>
          </Box>
        </Grid>

        {/* Right Section (70% Width) */}
        <Grid item xs={12} md={8}>
          {/* Blog Post Section - Flex Row */}
          {isLoading ? <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}><CircularProgress/></Box> : <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap', // Allow posts to wrap if they overflow
              gap: 2, // Adds spacing between the blog posts
            }}
          >
            {data?.slice(0,2).map((post, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: { xs: '100%', sm: '45%' }, // Full width on mobile, half width on tablet/desktop
                  mb: 4,
                  border: '1px solid #ddd',
                  padding: '16px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
               <NewsCard filePath={post?.imageAttachment} />
                <Typography variant="body2" sx={{ color: '#f44336' }}>
                  {t(translations.blog.adminText)} {formatDate(post?.createdAt)} {/* Render date and admin text based on selected language */}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {t(post.title)} {/* Render title based on selected language */}
                </Typography>
                <Button href={post?.hrefLink} variant="outlined" sx={{ alignSelf: 'flex-start' }}>
                  {t(translations.blog.knowMoreButton)}
                </Button>
              </Box>
            ))}
          </Box>}
        </Grid>
      </Grid>

      <Box
        sx={{
          position: 'relative',
          height: '300px',
          backgroundImage: `url(${bgImage})`, // Background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 5,
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay
          }}
        />
        {/* Brand Logos */}
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '80%',
            zIndex: 1, // Ensure logos are above overlay
          }}
        >
          {[ 
            '/path-to-logo1.png', 
            '/path-to-logo2.png', 
            '/path-to-logo3.png', 
            '/path-to-logo4.png', 
            '/path-to-logo5.png', 
          ].map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`brand-logo-${index}`}
              sx={{ maxHeight: '80px', maxWidth: '120px', objectFit: 'contain', mx: 2 }}
            />
          ))}
        </Box> */}
      </Box>
    </Box>
  );
};

export default News;
