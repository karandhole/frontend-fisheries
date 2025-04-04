import { Box,Card,Typography,Grid,Container } from '@mui/material'
import React,{useEffect, useMemo, useState} from 'react'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/d10.jpg'
import { getRemainingTime } from '../../utiils/dateFormatter'
import star from '../../assets/star.png'
import { pxToRem } from '../../utiils/utility'

const PrizeCard = ({heading, amount,tagline}) => {
    const {t} = useTranslation();
    return(
        <Card sx={{p:2,m:2,cursor:'pointer',
            transition: 'box-shadow 0.5s ease',
            ':hover': {
              boxShadow: 8, 
            }}} elevation={2} >
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><Typography>{t('competitionOrganized')}</Typography><Typography sx={{fontWeight:700,borderRadius:2,backgroundColor:'aqua',px:1,py:0.5}}>{t('august')} 2024</Typography></Box>
            <Typography sx={{textAlign:'center',fontSize:pxToRem(18),my:2,fontWeight:700}} variant='body1'>{heading}</Typography>
            <Typography textAlign='center' variant='body2'>{amount}</Typography>
            {tagline && <Box sx={{display:'flex',justifyContent:'flex-end'}}><Typography sx={{px:0.8,py:0.5,bgcolor:'#800080',borderRadius:2,color:'white'}} variant='caption'>{tagline}</Typography></Box>}
        </Card>
    )
}


const Prizes = () => {
    const {t} = useTranslation();
    const [counter,setCounter] = useState([]);
    useEffect(()=>{
        const id = setInterval(()=>{setCounter(getRemainingTime('2024-08-31T23:59:59'))},[1000]);
        return ()=>clearInterval(id);
    },[])

    const cardData = [
        {
            id:'01',
            heading:t('logoDesignPrize'),
            amount:'Rs. 50,000'
        },
        {
            id:'02',
            heading:t('taglineContestPrize'),
            amount:'Rs. 25,000',
            tagline:t('englishTagline'),
        },
        {
            id:'03',
            heading:t('taglineContestPrize'),
            amount:'Rs. 25,000',
            tagline:t('marathiTagline'),
        }
    ]
  return (
    <Box sx={{backgroundColor:'#fff',py:3}}>
    <Typography sx={{textAlign:'center',fontWeight:700,py:2}} variant='h6'>{Array.from({length:3}).map(()=>(
          <Typography component='img' height={10} sx={{objectFit:'cover',ml:0.5}} src={star} />
         ))} {t('winPrizes')} {Array.from({length:3}).map(()=>(
            <Typography component='img' height={10} sx={{objectFit:'cover',ml:0.5}} src={star} />
           ))}</Typography>
             <Typography sx={{textAlign:'center',fontWeight:700,pb:2}} variant='h4'>{t('prizes')}</Typography>
    <Typography sx={{textAlign:'center',color:'#727289',width:{xs:350,md:400},mx:'auto',fontWeight:700}} variant='body1'>{t('participateDescription')}</Typography>
    <Container maxWidth='lg'>
    <Grid spacing={2} container sx={{py:5}} >
        <Grid item md={6} sx={{position:'relative'}} sm={12} xs={12}>
            <Box component='img' src={bg} sx={{width:{xs:350,md:450,lg:550}}} />
            <Box sx={{ display: 'flex',
      gap: 1,
      position: 'absolute',
      top: '90%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      justifyContent: 'center',}}>
                {counter.map(({type,value})=>(
 <Box key={type} sx={{borderRadius:5,border:'1px solid aqua',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
 <Typography sx={{color:'black',px:2,py:1}} variant='body2' fontWeight={700}>{value}</Typography>
 <Typography sx={{color:'black',backgroundColor:'aqua',px:2,py:1,borderRadius:'0  0 20px 20px'}} variant='body1'>{t(type)}</Typography>
 </Box>
                ))}
            </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
            {cardData.map(({id,heading,amount,tagline})=>(
                <PrizeCard key={id} heading={heading} amount={amount} tagline={tagline} />
            ))}
            </Grid>
    </Grid>
    </Container>
    <Typography variant='body1' sx={{fontStyle:'italic',textAlign:'center',fontWeight:600}}>{t('participationCertificate')}</Typography>
    </Box>
  )
}

export default Prizes
