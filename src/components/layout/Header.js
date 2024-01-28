import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/HeaderStyles.css";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  // handle menu click function
  const handleDrawerTogle = ()=>{
    setMobileOpen(!mobileOpen)
  }
  // Menu drawer
  const drawer = (
    <Box onClick={handleDrawerTogle} sx={{textAlign:"center"}}>
     <Typography color={"goldenrod"} 
     variant='h6' 
     component={"div"} 
     sx={{flexGrow:1, my:2}}
     >
       <FastfoodIcon/>
        My Resturant
       </Typography>
       <Divider/>
        <ul className='mobile-navigation'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/menu'}>Menu</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>

        </ul>
    </Box>
  )
  
  return (
    <div>
     <Box>
      <AppBar component={"nav"} sx={{ bgcolor:"#a6b4e3"}}>
      <Toolbar>
      <IconButton color='inherit' 
      aria-level="open drawer" 
      edge="start"
      sx={{
        mr:2,
        display: {sm:"none"}
      }}
      onClick={handleDrawerTogle}
      >
        <MenuIcon/>
      </IconButton>
       <Typography color={"#313d91"} variant='h6' component={"div"} sx={{flexGrow:1}}>
       <FastfoodIcon/>
        My Resturant
       </Typography>
       <Box sx={{ display: { xs: 'none', sm: "block"}}}>
        <ul className='navigation-menu'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/menu'}>Menu</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>

        </ul>
       </Box>
      </Toolbar>
      </AppBar>
        <Box component="nav">
          <Drawer variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerTogle}
          sx={{display:{xs:'block',sm:'none'}, 
          "& .MuiDrawer-paper":{
          boxSizing:'border-box',
          width:'240px',
          }
          }}>
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
     </Box>
    </div>
  )
}

export default Header

