import React,{useState,useEffect} from 'react'
import { Box,Typography,Grid, CircularProgress, Fab } from '@mui/material'
import Breadcrumb from '../../components/breadCrumb'
import ApiManager from '../../apiManager/apiManager'
import TenderCard from '../../components/tender-card'
import { getDecodedToken } from '../../utiils/utility'
import { CurrencyRupeeOutlined, MonetizationOn } from '@mui/icons-material'
import PaymentDialog from '../../components/payment'

const ActiveTender = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [data,setData] = useState([]);
  const [userApplied,setUserApplied] = useState([])
  const [recall,setRecall] = useState(1);
  const [paymentOpen,setPaymentOpen] = useState(false)

  useEffect(()=>{
    (async ()=>{
      try {
        const [response1,response2] = await Promise.all([ApiManager.getTenders(),ApiManager.getSubmissionByVendorId(getDecodedToken()?._id)]);
        console.log(response1,response2)
        if(response1.data?.status){
          setData(response1.data?.data);
        }
        if(response2.data?.status){
            let arr = [];
            response2.data?.data?.forEach(element => {
                arr.push(element?.tendor?._id);                
            });
            setUserApplied(arr);
          }
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    })();
  },[recall])
  return (
   <>
    <Box>
        <Typography variant='h4' fontWeight='700'>Active Tender</Typography>
        <Breadcrumb currentPage="Active Tender"/>
        <Box mt={2}>
        {isLoading ? <CircularProgress /> :
         <Grid container spacing={2}>
            {data.map((tender)=>(
                <Grid item key={tender?._id} xs={12} md={4}>
                <TenderCard recall={()=>setRecall(recall + 1)} isMain={false} isApplied={userApplied.includes(tender?._id)} data={tender} />
                </Grid>
            ))}
         </Grid>}
        </Box>
    </Box>
        <Box sx={{position:'fixed',bottom:20,right:20}}>
          <Fab onClick={()=>setPaymentOpen(true)} color='primary' variant="extended">
          <CurrencyRupeeOutlined sx={{ mr: 1 }} />
          Payment Details
          </Fab>
        </Box>
        <PaymentDialog onOpen={paymentOpen} onClose={()=>setPaymentOpen(false)}/>
   </>
  )
}

export default ActiveTender
