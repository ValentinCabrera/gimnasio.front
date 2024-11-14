import { AppBar, Box, Button, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

import Logo from '../imgs/logo.png'

export default function Header() {
  return (
      <AppBar sx={{background:'#de0202', padding:{xs:'2px', md:'1px'}}}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
        <Box
        sx={{
          flex: "0 0 auto",
          marginRight: "20px",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Sidebar />
      </Box>
          <Box sx={{display:'flex', alignItems:'center', flex:1}}>
            <Box sx={{width:'80px'}}>
              <img src={Logo} style={{width:'100%'}}/>
            </Box>
            <Typography fontSize={'22px'} fontWeight={'bold'}>CENTRAL GYM</Typography>
          </Box>
          <Box sx={{flex:1, display:{xs:'none', md:'block'}}}>
            <Box sx={{display:'flex', alignItems:'center', gap:'20px', justifyContent:'center'}}>
              <Button sx={{color:'#fff', fontSize:'24px'}}>
                <Typography fontSize={'22px'} fontWeight={'bold'}>Inicio</Typography>
              </Button>
              <Button sx={{color:'#fff'}}>
                <Typography fontSize={'22px'} fontWeight={'bold'}>Contacto</Typography>
              </Button>
              {/* <Button sx={{color:'#fff'}}>
                <Typography fontSize={'22px'} fontWeight={'bold'}>Mis planes</Typography>
              </Button> */}
            </Box>
          </Box>
          <Box sx={{flex:1, display:'flex', justifyContent:'flex-end'}}>
            <Button><Typography fontSize={'22px'} sx={{color:'#fff'}}>Iniciar sesión</Typography></Button>
          </Box>
        </Toolbar>
      </AppBar>
      
  );
}
