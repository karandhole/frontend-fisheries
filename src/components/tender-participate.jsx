import React, { useState } from 'react'
import ApiManager from '../apiManager/apiManager';
import { useFormik } from 'formik';
import { tenderSubmissionSchema } from '../utiils/validationSchema';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, InputLabel, TextField } from '@mui/material';
import { getDecodedToken } from '../utiils/utility';
import { CloseOutlined } from '@mui/icons-material';

const TenderParticipate = ({onOpen,onClose,tenderData,setAlertData,recall }) => {
    const [isSubmitting,setIsSubmitting] = useState(false);
    const handleSubmit = async (values) => {
        console.log(values)
            const formData = new FormData();
            formData.append('vendor',getDecodedToken()?._id)
            formData.append('tendor',tenderData?._id)
            formData.append('uploadedDocument',values.uploadedDocument);
            formData.append('financialDocument',values.financialDocument);
            formData.append('paymentReceipt',values.paymentReceipt);
            try {
                setIsSubmitting(true);
                const response = await ApiManager.createTenderSubmission(formData);
                if(response.data?.status){
                  setAlertData({severity:'success',message:response?.data?.message});
                  recall()
                }else{
                  setAlertData({severity:'error',message:response?.data?.message});
                }
            } catch (error) {
                console.log(error)
            }finally{
              setIsSubmitting(false)
              onClose();
            }
        }
  
      const formik = useFormik({
        initialValues:{
            tendorType:tenderData.tenderType,
            vendor:'',
            tendor:'',
            uploadedDocument:'',
            financialDocument:'',
            paymentReceipt:'',
        },
        onSubmit:handleSubmit,
        validationSchema:tenderSubmissionSchema
    })
    const getErrorProps = (field) => {
        return {
          helperText: formik.touched[field] && formik.errors[field],
          error: formik.touched[field] && Boolean(formik.errors[field])
        };
      };
  return (
    <Dialog
    maxWidth="xs"
    fullWidth
     open={onOpen}
     onClose={onClose}
   >
     <DialogTitle>
       <>Upload Required Documents</>
       <IconButton onClick={onClose}><CloseOutlined/></IconButton>
     </DialogTitle>
     <form autoComplete='off' onSubmit={formik.handleSubmit}> 
     <DialogContent>
       <Grid container spacing={1} >
     
         <Grid item sm={12} md={12}>
         <InputLabel sx={{mb:0.5}}>Technical Bid</InputLabel>
         <TextField inputProps={{ accept: "application/pdf" }} {...getErrorProps("uploadedDocument")} fullWidth type="file" size='small' onChange={(event)=>formik.setFieldValue("uploadedDocument",event.currentTarget.files[0])} />
         </Grid>
         <Grid item sm={12} md={12}>
         <InputLabel sx={{mb:0.5}}>Financial Bid</InputLabel>
         <TextField inputProps={{ accept: "application/pdf" }} {...getErrorProps("financialDocument")} fullWidth type="file" size='small' onChange={(event)=>formik.setFieldValue("financialDocument",event.currentTarget.files[0])} />
         </Grid>

         {formik.values.tendorType === "RFP Tender" && <Grid item sm={12} md={12}>
         <InputLabel sx={{mb:0.5}}>Payment Receipt</InputLabel>
         <TextField inputProps={{ accept: ['image/png', 'image/jpg', 'image/jpeg'] }} {...getErrorProps("paymentReceipt")} fullWidth type="file" size='small' onChange={(event)=>formik.setFieldValue("paymentReceipt",event.currentTarget.files[0])} />
         </Grid>}
       </Grid>
     </DialogContent>
     <DialogActions>
       <Button variant='contained' color='info' type='submit' disabled={isSubmitting} >{isSubmitting && <CircularProgress sx={{position:'absolute'}} size={20}/>} Submit</Button>
     </DialogActions>
     </form>
     
   </Dialog>
  )
}

export default TenderParticipate
