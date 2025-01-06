import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography, TextField, Modal } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import backgroundImage from '../../imgs/background.jpg'; 
import iniciosesionjpg from '../../imgs/iniciosesion.jpg'; 

const GymMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: '85vh',
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
            onClick={handleOpen}
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

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: { xs: '90%', sm: '70%', md: '50%' },
            height: { xs: '80vh', sm: '60vh' },
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: 24,
            position: 'relative', // Added for diagonal line positioning
          }}
        >
          {/* Diagonal line overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none', // Makes the line not interfere with clicks
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: '50%',
                width: '2px', // Line thickness
                height: '140%', // Makes line longer to ensure it covers the diagonal
                background: 'white',
                transform: 'rotate(15deg)', // Adjust angle as needed
                transformOrigin: 'top',
                boxShadow: '0 0 8px rgba(0,0,0,0.3)', // Optional shadow effect
              },
              display: { xs: 'none', sm: 'block' }, // Only show on larger screens
            }}
          />

          {/* Sección Roja */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: '#ff383e',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}
            >
              Usuario:
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: '1.5rem',
                backgroundColor: '#FFC1C1',
                borderRadius: '25px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <Typography
              variant="h5"
              sx={{ color: 'white', fontWeight: 'bold', marginBottom: '1rem' }}
            >
              Contraseña:
            </Typography>
            <TextField
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: '#FFC1C1',
                borderRadius: '25px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <Typography
              variant="body2"
              sx={{ color: 'white', marginTop: '1rem', cursor: 'pointer' }}
            >
              ¿Olvidó su Contraseña?
            </Typography>
          </Box>

          {/* Sección Negra con Imagen */}
          <Box
            sx={{
              flex: 1,
              backgroundImage: `url(${iniciosesionjpg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </Box>
      </Modal>

    </Box>
  );
};

export default GymMenu;
