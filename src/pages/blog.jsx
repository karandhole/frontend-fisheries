import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  CardMedia,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import ApiManager from "../apiManager/apiManager";
import { useTranslation } from "react-i18next";

const BlogCard = ({ blog }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();

  useEffect(() => {
    ;(async () => {
      const response = await ApiManager.getSignedUrl(blog?.imageAttachment);
      if (response.data?.status) {
        setUrl(response.data?.data);
		console.log(response.data?.data)
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
      }}
    >
      {isLoading ? (
        <Skeleton sx={{ height: 200 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="200"
          image={url}
          alt={blog.title}
          sx={{ objectFit: "cover" }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {blog.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {blog.description}
        </Typography>
      </CardContent>
      <Box sx={{ padding: "0 16px 16px" }}>
        <Button variant="contained" color="primary" href={blog.hrefLink}>
          Read More
        </Button>
      </Box>
    </Card>
  );
};

const Blog = () => {
  const {t} = useTranslation();
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
    <>
      {/* Blog Section Header */}
      <Box
        sx={{
          backgroundImage: `url("src/assets/image11.jpeg")`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: "auto",
          height: "auto",
          padding: { xs: "2rem", md: "4rem" },
          color: "white",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "300px",
          }}
        >
          <Typography variant="h3" component="div" sx={{ fontWeight: "600" }} zIndex='4'>
           {t("ourBlog")}
          </Typography>
        </Grid>
      </Box>

      {/* Blog Cards Section */}
      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          padding: "40px 0",
        }}
      >
        {isLoading ? (
          <Box sx={{display:'flex',justifyContent:'center'}}><CircularProgress /></Box>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {data.map((blog, index) => (
              <Grid item xs={12} sm={6} md={3.7} key={index}>
				<BlogCard key={blog?._id} blog={blog}/>
			  </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Blog;
