import React from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import backgroundImage from '../../imgs/background.jpg'; // Ruta de tu imagen

const GymMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
        paddingLeft: '5rem',
        paddingTop: '6rem',
      }}
    >
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Anton, sans-serif',
              fontWeight: 'bold',
              color: 'white',
              paddingLeft: '0rem',
              fontSize: '3.1rem', // Tamaño más grande para el título
              letterSpacing: '0.1em', // Espaciado entre letras
            }}
          >
            CENTRAL GYM
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="sm"
        sx={{
          padding: 0,
          margin: 0,
          textAlign: 'center', // Centrar el contenido
        }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h2'}
          sx={{
            fontFamily: 'Anton, sans-serif',
            fontWeight: 'bold',
            textAlign: 'left',
            color: '#ff383e',
            mb: 2,
            fontSize: isMobile ? '4rem' : '5.5rem', // Tamaño más grande para el texto principal
          }}
        >
          AQUI EMPIEZA TU TRANSFORMACION.
        </Typography>

        {/* Contenedor para los botones */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', // Botones uno debajo del otro
            alignItems: 'left', // Centrar horizontalmente
            gap: 1, // Espaciado entre los botones
            width: '100%', // Ocupa el ancho completo del contenedor
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              backgroundColor: '#808080', // Color gris
              color: 'white',
              width: '50%', // Ancho del botón
              textTransform: 'none',
              borderRadius: '50px', // Botón redondeado
              '&:hover': { backgroundColor: '#666666' },
            }}
          >
            Iniciar Sesion
          </Button>
          <Button
            variant="contained"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              backgroundColor: '#ff0000',
              color: 'white',
              width: '50%', // Ancho del botón
              textTransform: 'none',
              borderRadius: '50px', // Botón redondeado
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
            justifyContent: 'center', // Centrar los iconos horizontalmente
            gap: 1,
            mt: 1,
          }}
        >
          <InstagramIcon sx={{ color: 'white', fontSize: 30 }} />
          <WhatsAppIcon sx={{ color: 'white', fontSize: 30 }} />
        </Box>
      </Container>
    </Box>
  );
};

export default GymMenu;
