import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography, TextField, Modal } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import backgroundImage from '../../imgs/background.jpg'; 
import iniciosesionjpg from '../../imgs/iniciosesion.jpg'; 
import registrarjpg from '../../imgs/Registrar.jpg'; 
import IconButton from "@mui/material/IconButton";
import opcionesImage from '../../imgs/Opciones.jpg';
import ContactoImage from '../../imgs/Contacto.jpg';


const GymMenu = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  return (
    <Box sx={{ width: '100vw', overflowX: 'hidden', position: 'relative' }}>
  {/*-------------------------------------------- Pantalla Principal --------------------------------------------------*/}
  <Box
    sx={{
      height: '100vh', // Altura completa de la ventana
      width: '100vw', // Ancho completo de la ventana
      backgroundImage: `url(${backgroundImage})`, // Imagen de fondo
      backgroundSize: 'cover', // Cubre toda la pantalla manteniendo la proporción
      backgroundPosition: 'center', // Centrada
      backgroundRepeat: 'no-repeat', // No se repite
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: { xs: '1rem 1rem 0 1rem', sm: '2rem 2rem 0 2rem', md: '5rem 5rem 0 5rem' },
      overflow: 'hidden', // Evita desbordamiento
      marginTop: '40px',
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
            fontSize: { xs: '1.5rem', sm: '3rem', md: '3.5rem' },
            mt: -4,
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
            
          }}
        >
          CENTRAL GYM
        </Typography>
      </Toolbar>
    </AppBar>

    {/* Contenido Principal */}
    <Container
      maxWidth="sm"
      sx={{
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5, 
        
      }}
    >
<Typography
  component="div"
  sx={{
    fontFamily: 'Anton, sans-serif',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#ff383e',
    fontSize: { xs: '3.5rem', sm: '5rem', md: '6.5rem' },
    lineHeight: '1.2',
    mt: -2, // Subir el texto más cerca del navbar
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  }}
>
  {/* Primera línea */}
  <Box component="span" sx={{ whiteSpace: 'nowrap', display: 'block' }}>
    AQUÍ COMIENZA TU
  </Box>
  {/* Segunda línea */}
  <Box component="span" sx={{ display: 'block' }}>
    TRANSFORMACIÓN
  </Box>
</Typography>


      {/* Botones */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          variant="contained"
          aria-label="Iniciar Sesión"
          sx={{
            backgroundColor: '#808080',
            color: 'white',
            width: { xs: '180px', sm: '220px' },
            height: { xs: '50px', sm: '60px' },
            fontSize: { xs: '1rem', sm: '1.2rem' },
            textTransform: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#666666' },
          }}
          onClick={handleOpenLogin}
        >
          Iniciar Sesión
        </Button>
        <Button
          variant="contained"
          aria-label="¡Regístrate Ahora!"
          sx={{
            backgroundColor: '#808080',
            color: 'white',
            width: { xs: '180px', sm: '220px' },
            height: { xs: '50px', sm: '60px' },
            fontSize: { xs: '1rem', sm: '1.2rem' },
            textTransform: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#cc0000' },
          }}
          onClick={handleOpenRegister}
        >
          ¡Regístrate Ahora!
        </Button>
      </Box>

      {/* Redes Sociales */}
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <InstagramIcon
          sx={{
            color: 'white',
            fontSize: 40,
            '&:hover': { color: '#ff383e' },
          }}
        />
        <WhatsAppIcon
          sx={{
            color: 'white',
            fontSize: 40,
            '&:hover': { color: '#25d366' },
          }}
        />
      </Box>
    </Container>
  </Box>



  
        {/*-------------------------------------- Sección Nuestras Opciones --------------------------------------*/}
        <Box
  sx={{
    width: '100vw',
    backgroundImage: `url(${opcionesImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px 0',
  }}
>
  {/* Título "NUESTRAS OPCIONES" */}
  <Box
    sx={{
      position: 'relative',
      top: '20px',
      left: '20px',
      color: '#e7dfdf',
      fontSize: '46px',
      fontWeight: 'bold',
      fontFamily: 'Anton, sans-serif',
      textAlign: 'left',
      letterSpacing: '3px',
      
    }}
  >
    NUESTRAS OPCIONES:
  </Box>

  {/* Contenedor principal de las opciones */}
  <Box
    sx={{
      display: 'flex', // Activa Flexbox
      justifyContent: 'center', // Centra horizontalmente
      gap: '80px', // Espaciado entre columnas
      marginTop: '100px',
    }}
  >
    {/* Columna de Musculación */}
    <Box
      sx={{
        backgroundColor: '#ff383e',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '350px',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombreado
      }}
    >
  <Box
        sx={{
          backgroundColor: 'rgba(177, 177, 166, 0.29)',
          padding: '10px',
          borderRadius: '50px',
          marginBottom: '5px', // Espaciado inferior
          fontFamily: "'Poppins', sans-serif",
          fontSize: '30px',

        }}
      >
        MUSCULACIÓN:
      </Box>
      <p>
        Construye fuerza y potencia con acceso a nuestras máquinas y pesas de última generación. Ideal para quienes buscan definir, ganar masa muscular o tonificar.
      </p>
    </Box>

    {/* Columna de Funcional */}
    <Box
      sx={{
        backgroundColor: '#ff383e',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '350px',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0 4px 8px rgba(45, 43, 43, 0.2)', // Sombreado
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(177, 177, 166, 0.29)',
          padding: '10px',
          borderRadius: '50px',
          marginBottom: '5px', // Espaciado inferior
          fontFamily: "'Poppins', sans-serif",
          fontSize: '30px',

        }}
      >
        FUNCIONAL:
      </Box>
      <p>
        Mejora tu resistencia, coordinación y agilidad con entrenamientos dinámicos y adaptados a todos los niveles. Perfecto para quienes buscan variedad y retos.
      </p>
    </Box>
  </Box>
</Box>

{/*------------------------ Pantalla Contacto -------------------------------------------------------------------*/}
<Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${ContactoImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
          padding: '30px',
          borderRadius: '10px',
          display: 'flex', // Divide el contenedor en columnas
          gap: '40px', // Espaciado entre columnas
        }}
      >
        {/* Columna Izquierda */}
        <Box
          sx={{
            textAlign: 'left',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 'bold',
              marginBottom: '10px',
              fontSize: '23px',
            }}
          >
            Central Gym
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '5px',
              fontSize: '23px',
            }}
          >
            Dirección: Bruno Ceballos y Av. Naciones
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '23px',
            }}
          >
            Unidas, Villa María
          </Typography>
        </Box>

        {/* Columna Derecha */}
        <Box
          sx={{
            textAlign: 'left',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '5px',
              fontSize: '23px',
            }}
          >
            Tel: +54 353 4412049
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '5px',
              fontSize: '23px',
            }}
          >
            Gmail:
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '23px',
            }}
          >
            Instagram: Central_gym
          </Typography>
        </Box>
      </Box>
    </Box>
  




{/*------------------------ Modal de Inicio de Sesión -------------------------------------------------------------------*/}

      <Modal
  open={openLogin}
  onClose={handleCloseLogin}
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      width: { xs: "90%", sm: "70%", md: "50%" },
      height: { xs: "80vh", sm: "60vh" },
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: 24,
      position: "relative",
    }}
  >
    {/* Sección Roja */}
    <Box
      sx={{
        flex: 1,
        backgroundColor: "#ff383e",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", 
        position: "relative",
      }}
    >
      {/* Título "CENTRAL GYM" con línea decorativa */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "10px", 
          left: "10px",
          width: "90%", 
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Anton', sans-serif", 
            fontSize: "16px",
            color: "white",
            marginRight: "10px",
          }}
        >
          CENTRAL GYM
        </Typography>
        <Box
          sx={{
            flex: 1,
            height: "2px",
            backgroundColor: "white",
          }}
        />
      </Box>

      {/* Inputs */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          marginTop: "2rem", 
          alignSelf: "center", 
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: "bold",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Usuario:
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Ingrese su usuario"
          sx={{
            marginBottom: "1.5rem",
            backgroundColor: "#FFC1C1",
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
            "& input": {
              padding: "12px 16px",
              fontSize: "16px",
            },
          }}
        />

        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: "bold",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Contraseña:
        </Typography>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          placeholder="Ingrese su contraseña"
          sx={{
            backgroundColor: "#FFC1C1",
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
            "& input": {
              padding: "12px 16px",
              fontSize: "16px",
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            marginTop: "1.5rem",
            backgroundColor: "white",
            color: "#ff383e",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "#ffecec",
            },
          }}
        >
          Ingresar
        </Button>
        <Typography
          variant="body2"
          sx={{
            color: "white",
            marginTop: "1rem",
            cursor: "pointer",
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          ¿Olvidó su Contraseña?
        </Typography>
      </Box>
    

      {/* Botones de redes sociales */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          display: "flex",
          gap: "-2rem",
        }}
      >
        <IconButton
          sx={{ color: "white" }}
          href="https://www.instagram.com"
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{ color: "white" }}
          href="https://www.whatsapp.com"
          target="_blank"
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
    

    {/* Sección Negra con Imagen */}
    <Box
      sx={{
        flex: 1,
        backgroundImage: `url(${iniciosesionjpg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      />
      </Box>
    </Modal>




{/*--------------------------- Modal de Registro -----------------------------------------------------------------------------*/}
<Modal
  open={openRegister}
  onClose={handleCloseRegister}
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Box
    sx={{
      width: { xs: "90%", sm: "80%", md: "70%" },
      height: { xs: "90vh", sm: "80vh", md: "70vh" },
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: 24,
      position: "relative",
      backgroundImage: `url(${registrarjpg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      
    }}
  >
    {/* Formulario centrado  */}
    <Box
      sx={{
        width: { xs: "85%", sm: "320px" },
        padding: "1.5rem",
        backgroundColor: "rgba(128, 128, 128, 0.85)",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "white",
          marginBottom: "-0.5rem",
          fontFamily: "Poppins",
        }}
      >
        Nombre:
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#E8E8E8",
            borderRadius: "25px",
            "& fieldset": { border: "none" },
          },
        }}
      />
      
      <Typography
        variant="body2"
        sx={{
          color: "white",
          marginBottom: "-0.5rem",
          fontFamily: "Poppins",
        }}
      >
        Apellido:
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#E8E8E8",
            borderRadius: "25px",
            "& fieldset": { border: "none" },
          },
        }}
      />
      
      <Typography
        variant="body2"
        sx={{
          color: "white",
          marginBottom: "-0.5rem",
          fontFamily: "Poppins",
        }}
      >
        Correo Electronico:
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        type="email"
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#E8E8E8",
            borderRadius: "25px",
            "& fieldset": { border: "none" },
          },
        }}
      />
      
      <Typography
        variant="body2"
        sx={{
          color: "white",
          marginBottom: "-0.5rem",
          fontFamily: "Poppins",
        }}
      >
        Contraseña:
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        type="password"
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#E8E8E8",
            borderRadius: "25px",
            "& fieldset": { border: "none" },
          },
        }}
      />
      
      <Typography
        variant="body2"
        sx={{
          color: "white",
          marginBottom: "-0.5rem",
          fontFamily: "Poppins",
        }}
      >
        Telefono:
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        type="tel"
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#E8E8E8",
            borderRadius: "25px",
            "& fieldset": { border: "none" },
          },
        }}
      />

      <Button
        variant="contained"
        sx={{
          marginTop: "0.5rem",
          backgroundColor: "#ff383e",
          color: "white",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "8px",
          padding: "8px",
          "&:hover": {
            backgroundColor: "#cc0000",
          },
        }}
      >
        Registrarse
      </Button>
    </Box>

    {/* Texto motivacional agregado */}
    <Typography
      sx={{
        position: "absolute",
        right: "5%",
        top: "50%",
        transform: "translateY(-50%)",
        fontFamily: "Anton",
        fontSize: { md: "3rem", lg: "4rem" },
        lineHeight: "1.1",
        color: "#ff383e",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        display: { xs: "none", md: "block" },
        textAlign: "center",
      }}
    >
      TU MEJOR<br />
      VERSION<br />
      COMIENZA<br />
      AHORA.
    </Typography>
  </Box>
</Modal>

    </Box>
  );
};

export default GymMenu;