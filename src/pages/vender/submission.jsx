import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  CircularProgress,
  CardActions,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import Breadcrumb from "../../components/breadCrumb";
import ApiManager from "../../apiManager/apiManager";
import { getDecodedToken } from "../../utiils/utility";
import { getFormatDate } from "../../utiils/dateFormatter";
import DownloadPdf from "../../components/DownloadPdf";

const SubmissionCard = ({ data }) => {
  console.log(data)

  const getStatus = (type) => {
    switch(type){
      case "pending":
        return "Pending";
      case "technicalApproved":
        return "Technical Approved"
      case "rejected":
        return "Rejected"
      case "financialApproved":
        return "Financial Approved"
      default :
       return "Status"
    }
  }

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent sx={{minHeight:180}}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h5" component="div">
          {data?.tendor?.name}
        </Typography>
        <Chip label={getStatus(data?.status)}  size="small" color="warning" />

        </Box>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {getFormatDate(data?.tendor?.startDate)} to{" "}
          {getFormatDate(data?.tendor?.endDate)}
        </Typography>
        {data?.tendor?.tenderType === "RFP Tender" && (
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: 15 }}
          >
            <span style={{ fontWeight: 500, color: "grey" }}>
              Applicable Fee:
            </span>{" "}
            ₹ {data?.tendor?.participateAmount}
          </Typography>
        )}
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 1.5 }}>
          <span style={{ fontWeight: 700, color: "grey" }}>Applied on:</span>{" "}
          {getFormatDate(data?.createdAt)}
        </Typography>
        <br />
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Chip label={data?.tendor?.tenderType} size="small" color="info" />
        <Box display='flex' flexWrap='wrap' justifyContent='flex-end' gap={1}>
          <DownloadPdf label="Technical Bid" imageKey={data?.uploadedDocument} />
          <DownloadPdf label="Financial Bid" imageKey={data?.financialDocument} />
        </Box>
      </CardActions>
    </Card>
  );
};

const TenderSubmissionPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await ApiManager.getSubmissionByVendorId(
          getDecodedToken()?._id
        );
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
      <Box mb={2}>
        <Typography variant="h4" fontWeight="700">
          Submission Status
        </Typography>
        <Breadcrumb currentPage="Submission Status" />
      </Box>
      {isLoading ? <CircularProgress /> :
      <Grid container spacing={2}>
        {data.map((itemData) => (
          <Grid item xs={12} md={4}>
            <SubmissionCard data={itemData} />
          </Grid>
        ))}
      </Grid>}
    </>
  );
};

export default TenderSubmissionPage;
