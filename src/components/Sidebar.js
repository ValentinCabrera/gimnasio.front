import { useState } from "react";
import { Drawer, List, ListItem, Typography, IconButton, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [adminExpanded, setAdminExpanded] = useState(false);
  //const { usuario } = useUser(); 
  const navigate = useNavigate();

  const usuario = {
    alumno:false,
  }


  const pagesByRole = {
    alumno: [
      { nombre: "Mi perfil", url: "/alumno" },
      { nombre: "Mi Plan", url: "/alumno/mi-plan" },
    ],
    profesor: [
      { nombre: "Planes", url: "/planes" },
      { nombre: "Mi perfil", url: "/profe" },
      { nombre: "Mi Plan", url: "/alumno/mi-plan" },
      { nombre: "Alumnos", url: "/alumnos" },
    ],
    admin: [
      { nombre: "Profesores", url: "/admin/profesores" },
      { nombre: "Ejercicios", url: "/admin/ejercicios" },
      { nombre: "Ficha", url: "/admin/ficha" },
    ],
  };

  const toggleDrawer = () => setOpen(!open);
  const toggleAdminExpanded = () => setAdminExpanded(!adminExpanded);

  const getPagesForUser = () => {
    const allPages = [];
  
  
    if (usuario.admin) {
      allPages.push(...pagesByRole.alumno, ...pagesByRole.profesor);
      allPages.push({ nombre: "Admin", children: pagesByRole.admin });
    } else if (usuario.alumno) {
      allPages.push(...pagesByRole.alumno);
    } else {
      allPages.push(...pagesByRole.profesor);
    }
  
    const uniquePages = Array.from(
      new Map(allPages.map((page) => [page.nombre, page])).values()
    );
  
    return uniquePages;
  };
  
  const renderMenuItem = ({ nombre, url, children }) => {
    if (children) {
      return (
        <div key={nombre}>
          <ListItem sx={listItemStyles} onClick={toggleAdminExpanded}>
            <Typography sx={typographyStyles}>{nombre}</Typography>
            <ExpandMoreIcon
              sx={{
                transition: "transform 0.3s",
                transform: adminExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </ListItem>
          <Collapse in={adminExpanded} timeout="auto" unmountOnExit>
            {children.map((child) => renderMenuItem(child))}
          </Collapse>
        </div>
      );
    }

    return (
      <ListItem
        sx={listItemStyles}
        key={nombre}
        onClick={() => {
          if (url) {
            navigate(url);
            toggleDrawer();
          }
        }}
      >
        <Typography sx={typographyStyles}>{nombre}</Typography>
      </ListItem>
    );
  };


  const pages = getPagesForUser();


  const listItemStyles = {
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
        <List sx={{ paddingLeft: "20px", paddingTop: "50px" }}>
          {pages.map(renderMenuItem)}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
