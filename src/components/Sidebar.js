import { useState } from "react";
import { Drawer, List, ListItem, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const paginas = [
    {
      nombre: "Planes",
      url: "/planes",
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
      nombre: "Usuarios",
      url: "/usuarios",
    },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
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
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
