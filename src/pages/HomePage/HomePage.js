import React from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import backgroundImage from '../../imgs/background.jpg'; // Ruta de tu imagen

const GymMenu = () => {
  return (
    <Box
      sx={{
        height: '85vh',
        padding: 0,
        margin: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: { xs: '1rem', sm: '3rem', md: '5rem' },
        paddingTop: { xs: '6rem', sm: '9rem', md: '9rem' },
      }}
    >
      {/* Navbar */}
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Anton, sans-serif',
              fontWeight: 'bold',
              color: 'white',
              fontSize: { xs: '2rem', sm: '4rem', md: '5rem' },
              mt: -3,
            }}
          >
            CENTRAL GYM
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Container
        maxWidth="sm"
        sx={{
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Título */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            whiteSpace: 'normal',
            overflow: 'visible',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Anton, sans-serif',
              fontWeight: 'bold',
              textAlign: 'left',
              color: '#ff383e',
              fontSize: { xs: '2.5rem', sm: '4rem', md: '6rem' },
              lineHeight: '1.1',
              wordWrap: 'break-word',
              mt: -3,
            }}
          >
            AQUI EMPIEZA TU TRANSFORMACION.
          </Typography>
        </Box>

        {/* Botones alineados a la izquierda */}
        <Box
          sx={{
            display: 'flex',
            textAlign: 'left',
            flexDirection: 'column',
            paddingLeft: { xs: '1rem', sm: '2rem' },
            paddingTop: '0rem',
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              backgroundColor: '#808080',
              color: 'white',
              width: { xs: '150px', sm: '200px' },
              textTransform: 'none',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              '&:hover': { backgroundColor: '#666666' },
            }}
          >
            Iniciar Sesión
          </Button>
          <Button
            variant="contained"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              backgroundColor: '#808080',
              color: 'white',
              width: { xs: '150px', sm: '200px' },
              textTransform: 'none',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              '&:hover': { backgroundColor: '#cc0000' },
            }}
          >
            ¡Regístrate Ahora!
          </Button>
        </Box>

        {/* Iconos de redes sociales */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            gap: 2,
            paddingLeft: { xs: '1.5rem', sm: '5.7rem' },
          }}
        >
          <InstagramIcon sx={{ color: 'white', fontSize: { xs: 24, sm: 30 } }} />
          <WhatsAppIcon sx={{ color: 'white', fontSize: { xs: 24, sm: 30 } }} />
        </Box>
      </Container>
    </Box>
  );
};

export default GymMenu;