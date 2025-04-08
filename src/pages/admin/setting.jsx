import { Box, Typography,InputLabel,TextField, Button, Tooltip, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/breadCrumb'
import { useFormik } from 'formik'
import { adminSettingSchema } from '../../utiils/validationSchema'
import { HelpOutlined } from '@mui/icons-material'
import ApiManager from '../../apiManager/apiManager'
import CustomAlert from '../../components/customAlert'
import DialogLoader from '../../components/DialogLoader'

const Setting = () => {
    const [alertData,setAlertData] = useState({severity:'',message:''});
	const [isLoading,setIsLoading] = useState(true);
	const [isSubmitting,setIsSubmitting] = useState(false);

	const handleSubmit = async (values) => {
		setIsSubmitting(true)
		const response = await ApiManager.updateAdmin(values);
          console.log(response)
          if(response.data?.status){
            setAlertData({severity:'success',message:"Data updated successfully"});
          }else{
            setAlertData({severity:'error',message:response?.data?.message});
          }
		  setIsSubmitting(false)
	}

	const formik = useFormik({
        initialValues:{
            primaryPhone:'',
			secondaryPhone:'',
        },
        onSubmit:handleSubmit,
        validationSchema:adminSettingSchema
    })

	useEffect(() => {
		(async () => {
			const response = await ApiManager.getAdmin();
			if (response.data?.status) {
			  formik.setFieldValue("primaryPhone",response.data?.data?.primaryPhone || "");
			  formik.setFieldValue("secondaryPhone",response.data?.data?.secondaryPhone || "");
			}
			setIsLoading(false);
		})();
	  }, []);

	const getErrorProps = (field) => {
        return {
          helperText: formik.touched[field] && formik.errors[field],
          error: formik.touched[field] && Boolean(formik.errors[field])
        };
      };
  return (
	<Box>
		<DialogLoader isLoading={isLoading} />
        {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
	<Typography variant='h4' fontWeight='700'>Settings</Typography>
	<Breadcrumb currentPage="Settings"/>
	<Box sx={{my:2}}>
		<Box component='form' autoComplete='off' maxWidth='sm' mx='auto' sx={{bgcolor:'white',p:3,borderRadius:5}} onSubmit={formik.handleSubmit}>
		<InputLabel>Primary Phone No.<Tooltip title='This number is used for authorization when adding a tender or viewing financial documents.'><HelpOutlined sx={{fontSize:15}} color='info'/></Tooltip></InputLabel>		
		<TextField size='small' fullWidth {...formik.getFieldProps("primaryPhone")} {...getErrorProps("primaryPhone")} />
		<InputLabel sx={{mt:2}}>Secondary Phone No.<Tooltip title='This number is used to receive notifications on new tender submissions.'><HelpOutlined sx={{fontSize:15}} color='info'/></Tooltip></InputLabel>				
		<TextField size='small' fullWidth {...formik.getFieldProps("secondaryPhone")} {...getErrorProps("secondaryPhone")} />
		<Box sx={{display:'flex',justifyContent:'flex-end',mt:2}}>
		<Button disabled={isSubmitting} variant='contained' type='submit' color='info'>{isSubmitting && <CircularProgress sx={{position:'absolute'}} size={20}/>}Submit</Button>
		</Box>
		</Box>
	</Box>
</Box>
  )
}

export default Setting