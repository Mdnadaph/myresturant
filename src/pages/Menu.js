import React from 'react';
import {Link} from "react-router-dom"
import Layout from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardContent,Button, CardMedia, Typography } from '@mui/material'
import {MenuList} from "../data/data";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Menu = () => {
  return (
    <Layout>
    <Box sx={{bgcolor:"#f3f2ff"}}>
       <Typography 
       variant='h4' 
       sx={{ 
        textAlign:'center', 
        mt:0,
        fontWeight:"bold",
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:'2rem',
        },
        color:'#9f3c96'}}
       >Our Delicious Foods
       </Typography>
      <Box sx={{
        display:'flex', 
       flexWrap:'wrap',
       justifyContent:'center'
       }}>
        {
          MenuList.map(menu => (
            <Card sx={{ maxWidth:'390px',m:2}}>
              <CardActionArea>
                <CardMedia 
                sx={{ minHeight:'400px'}} 
                component={'img'} 
                src={menu.image} 
                alt={menu.name}
                />
                <CardContent>
                  <Typography sx={{color:"#9f3c96"}} variant='h5' gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography sx={{color:"#9f3c96"}} variant='body2'>{menu.description}</Typography>
                  <Typography>
                  <CurrencyRupeeIcon  sx={{color:"#9f3c96",fontSize:"1"}}/>{menu.price}</Typography>
                  <Link to="/contact">
                   <Button  sx={{ml:0, mb:2, bgcolor:"#9f3c96"}} variant="contained">ORDER NOW</Button>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
      </Box>
    </Layout>
  )
}

export default Menu
