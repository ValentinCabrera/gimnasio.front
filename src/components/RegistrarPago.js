import { Paper, Typography, Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { useState } from "react";

const RegistrarPago = ({ cliente, fichaGym }) => {


  const [entrenamientoSeleccionado, setEntrenamientoSeleccionado] = useState("");

  const handleChange = (event) => {
    setEntrenamientoSeleccionado(event.target.value);
  };

  return (
    <>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Información del Cliente
        </Typography>
        <Typography variant="subtitle1">
          <strong>Nombre:</strong> {cliente.nombre}
        </Typography>
        <Typography variant="subtitle1">
          <strong>ID:</strong> {cliente.id}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Edad:</strong> {cliente.edad}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Email:</strong> {cliente.email}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Estado:</strong> {cliente.estado}
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Tipo Entrenamiento
        </Typography>

        <Box mb={2} mt={2}>
          <FormControl fullWidth>
            <InputLabel>Entrenamiento</InputLabel>
            <Select
              value={entrenamientoSeleccionado}
              onChange={handleChange}
              label="Entrenamiento"
            >
              {fichaGym.map((ficha) => (
                <MenuItem key={ficha.entrenamiento} value={ficha.entrenamiento}>
                  {ficha.entrenamiento} - ${ficha.precio}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Paper>

        <Button variant="contained" fullWidth>Registrar Pago</Button>
    </>
  );
};

export default RegistrarPago;
