import React from 'react'
import { Box,Typography,Button, Grid,Container } from '@mui/material'
import bg from '../../assets/d9.jpg'
import { useTranslation } from 'react-i18next'
import { LoginOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import star from '../../assets/star.png'
import { pxToRem } from '../../utiils/utility'

import durationEN from "../../assets/duration-eng.png"

import durationMAR from "../../assets/duration-marathi.png"



const Duration = () => {
    const {t,i18n} = useTranslation();
    const navigate = useNavigate();
    const handleSignIn = () => {
      if(sessionStorage.getItem('@authToken') && sessionStorage.getItem('@userType') === "user"){
        navigate('/dashboard')
      }else{
          navigate('/user-login')
      }
    }

    const image = i18n.language === "en" ? durationEN : durationMAR
  return (
    <Box sx={{backgroundColor:'#fff',py:3}}>
         {/* <Typography sx={{textAlign:'center',fontWeight:700}} variant='h4'>{Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))} {t('competitionDuration')} {Array.from({length:3}).map(()=>(
          <Typography component='img' height={12} src={star} />
         ))} </Typography> */}
         <Container maxWidth="lg">
         <Grid container direction="row">
        <Grid sx={{display:'flex',py:5,px:2,flexDirection:'column',gap:5}} item md={6} >

          <Box>
        <Typography sx={{fontWeight:700,pb:2}} variant='h6'>{t('empoweredDisabled')} {Array.from({length:3}).map(()=>(
          <Typography component='img' height={10} sx={{objectFit:'cover',ml:0.5}} src={star} />
         ))} </Typography>  
        <Typography sx={{textAlign:'center',fontWeight:700}} variant='h4'>{t('competitionDuration')} </Typography>
        </Box>

            <Typography variant='body1' sx={{fontSize:pxToRem(18),textAlign:'center'}}>
                {t('competitionDescription')}
            </Typography>
            <Typography variant='body1' sx={{fontSize:pxToRem(18),textAlign:'center',fontWeight:'bold'}}>
                {t('congratsMsg')}
            </Typography>
            {/* <Typography variant='body1' sx={{fontSize:pxToRem(18),textAlign:'center'}}>
            {t('competitionDuration')} <span style={{fontWeight:700}}> 15-08-2024 {t('to')} 31-08-2024</span>
            </Typography> */}
            <Box mx='auto'><Button variant='contained' onClick={handleSignIn} size="large" endIcon={<LoginOutlined/>} sx={{color:'white',backgroundColor:'#800080','&:hover':{backgroundColor:'#9b009b'}}}>{t('registerNow')}</Button></Box>
        </Grid>
        <Grid sx={{display:'flex',justifyContent:{xs:'center',sm:'end'}}} item sm={12} xs={12} md={6}><Box sx={{borderRadius:5,objectFit:'contain',width:{xs:300,sm:300,md:400}}}  component='img' src={image} /></Grid>
    </Grid>
    </Container>
    </Box>
  )
}

export default Duration
