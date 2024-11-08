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
          {dia.sets.map((set, setIndex) => (
            <Box key={setIndex} mb={3} p={2} border={1} borderColor="grey.400" borderRadius={2}>
              <Typography variant="h6">Set {setIndex + 1}</Typography>
              {set.ejercicios.map((ejercicio, ejercicioIndex) => (
                <Box key={ejercicioIndex} mt={2}>
                  <Typography variant="subtitle1">
                    <strong>Ejercicio:</strong> {ejercicio.nombre || "Sin nombre"}
                  </Typography>
                  {ejercicio.series.map((serie, serieIndex) => (
                    <Box key={serieIndex} ml={2} display="flex" gap={2}>
                      <Typography variant="body2">
                        <strong>Serie {serieIndex + 1}:</strong> {serie.reps} {serie.tipo} - Descanso {serie.descanso}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Plan;
