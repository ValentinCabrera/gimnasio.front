import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Plan = ({ cliente, plan }) => {
  return (
    <Box p={3}>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Información del Cliente
        </Typography>
        {cliente.nombre}
      </Paper>

      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h4" gutterBottom>
          {plan.nombre}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {plan.descripcion}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Profesor: {plan.profesor.nombre} {plan.profesor.apellido}
        </Typography>
        {plan.dias_entrenamiento.map((dia) => (
          <Box key={dia.id} mt={3}>
            <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
              Día {dia.numero}
            </Typography>

            {/* Series */}
            {dia.series.map((serie) => (
              <Box key={serie.id} ml={3} mt={2}>
                <Typography variant="h6">Serie {serie.orden}</Typography>
                <Typography>Repeticiones: {serie.repeticiones}</Typography>
                <Typography>
                  Descanso Intermedio: {serie.descanso_intermedio} segundos
                </Typography>
                <Typography>
                  Descanso Final: {serie.descanso_final} segundos
                </Typography>

                {/* Ejercicios */}
                <Box mt={1}>
                  {serie.ejercicios.map((ejercicio) => (
                    <Box key={ejercicio.id} ml={2} mt={1}>
                      <Typography variant="subtitle1">
                        {ejercicio.nombre} - Dificultad: {ejercicio.dificultad}
                      </Typography>

                      <Box sx={{display:"flex"}}> 
                      <Typography>Repeticiones:</Typography>
                      {[...Array(serie.repeticiones)].map((_, index) => (
                        <Typography
                          key={index}
                          style={{ display: "inline", marginRight: "8px" }}
                        >
                          {ejercicio.repeticiones}
                        </Typography>
                      ))}
                      </Box>

                      <Typography>
                        Descanso Intermedio: {ejercicio.descanso_intermedio}{" "}
                        segundos
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Plan;
