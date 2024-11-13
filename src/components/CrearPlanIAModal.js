import React, { useState } from "react";
import {
  Modal,
  Button,
  TextField,
  Box,
  Chip,
  Stack,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@mui/material";
import useFetch, { host } from "../utils/Fetch";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const CrearPlanIa = ({ onClose, onUpdate }) => {
  const { postFetchFormData, postFetch } = useFetch();
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false); 
  
  const [formData, setFormData] = useState({
    datos_alumno: {
      edad: null,
      peso: null,
      altura: null,
      nivel_experiencia: "avanzado",
    },
    objetivos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.datos_alumno) {
      setFormData((prevData) => ({
        ...prevData,
        datos_alumno: {
          ...prevData.datos_alumno,
          [name]: value,
        },
      }));
    }
  };

  const handleAddObjetivo = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setFormData((prevData) => ({
        ...prevData,
        objetivos: [...prevData.objetivos, { nombre: e.target.value }],
      }));
      e.target.value = "";
    }
  };

  const handleDeleteObjetivo = (objetivo) => {
    setFormData((prevData) => ({
      ...prevData,
      objetivos: prevData.objetivos.filter(
        (item) => item.nombre !== objetivo.nombre
      ),
    }));
  };

  const handleSubmit = () => {
    console.log("Envío", formData);
    
    const postData = async () => {
      setLoading(true); 
      try {
        const response = await axios.post(
          `${host}planes/plan-entrenamiento-ia/`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Datos enviados", response);
        navigate("/planes");
      } catch (error) {
        console.error("Hubo un error", error);
      } finally {
        setLoading(false); 
      }
    };
    postData();
  };

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: { xs: "90%", sm: "80%", md: "600px" },
          width: "100%",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          bgcolor: "background.paper",
          outline: "none",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <h2>Crear Plan de Entrenamiento IA</h2>

    
        <TextField
          name="edad"
          label="Edad"
          value={formData.datos_alumno.edad}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          name="peso"
          label="Peso (kg)"
          value={formData.datos_alumno.peso}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="number"
          step="0.1"
        />
        <TextField
          name="altura"
          label="Altura (cm)"
          value={formData.datos_alumno.altura}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="number"
        />
        
        <FormControl fullWidth margin="normal">
          <InputLabel id="nivel_experiencia">Nivel de Experiencia</InputLabel>
          <Select
            labelId="nivel_experiencia"
            name="nivel_experiencia"
            value={formData.datos_alumno.nivel_experiencia}
            onChange={handleChange}
            label="Nivel de Experiencia"
          >
            <MenuItem value="principiante">Principiante</MenuItem>
            <MenuItem value="intermedio">Intermedio</MenuItem>
            <MenuItem value="avanzado">Avanzado</MenuItem>
          </Select>
        </FormControl>

        {/* Campo de objetivos */}
        <TextField
          label="Objetivos"
          fullWidth
          margin="normal"
          onKeyUp={handleAddObjetivo}
          placeholder="Presiona Enter para agregar un objetivo"
        />
        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
          {formData.objetivos.map((objetivo, index) => (
            <Chip
              key={index}
              label={objetivo.nombre}
              onDelete={() => handleDeleteObjetivo(objetivo)}
              color="primary"
            />
          ))}
        </Stack>

        {/* Botones */}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Guardar"} 
          </Button>
          <Button onClick={onClose} color="secondary" variant="outlined">
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CrearPlanIa;
