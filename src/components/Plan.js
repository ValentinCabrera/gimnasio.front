import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Plan = ({ cliente, plan }) => {
  return (
    <Box p={3}>
      {/* Información del Cliente */}
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
      </Paper>

      {/* Plan de Entrenamiento */}
      <Typography variant="h4" gutterBottom>
        Plan de Entrenamiento
      </Typography>
      {plan.map((dia, diaIndex) => (
        <Box key={diaIndex} mb={4} p={2} border={1} borderColor="grey.300" borderRadius={2}>
          <Typography variant="h6" gutterBottom>
            Día {diaIndex + 1}
          </Typography>
          {dia.ejercicios.map((ejercicio, ejercicioIndex) => (
            <Box key={ejercicioIndex} mb={2} display="flex" gap={2} flexWrap="wrap">
              <Box flex={1} minWidth="200px">
                <Typography variant="subtitle1">
                  <strong>Ejercicio:</strong> {ejercicio.nombre}
                </Typography>
              </Box>
              <Box flex={1} minWidth="150px">
                <Typography variant="subtitle1">
                  <strong>Series:</strong> {ejercicio.series}
                </Typography>
              </Box>
              <Box flex={1} minWidth="150px">
                <Typography variant="subtitle1">
                  <strong>Repeticiones:</strong> {ejercicio.repeticiones}
                </Typography>
              </Box>
              <Box flex={1} minWidth="150px">
                <Typography variant="subtitle1">
                  <strong>Descanso (seg):</strong> {ejercicio.descanso}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Plan;
