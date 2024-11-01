import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const EditarCliente = ({ clienteInicial, onSave }) => {
  const [cliente, setCliente] = useState({
    nombre: clienteInicial?.nombre || "",
    email: clienteInicial?.email || "",
    estadoPago: clienteInicial?.estadoPago || "no pagado",
    tipoEntrenamiento: clienteInicial?.tipoEntrenamiento || "Musculacion",
  });

  const handleChange = (field, value) => {
    setCliente({
      ...cliente,
      [field]: value,
    });
  };

  const handleSave = () => {
    onSave(cliente);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Editar Cliente
      </Typography>

      <Box mb={3}>
        <TextField
          label="Nombre"
          value={cliente.nombre}
          onChange={(e) => handleChange("nombre", e.target.value)}
          fullWidth
        />
      </Box>

      <Box mb={3}>
        <TextField
          label="Email"
          value={cliente.email}
          onChange={(e) => handleChange("email", e.target.value)}
          fullWidth
        />
      </Box>

      <Box mb={3}>
        <TextField
            value={cliente.estadoPago}
            fullWidth
            slotProps={{
              input:{
                readOnly:true,
              }
            }}
          />
      </Box>

      <Box mb={3}>
        <FormControl fullWidth>
          <InputLabel>Tipo de Entrenamiento</InputLabel>
          <Select
            value={cliente.tipoEntrenamiento}
            onChange={(e) => handleChange("tipoEntrenamiento", e.target.value)}
            label="Tipo de Entrenamiento"
          >
            <MenuItem value="Musculacion">Musculación</MenuItem>
            <MenuItem value="Funcional">Funcional</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button variant="contained" color="primary" onClick={handleSave}>
        Guardar Cambios
      </Button>
    </Box>
  );
};

export default EditarCliente;
