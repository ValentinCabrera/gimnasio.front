import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Autocomplete,
  Chip,
} from "@mui/material";
import { host } from "../utils/Fetch";
import useFetch from "../utils/Fetch";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useNavigate } from "react-router-dom";

const AgregarProfesor = () => {
  const { postFetch, getFetch } = useFetch();
  const navigate = useNavigate()
  const [profesor, setProfesor] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfesor((prevProfe) => ({
      ...prevProfe,
      [name]: value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await postFetch(
        `${host}planes/profesores/`,
        profesor
      );
      console.log("Producto registrado con éxito:", data);
    } catch (error) {
      console.error("Error al registrar el producto:", error);
    } finally {
      setLoading(false);
    }

    navigate('/admin/profesores')

  };
  

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            maxWidth: { xs: "90%", sm: "80%", md: "600px" },
            width: "100%",
          }}
        >
          <Typography variant="h4" component="h2">
            Agregar Profesor
          </Typography>

          <TextField
            label="Nombre"
            name="nombre"
            value={profesor.nombre}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Apellido"
            name="apellido"
            value={profesor.apellido}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={profesor.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Telefono"
            type="number"
            name="telefono"
            value={profesor.telefono}
            onChange={handleChange}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{
              background: "#ff3535",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: "bold",
              transition: "transform 0.3s",
              "&:hover": {
                background: "#ff1e1e",
                transform: "scale(1.05)",
              },
            }}
          >
            {loading ? "Guardando..." : "Guardar Profesor"}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AgregarProfesor;
