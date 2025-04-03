import React,{useState,useEffect} from 'react'
import { Box,Typography } from '@mui/material'
import Breadcrumb from '../../components/breadCrumb'
import Table from '../../components/vender/table'
import ApiManager from '../../apiManager/apiManager'

const Vender = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [data,setData] = useState([]);

  useEffect(()=>{
    (async ()=>{
      try {
        const response = await ApiManager.getVender();
        if(response.data?.status){
          setData(response.data?.data);
        }
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    })();
  },[])
  return (
   <>
    <Box>
        <Typography variant='h4' fontWeight='700'>Vendor</Typography>
        <Breadcrumb currentPage="Vendor"/>
        <Box mt={2}>
        <Table isLoading={isLoading} rowData={data}/>
        </Box>
    </Box>
   </>
  )
}

export default Vender
