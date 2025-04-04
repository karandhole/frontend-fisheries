import React,{useState} from 'react'
import { Box,Typography,TextField,InputAdornment,Button,CircularProgress, Divider } from '@mui/material'
import { Google, Lock,Mail } from '@mui/icons-material'
import bg from '../../assets/user-login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import ApiManager from '../../apiManager/apiManager'
import CustomAlert from '../../components/customAlert'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { venderLoginSchema } from '../../utiils/validationSchema'
import { pxToRem } from '../../utiils/utility'

const VenderLogin = () => {
    const [formData,setFormData] = useState({email:"",password:""})
    const [isLoading,setIsLoading] = useState(false);
    const [alertData,setAlertData] = useState({severity:'',message:''});
    const {t} = useTranslation()

    const navigate = useNavigate();
   
    const handleSubmit = async (values) => {
        try{
        setIsLoading(true)
        const response = await ApiManager.venderLogin(values);
        setIsLoading(false)
        if(response.data.status){
        const token = response?.data?.token;
        sessionStorage.setItem('@authToken',token);
        sessionStorage.setItem('@userType','vender')
        navigate('/dashboard')
        window.location.reload();
        }else{
          setAlertData({severity:'error',message:response?.data?.message});
        }
    }
    catch(err){
        console.log(err)
        setIsLoading(false)
    }
    }

    const formik = useFormik({
      initialValues:{
          userName:'',
          password:''
      },
      onSubmit:handleSubmit,
      validationSchema:venderLoginSchema
  })

  const getErrorProps = (field) => {
      return {
        helperText: formik.touched[field] && formik.errors[field],
        error: formik.touched[field] && Boolean(formik.errors[field])
      };
    };
  return (
    <Box
    sx={{
      backgroundColor: "#ECECEC",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    {alertData.message && <CustomAlert severity={alertData.severity} onOpen={Boolean(alertData.message)} onClose={()=>setAlertData({...alertData,message:null})} message={alertData.message}/>}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems:'center',
        backgroundColor: "white",
        gap: 5,
        paddingX: 5,
        paddingY: 2,
        borderRadius: 5,
      }}
    >
      <Box>
        <form autoComplete='off' onSubmit={formik.handleSubmit}>
        <Box display="flex" alignItems="center">
          {/* <img src={'logo'} style={{ width: "2rem" }} /> */}
          <Typography variant="h4" fontWeight='700' >
            {t("welcomeBack")}
          </Typography>
        </Box>
        <Typography variant="h5" fontSize={pxToRem(25)}>
          {t("logIntoYourAccount")}
        </Typography>
        <Typography mb={2} pr={2} color="secondary" variant="body1">
          {t("enterUserNameAndPasswordOrMobile")}
        </Typography>
        <TextField
          sx={{ display: "block", mb: 2 }}
          fullWidth
          size="small"
          placeholder="Username / Mobile"
          variant="outlined"
          {...formik.getFieldProps("userName")} {...getErrorProps("userName")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail size={15} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ display: "block", mb: 2 }}
          fullWidth
          size="small"
          placeholder="Password"
          variant="outlined"
          type="password"
          {...formik.getFieldProps("password")} {...getErrorProps("password")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock size={15} />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" type='submit' disabled={isLoading} fullWidth={true} >
          {isLoading ? <CircularProgress size={24} /> : t("signIn")}
        </Button>
        </form>



        <Box mt={2}>
        <Box>
        <Typography variant='caption' sx={{display:'flex',justifyContent:'flex-end',mt:1}}>{t("dontHaveAnAccount")} <span style={{color:'blue',cursor:'pointer'}}><Link style={{textDecoration:'none'}} to='/tender'>{t("signUp")}</Link></span></Typography>
        <Divider sx={{my:1}}/>
        {/* <Typography variant='caption' sx={{display:'flex',justifyContent:'center'}}><span style={{color:'blue',cursor:'pointer'}}><Link style={{textDecoration:'none'}} to='/forgot-password'>{t('forgotPassword')}</Link></span></Typography> */}
        </Box>
        </Box>




      </Box>
      <Box
        sx={{
          "@media (max-width:476px)": {
            display: "none",
          },
        }}
      >
        <Box sx={{borderRadius:'10px',objectFit:'cover'}} component="img" height={430} width={300} src={bg} />
      </Box>
    </Box>
  </Box>
  )
}

export default VenderLogin
