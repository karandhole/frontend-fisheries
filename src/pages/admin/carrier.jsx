import React,{useState,useEffect} from 'react'
import { Box,Button,Typography } from '@mui/material'
import Breadcrumb from '../../components/breadCrumb'
import ApiManager from '../../apiManager/apiManager'
import { AddOutlined } from '@mui/icons-material'
import CustomAlert from '../../components/customAlert'
import Add from '../../components/career/add'
import Table from '../../components/career/table'

const AdminCarrier = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [data,setData] = useState([]);
  const [addOpen,setAddOpen] = useState(false)
  const [recall,setRecall] = useState(1);
  const [alertData,setAlertData] = useState({severity:'',message:''});

  useEffect(()=>{
    (async ()=>{
      try {
        const response = await ApiManager.getCareers();
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

  
  return (
   <>
   {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
    <Box>
        <Typography variant='h4' fontWeight='700'>Career</Typography>
        <Breadcrumb currentPage="Career"/>
        <Box display='flex' justifyContent='flex-end' alignItems='center'>
        <Button  onClick={()=>setAddOpen(true)} variant='contained' endIcon={<AddOutlined />}>Add Opening</Button>
        </Box>
        <Box mt={2}>
        <Table isLoading={isLoading} rowData={data} recall={() => setRecall(recall + 1)} setAlertData={setAlertData} />
        {addOpen && <Add onOpen={addOpen} onClose={()=>setAddOpen(false)} recall={()=>setRecall(recall + 1)} setAlertData={setAlertData} />}
        </Box>
    </Box>
   </>
  )
}

export default AdminCarrier
