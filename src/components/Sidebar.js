import { useState } from "react";
import { Drawer, List, ListItem, Typography, IconButton, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  const adminPages = [
    {
      nombre: "Profesores",
      url: "/admin/profesores",
    },
    {
      nombre:" Ejercicios",
      url: "/admin/ejercicios",
    }
  ];

  const paginas = [
    {
      nombre: "Planes",
      url: "/planes",
    },
    {
      nombre: "Mi perfil (profe)",
      url: "/profe",
    },
    {
      nombre: "Mi perfil (alumno)",
      url: "/alumno",
    },
    {
      nombre: "Mi Plan",
      url: "/alumno/mi-plan",
    },
    {
      nombre: "Alumnos",
      url: "/alumnos",
    },
    {
      nombre: "Ficha",
      url: "/ficha",
    },
    {
      nombre: "Profes List",
      url: "/admin/profesores",
    },
  
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleAdmin = () => {
    setAdmin(!admin);
  }
  return (
    <>

      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List
          sx={{
            paddingLeft: "20px",
            paddingTop: "50px",
          }}
        >
          {paginas.map((pagina) => {
            if (pagina.notShow) return null;

            return (
              <ListItem
                sx={{
                  cursor: "pointer",
                  paddingY: "20px",
                  maxWidth: "250px",
                  background: "white",
                  borderRadius: "50px 0px 0px 50px",
                  padding: "20px 50px 20px 30px",
                  transition: "background 0.3s ease",
                  '&:hover': {
                    background: "#ffe600"
                  }
                }}
                key={pagina.nombre}
                onClick={() => {
                  if (pagina.url) {
                    navigate(pagina.url);
                    toggleDrawer();
                  }
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {pagina.nombre}
                </Typography>
              </ListItem>

            );
          })}

            <ListItem
             sx={{
              cursor: "pointer",
              paddingY: "20px",
              maxWidth: "250px",
              background: "white",
              borderRadius: "50px 0px 0px 50px",
              padding: "20px 50px 20px 30px",
              transition: "background 0.3s ease",
              "&:hover": {
                background: "red",
              },
            }}
            onClick={toggleAdmin}> 
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Admin
            </Typography>
            <ExpandMoreIcon 
              sx={{
                transition: "transform 0.3s",
                transform: admin ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
            </ListItem>

            <Collapse in={admin} timeout="auto" unmountOnExit >
              {adminPages.map((pagina) => {
                return (
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      paddingY: "20px",
                      maxWidth: "250px",
                      background: "white",
                      borderRadius: "50px 0px 0px 50px",
                      padding: "20px 50px 20px 30px",
                      transition: "background 0.3s ease",
                      '&:hover': {
                        background: "#ffe600"
                      }
                    }}
                    key={pagina.nombre}
                    onClick={() => {
                      if (pagina.url) {
                        navigate(pagina.url);
                        toggleDrawer();
                      }
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {pagina.nombre}
                    </Typography>
                  </ListItem>
                );
              })}
            </Collapse>

        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
