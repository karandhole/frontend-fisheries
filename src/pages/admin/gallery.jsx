import React,{useState,useEffect} from 'react'
import { Box,Button,Grid,Typography } from '@mui/material'
import Breadcrumb from '../../components/breadCrumb'
import ApiManager from '../../apiManager/apiManager'
import { AddOutlined } from '@mui/icons-material'
import CustomAlert from '../../components/customAlert'
import Add from '../../components/gallery/add'
import ImageCard from '../../components/gallery/image-card'

const AdminGallery = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [data,setData] = useState([]);
  const [addOpen,setAddOpen] = useState(false)
  const [recall,setRecall] = useState(1);
  const [alertData,setAlertData] = useState({severity:'',message:''});

  useEffect(()=>{
    (async ()=>{
      try {
        const response = await ApiManager.getGalleryImages();
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
        <Typography variant='h4' fontWeight='700'>Gallery</Typography>
        <Breadcrumb currentPage="Gallery"/>
        <Box display='flex' justifyContent='flex-end' alignItems='center'>
        <Button  onClick={()=>setAddOpen(true)} variant='contained' endIcon={<AddOutlined />}>Upload Image</Button>
        </Box>
        <Box mt={2}>
        {addOpen && <Add onOpen={addOpen} onClose={()=>setAddOpen(false)} recall={()=>setRecall(recall + 1)} setAlertData={setAlertData} />}
            <Typography textAlign='center' sx={{textDecoration:'underline',fontWeight:600,mb:2}} variant='h6'>Uploaded Images</Typography>
            <Grid container spacing={2}>
                {data.map(({filePath,createdAt,_id})=>(
                    <Grid item xs={6} md={3} key={_id}>
                    <ImageCard filePath={filePath} id={_id} createdAt={createdAt} recall={()=>setRecall(recall + 1)} setAlertData={setAlertData} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
   </>
  )
}

export default AdminGallery
