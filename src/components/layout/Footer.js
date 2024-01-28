import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => { 
  return (
    <>
      <Box sx={{ textAlign:"center", bgcolor:'#c0bfdf', color:'#9f3c96', p:3}}>
       <Box sx={{ my:3, "& svg":{
        fontSize:"60px",
        cursor:"pointer",
        mr:2
       },
       "& svg:hover":{
        color:"#313d91",
        transform:'TranslateX(5px)',
        transition:"all 400ms",
       }
       }}>
      <InstagramIcon/>
       <YouTubeIcon/>
       <FacebookIcon/>
       <TwitterIcon/>
       </Box>
        <Typography variant='h5' sx={{"@media (max-width:600px)":{
            fontSize:"1rem"
        }}}>@ll right reserved &copy; 2024 my resturant</Typography>
      </Box>
    </>
  )
}

export default Footer
