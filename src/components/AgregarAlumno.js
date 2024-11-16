import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Autocomplete,
} from "@mui/material";
import { host } from "../utils/Fetch";
import useFetch from "../utils/Fetch";
import { useNavigate } from "react-router-dom";

const AgregarAlumno = () => {
  const { postFetch, getFetch } = useFetch();
  const navigate = useNavigate();

  const [alumno, setAlumno] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha_inscripcion: "", 
    plan_activo: null, 
  });
  const [planes, setPlanes] = useState([]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await getFetch(`${host}planes/planes/busqueda/`);
        setPlanes(response.data);
      } catch (error) {
        console.error("Error al obtener planes:", error);
      }
    };
    fetchPlanes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno((prevAlumno) => ({
      ...prevAlumno,
      [name]: value,
    }));
  };
  
  const handlePlanChange = (value) => {
    setAlumno((prevAlumno) => ({
      ...prevAlumno,
      plan_activo: value ? value.id : null, // Solo guarda el ID del plan
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("enviar",alumno)

    try {
      const data = await postFetch(`${host}planes/alumnos/`, alumno);
      console.log("Alumno registrado con éxito:", data);
      navigate("/alumnos");
    } catch (error) {
      console.error("Error al registrar el alumno:", error);
    } finally {
      setLoading(false);
    }
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
            Agregar alumno
          </Typography>

          <TextField
            label="Nombre"
            name="nombre"
            value={alumno.nombre}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Apellido"
            name="apellido"
            value={alumno.apellido}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={alumno.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Teléfono"
            type="number"
            name="telefono"
            value={alumno.telefono}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Fecha de inscripción"
            type="date"
            name="fecha_inscripcion"
            value={alumno.fecha_inscripcion}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

          <Autocomplete
            options={planes}
            getOptionLabel={(option) => option.nombre || ""}
            sx={{
                width:"100%"
            }}
            onChange={(event, value) => handlePlanChange(value)} 
            renderInput={(params) => (
              <TextField {...params} label="Seleccionar Plan" fullWidth />
            )}
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
            {loading ? "Guardando..." : "Guardar Alumno"}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AgregarAlumno;
