import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TenderCard from "../components/tender-card";
import Grid from "@mui/material/Grid";
import ApiManager from "../apiManager/apiManager";
import { useTranslation } from "react-i18next";
import { LoginOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import image3  from '../../src/assets/image5.jpg';

const Tender = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const response = await ApiManager.getTenders();
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
      <Box
        sx={{
          width: "100%",
          height: 500,
          backgroundImage: `url(${image3})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
        <Typography variant="h3" color="#FFFFFF" textAlign={"center"} zIndex='4'>
          {t("ourTender")}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          minHeight: 300,
          display: "flex",
          justifyContent: "center",
          py: 10,
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Container>
            <Grid container spacing={2} sx={{ backgroundColor: "#FFFFFF" }}>
              {data?.map((item) => (
                <Grid item xs={12} md={4}>
                  <TenderCard isMain={true} data={item} isApplied={false} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{display:'flex',justifyContent:'center',mt:3}}>
              <Button
              LinkComponent={Link}
              to='/vender-login'
              endIcon={<LoginOutlined/>}
                sx={{
                  fontSize: 15,
                  color: "white",
                  backgroundColor: "#800080",
                  "&:hover": { backgroundColor: "#9b009b" },
                  width:150
                }}
              >
                Vender Login
              </Button>
            </Box>
          </Container>
        )}
      </Box>
    </>
  );
};

export default Tender;
