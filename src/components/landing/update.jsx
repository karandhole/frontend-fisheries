import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import shudhhipatrk from '../../assets/shudhhipatrk.pdf'

const Update = () => {
    const {t} = useTranslation();
  return (
    <Box sx={{display:'flex',justifyContent:'center',bgcolor:'#f9f9f9',py:5}}>
        <Button LinkComponent={'a'} href={shudhhipatrk} download sx={{fontSize:15,color:'white',backgroundColor:'#800080','&:hover':{backgroundColor:'#9b009b'}}} variant='contained'>{t('sudhiPatrak')}</Button>
    </Box>
  )
}

export default Update