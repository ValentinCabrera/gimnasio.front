import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography, TextField, Modal } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import backgroundImage from '../../imgs/background.jpg'; 
import iniciosesionjpg from '../../imgs/iniciosesion.jpg'; 
import registrarjpg from '../../imgs/Registrar.jpg'; 
import IconButton from "@mui/material/IconButton";

const GymMenu = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

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
            onClick={handleOpenLogin}
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
            onClick={handleOpenRegister}
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
        justifyContent: "flex-start", // Mantiene el contenido en la parte superior
        position: "relative",
      }}
    >
      {/* Título "CENTRAL GYM" con línea decorativa */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "10px", // Posicionado en la parte superior izquierda
          left: "10px",
          width: "90%", // Abarca todo el ancho
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Anton', sans-serif", // Fuente Anton
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
            height: "2px", // Grosor de la línea
            backgroundColor: "white",
          }}
        />
      </Box>

      {/* Inputs */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          marginTop: "2rem", // Espaciado para que los inputs estén más abajo
          alignSelf: "center", // Centra los inputs horizontalmente
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
          {/* Formulario centrado */}
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
        </Box>
      </Modal>
    </Box>
  );
};

export default GymMenu;