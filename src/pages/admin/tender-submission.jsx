import React, { useEffect, useState } from 'react'
import ApiManager from '../../apiManager/apiManager';
import { Autocomplete, Box, Button, Card, CardActions, CardContent, Chip, InputLabel, TextField, Typography, Grid, CircularProgress } from '@mui/material';
import DialogLoader from '../../components/DialogLoader';
import Breadcrumb from '../../components/breadCrumb';
import { getFormatDate } from '../../utiils/dateFormatter';
import DownloadPdf from '../../components/DownloadPdf';
import ConfirmDialog from '../../components/confirmDialog';
import CustomAlert from '../../components/customAlert';

const SubmissionCard = ({ data,setAlertData,setIsLoading,recall }) => {
  const [openConfirm,setOpenConfirm] = useState(false);
  const [updateData,setUpdateData] = useState({});
  
  const getStatus = (type) => {
    switch(type){
      case "pending":
        return "Approval Pending";
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

  const handleConfirm = async () => {
    console.log(updateData);
    setIsLoading(true)
    try {
      const response = await ApiManager.updateTendorSubmission(data?._id,updateData)
      if(response.data?.status){
        setAlertData({severity:'success',message:response?.data?.message});
      recall();
      }else{
        setAlertData({severity:'error',message:response?.data?.message});
      }
    } catch (error) {
      
    }finally{
      setIsLoading(false);
      setOpenConfirm(false)
    }

  }

  const handleOpenConfirm = (data) => {
    setUpdateData({status:data})
    setOpenConfirm(true)
  }

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent sx={{minHeight:150}}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography variant="h5" component="div">
          {data?.tendor?.name}
        </Typography>
        <Chip label={getStatus(data?.status)} size="small" color="warning" />
        </Box>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {getFormatDate(data?.tendor?.startDate)} to{" "}
          {getFormatDate(data?.tendor?.endDate)}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary"}}>
          <span style={{ fontWeight: 700, color: "grey" }}>Vendor Name:</span>{" "}
          {data?.vendor?.name}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary"}}>
          <span style={{ fontWeight: 700, color: "grey" }}>Vendor Email:</span>{" "}
          {data?.vendor?.email}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary"}}>
          <span style={{ fontWeight: 700, color: "grey" }}>Vendor Mobile No:</span>{" "}
          {data?.vendor?.mobileNo}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 1.5 }}>
          <span style={{ fontWeight: 700, color: "grey" }}>Applied on:</span>{" "}
          {getFormatDate(data?.createdAt)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Chip label={data?.tendor?.tenderType} size="small" color="info" />
        <Box display='flex' alignItems='center' gap={1}>
          {data?.tendor?.tenderType === "RFP Tender" && (data?.paymentReceipt ? <DownloadPdf label='Payment Receipt' imageKey={data?.paymentReceipt}/> : <Typography color='error' variant='caption'>Receipt NA</Typography>)}
          <DownloadPdf label='Technical Bid' imageKey={data?.uploadedDocument}/>
          {data?.status === "technicalApproved" ? <DownloadPdf label='Financial Bid' isAuthorize={true} imageKey={data?.financialDocument}/> : data?.status === "pending" ? <>
          <Button variant='outlined' onClick={()=>handleOpenConfirm("rejected")} size='small' color='error'>Reject</Button>
          <Button variant='contained' onClick={()=>handleOpenConfirm("technicalApproved")} size='small' color='info'>Approve</Button></> : null}
        </Box>
      </CardActions>
      <ConfirmDialog onOpen={openConfirm} onClose={()=>setOpenConfirm(false)} onConfirm={handleConfirm} title="Confirmation" message="Are you certain about your decision? Please confirm whether you'd like to confirm or cancel this request."/>
    </Card>
  );
};

const TenderSubmission = () => {

  const [selectedValue,setSelectedValue] = React.useState("");
  const [alertData,setAlertData] = React.useState({severity:'',message:''});
  const [tendersData,setTendersData] = React.useState([]);
  const [isLoading,setIsLoading] = React.useState(true);
  const [submissions,setSubmissions] = React.useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await ApiManager.getTenders();
        if (response.data?.status) {
          console.log(response.data?.data);
          setTendersData(response.data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleChange = async (event,value) => {
    if(value){
    setSelectedValue(value);
    console.log(value);
    setIsLoading(true)
    const response = await ApiManager.getSubmissionByTenderId(value?._id);
    if (response.data?.status) {
      setSubmissions(response?.data?.data)
    }
    setIsLoading(false)
    }
  }

  return (
    <Box mb={5}>
    {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
  <DialogLoader isLoading={isLoading} />
  <Typography variant='h4' fontWeight='700'>Tender Participants</Typography>
  <Breadcrumb currentPage="Tender Participants"/>
  <Box my={3}>
    <InputLabel>Select Tender</InputLabel>
    <Autocomplete
    options={tendersData}
    getOptionLabel={(option)=>option?.name}
    isOptionEqualToValue={(option, value) => option._id === value._id}
    fullWidth
    size='small'
    renderInput={(params) => <TextField {...params} placeholder='Please select Tender' />}
    onChange={handleChange}
  />
  </Box>
  {/* <Button  onClick={handleDownload} variant="contained">Download CSV</Button> */}
    <Grid container spacing={2}>
      {submissions.map((data)=>(
        <Grid item xs={12} md={6}>
        <SubmissionCard recall={()=>handleChange("",selectedValue)} setIsLoading={setIsLoading} setAlertData={setAlertData} data={data} />
        </Grid>
      ))}
    </Grid>
  </Box>
  )
}

export default TenderSubmission
