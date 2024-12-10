import { useState } from "react";
import { Drawer, List, ListItem, Typography, IconButton, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useUser from "../hooks/useUser";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [admin, setAdmin] = useState(false);
  //const { usuario } = useUser();
  const usuario = {
    alumno: false,
    admin: true
  }
  const navigate = useNavigate();

  const adminPages = [
    {
      nombre: "Profesores",
      url: "/admin/profesores",
    },
    {
      nombre: "Ejercicios",
      url: "/admin/ejercicios",
    },
    {
      nombre: "Ficha",
      url: "/admin/ficha",
    }
  ];

  const paginasAlumnos = [
    {
      nombre: "Mi perfil (alumno)",
      url: "/alumno",
    },
    {
      nombre: "Mi Plan",
      url: "/alumno/mi-plan",
    },
  ];

  const paginasProfesores = [
    {
      nombre: "Planes",
      url: "/planes",
    },
    {
      nombre: "Mi perfil (profe)",
      url: "/profe",
    },
    {
      nombre: "Mi Plan",
      url: "/alumno/mi-plan",
    },
    {
      nombre: "Alumnos",
      url: "/alumnos",
    },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleAdmin = () => {
    setAdmin(!admin);
  };

  const renderPages = () => {
    if (usuario.admin) {
      return (
        <>
          {paginasAlumnos.map((pagina) => (
            <ListItem
              sx={listItemStyles}
              key={pagina.nombre}
              onClick={() => {
                if (pagina.url) {
                  navigate(pagina.url);
                  toggleDrawer();
                }
              }}
            >
              <Typography sx={typographyStyles}>{pagina.nombre}</Typography>
            </ListItem>
          ))}
          {paginasProfesores.map((pagina) => (
            <ListItem
              sx={listItemStyles}
              key={pagina.nombre}
              onClick={() => {
                if (pagina.url) {
                  navigate(pagina.url);
                  toggleDrawer();
                }
              }}
            >
              <Typography sx={typographyStyles}>{pagina.nombre}</Typography>
            </ListItem>
          ))}
          <ListItem sx={listItemStyles} onClick={toggleAdmin}>
            <Typography sx={typographyStyles}>Admin</Typography>
            <ExpandMoreIcon
              sx={{
                transition: "transform 0.3s",
                transform: admin ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </ListItem>
          <Collapse in={admin} timeout="auto" unmountOnExit>
            {adminPages.map((pagina) => (
              <ListItem
                sx={listItemStyles}
                key={pagina.nombre}
                onClick={() => {
                  if (pagina.url) {
                    navigate(pagina.url);
                    toggleDrawer();
                  }
                }}
              >
                <Typography sx={typographyStyles}>{pagina.nombre}</Typography>
              </ListItem>
            ))}
          </Collapse>
        </>
      );
    } else if (usuario.alumno) {
      return paginasAlumnos.map((pagina) => (
        <ListItem
          sx={listItemStyles}
          key={pagina.nombre}
          onClick={() => {
            if (pagina.url) {
              navigate(pagina.url);
              toggleDrawer();
            }
          }}
        >
          <Typography sx={typographyStyles}>{pagina.nombre}</Typography>
        </ListItem>
      ));
    } else {
      return paginasProfesores.map((pagina) => (
        <ListItem
          sx={listItemStyles}
          key={pagina.nombre}
          onClick={() => {
            if (pagina.url) {
              navigate(pagina.url);
              toggleDrawer();
            }
          }}
        >
          <Typography sx={typographyStyles}>{pagina.nombre}</Typography>
        </ListItem>
      ));
    }
  };

  const listItemStyles = {
    cursor: "pointer",
    paddingY: "20px",
    maxWidth: "250px",
    background: "white",
    borderRadius: "50px 0px 0px 50px",
    padding: "20px 50px 20px 30px",
    transition: "background 0.3s ease",
    "&:hover": {
      background: "#ffe600",
    },
  };

  const typographyStyles = {
    fontWeight: "bold",
    fontSize: "18px",
  };

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
          {renderPages()}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;