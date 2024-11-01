import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const EditarPlan = ({ clienteInicial, planInicial, onSave }) => {
  const [plan, setPlan] = useState(planInicial || []);
  const [cliente, setCliente] = useState(clienteInicial || "");

  // Maneja la actualización de un ejercicio específico en un día específico
  const handleEjercicioChange = (diaIndex, ejercicioIndex, field, value) => {
    const updatedPlan = [...plan];
    const updatedDia = { ...updatedPlan[diaIndex] };
    const updatedEjercicios = [...updatedDia.ejercicios];
    updatedEjercicios[ejercicioIndex] = {
      ...updatedEjercicios[ejercicioIndex],
      [field]: value,
    };
    updatedDia.ejercicios = updatedEjercicios;
    updatedPlan[diaIndex] = updatedDia;
    setPlan(updatedPlan);
  };

  const eliminarEjercicio = (diaIndex, ejercicioIndex) => {
    const updatedPlan = [...plan];
    updatedPlan[diaIndex].ejercicios.splice(ejercicioIndex, 1);
    setPlan(updatedPlan);
  };

  // Agrega un nuevo ejercicio al día seleccionado
  const agregarEjercicio = (diaIndex) => {
    const updatedPlan = [...plan];
    updatedPlan[diaIndex].ejercicios.push({
      nombre: "",
      series: "",
      repeticiones: "",
      descanso: "",
    });
    setPlan(updatedPlan);
  };

  const handleSave = () => {
    onSave({ cliente, plan });
  };

  const handleClienteChange = (event) => {
    setCliente(event.target.value);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Editar Plan de Entrenamiento
      </Typography>
      <Box mb={3}>
        <Select
          value={cliente}
          onChange={handleClienteChange}
          displayEmpty
          fullWidth
        >
          <MenuItem value="" disabled>
            Selecciona un alumno
          </MenuItem>
          {["Juan Perez", "Tomas Blanco", "Valentin Cabrera", "Cbum"].map(
            (alumno) => (
              <MenuItem key={alumno} value={alumno}>
                {alumno}
              </MenuItem>
            )
          )}
        </Select>
      </Box>

      {plan.map((dia, diaIndex) => (
        <Box
          key={diaIndex}
          mb={4}
          p={2}
          border={1}
          borderColor="grey.300"
          borderRadius={2}
        >
          <Typography variant="h6">Día {diaIndex + 1}</Typography>
          {dia.ejercicios.map((ejercicio, ejercicioIndex) => (
            <Box
              key={ejercicioIndex}
              mb={2}
              display="flex"
              gap={2}
              flexWrap="wrap"
            >
              <Box flex={1} minWidth="200px">
                <TextField
                  label="Ejercicio"
                  value={ejercicio.nombre}
                  onChange={(e) =>
                    handleEjercicioChange(
                      diaIndex,
                      ejercicioIndex,
                      "nombre",
                      e.target.value
                    )
                  }
                  fullWidth
                />
              </Box>
              <Box flex={1} minWidth="150px">
                <TextField
                  label="Series"
                  type="number"
                  value={ejercicio.series}
                  onChange={(e) =>
                    handleEjercicioChange(
                      diaIndex,
                      ejercicioIndex,
                      "series",
                      e.target.value
                    )
                  }
                  fullWidth
                />
              </Box>
              <Box flex={1} minWidth="150px">
                <TextField
                  label="Repeticiones"
                  type="number"
                  value={ejercicio.repeticiones}
                  onChange={(e) =>
                    handleEjercicioChange(
                      diaIndex,
                      ejercicioIndex,
                      "repeticiones",
                      e.target.value
                    )
                  }
                  fullWidth
                />
              </Box>
              <Box flex={1} minWidth="150px">
                <TextField
                  label="Descanso (seg)"
                  type="number"
                  value={ejercicio.descanso}
                  onChange={(e) =>
                    handleEjercicioChange(
                      diaIndex,
                      ejercicioIndex,
                      "descanso",
                      e.target.value
                    )
                  }
                  fullWidth
                />
              </Box>
              <IconButton
                color="secondary"
                onClick={() => eliminarEjercicio(diaIndex, ejercicioIndex)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Button variant="outlined" onClick={() => agregarEjercicio(diaIndex)}>
            Agregar Ejercicio
          </Button>
        </Box>
      ))}

      <Button variant="contained" color="primary" onClick={handleSave}>
        Guardar Cambios
      </Button>
    </Box>
  );
};

export default EditarPlan;
