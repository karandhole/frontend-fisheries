import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const notices = [
  { title: "Notice 1: Fishing Policy Updated", link: "/notice/1" },
  { title: "Notice 2: Training Program Schedule", link: "/notice/2" },
  { title: "Notice 3: New Subsidy Released", link: "/notice/3" },
  { title: "Notice 4: Export Guidelines 2025", link: "/notice/4" },
  { title: "Notice 5: Insurance Enrollment Open", link: "/notice/5" },
  { title: "Notice 6: Loan Scheme Application", link: "/notice/6" },
  { title: "Notice 7: Fisheries Data Update", link: "/notice/7" },
  { title: "Notice 8: Safety Training Workshop", link: "/notice/8" },
  { title: "Notice 9: Cold Storage Tender", link: "/notice/9" },
];

const AboutAndNotices = () => {
  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: "#f8f8f8" }}>
      <Grid container spacing={4} alignItems="stretch">
        {/* Left Column: About Us */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1">
              Maharashtra Fisheries Development Corporation is committed to the
              welfare and advancement of the fisheries sector. We implement
              state-level schemes, conduct training programs, and support cold
              storage, insurance, and export services for the benefit of the
              fishing community across Maharashtra.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column: Scrolling Notices */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: 250, // show 5 notices (each ~50px)
              overflow: "hidden",
              border: "1px solid #ddd",
              borderRadius: 2,
              backgroundColor: "#fff",
              p: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Latest Notices
            </Typography>

            <Swiper
              direction="vertical"
              modules={[Autoplay]}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              speed={2000}
              loop={true}
              slidesPerView={5}
              allowTouchMove={false}
              style={{ height: "200px" }}
            >
              {notices.map((notice, index) => (
                <SwiperSlide key={index}>
                  <Button
                    href={notice.link}
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      textTransform: "none",
                      fontSize: "15px",
                      color: "#333",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {notice.title}
                  </Button>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutAndNotices;
