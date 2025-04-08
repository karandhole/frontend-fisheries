import React,{useState,useEffect} from 'react'
import { Box,Button,Typography } from '@mui/material'
import Breadcrumb from '../../components/breadCrumb'
import Table from '../../components/tender/table'
import ApiManager from '../../apiManager/apiManager'
import { AddOutlined } from '@mui/icons-material'
import CustomAlert from '../../components/customAlert'
import Add from '../../components/tender/add'
import AuthDialog from '../../components/auth-dialog'

const Tender = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [data,setData] = useState([]);
  const [addOpen,setAddOpen] = useState(false)
  const [recall,setRecall] = useState(1);
  const [alertData,setAlertData] = useState({severity:'',message:''});
  const [authOpen,setAuthOpen] = useState(false);

  useEffect(()=>{
    (async ()=>{
      try {
        const response = await ApiManager.getTenders();
        if(response.data?.status){
          setData(response.data?.data);
        }
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    })();
  },[recall])

  const handlConfirm = () => {
    setAuthOpen(false);
    setAddOpen(true);
  }
  return (
   <>
   {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
    <Box>
        <Typography variant='h4' fontWeight='700'>Tender</Typography>
        <Breadcrumb currentPage="Tender"/>
        <Box display='flex' justifyContent='flex-end' alignItems='center'>
        <Button  onClick={()=>setAuthOpen(true)} variant='contained' endIcon={<AddOutlined />}>Add Tender</Button>
        </Box>
        <Box mt={2}>
        <Table isLoading={isLoading} rowData={data}/>
        {addOpen && <Add onOpen={addOpen} onClose={()=>setAddOpen(false)} recall={()=>setRecall(recall + 1)} setAlertData={setAlertData} />}
        <AuthDialog onOpen={authOpen} onClose={()=>setAuthOpen(false)} onConfirm={handlConfirm} />
        </Box>
    </Box>
   </>
  )
}

export default Tender
