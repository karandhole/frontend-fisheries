import { Card,CardContent,Typography,CardActions,Button, Chip, Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFormatDate, isEndGreaterFromToday } from "../utiils/dateFormatter";
import ApiManager from "../apiManager/apiManager";
import TenderParticipate from "./tender-participate";
import CustomAlert from "./customAlert";
import TenderForm from "./participate/form";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "./confirmDialog";

const TenderCard = ({isApplied,data,isMain,recall}) => {
    const [url,setUrl] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [addOpen,setAddOpen] = useState(false);
    const [createUser,setCreateUser] = useState(false);
    const [alertData,setAlertData] = useState({severity:'',message:''});
    const navigate = useNavigate()

    useEffect(() => {
       const getUrl = async () => {
          try {
            const response = await ApiManager.getSignedUrl(data?.tendorPdf);
            if (response.data?.status) {
                setUrl(response.data?.data);
            }
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        }
        if(data?.tendorPdf){
            getUrl();
        }
      }, []);

      const handleOpen = () => {
        if(isMain){
            if(sessionStorage.getItem('@userType') === "vender"){
              navigate('/dashboard')
            }else{
            setCreateUser(true)
            }
        }else{
            setAddOpen(true);
        }
      }
  return (
    <Card sx={{borderRadius:2,boxShadow:2}}>
        {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
      <CardContent sx={{minHeight:175}}>
        <Typography variant="h5" component="div">
          {data?.name}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {data?.description}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 1.5 }}>
          {getFormatDate(data?.startDate)} to {getFormatDate(data?.endDate)}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'space-between'}}>
      <Chip label={data?.tenderType} size="small" color="info" />
      {data?.tenderType === "RFP Tender" && <Typography variant="body2" sx={{ color: "text.secondary",fontSize:15}}>
      ₹{data?.participateAmount}
        </Typography>}
        <Box sx={{display:'flex',gap:1,justifyContent:'flex-end', flexWrap:'wrap'}}>
          <Button LinkComponent={'a'} href={url} target="_blank" download size="small" disabled={isLoading} variant="outlined">{isLoading && <CircularProgress sx={{position:'absolute'}} size={20}/>}Download PDF</Button>
        <Button onClick={handleOpen} size="small" variant="outlined" disabled={isApplied || isEndGreaterFromToday(data?.endDate)} color="info">{isApplied ? "Applied" : isEndGreaterFromToday(data?.endDate) ? "Expired" : "Apply"}</Button>
        </Box>
      </CardActions>
      {addOpen && <TenderParticipate recall={recall} setAlertData={setAlertData} onOpen={addOpen} onClose={()=>setAddOpen(false)} tenderData={data}/>}
      {createUser && <TenderForm onOpen={createUser} onClose={()=>setCreateUser(false)} />}
    </Card>
  );
};

export default TenderCard;
