import React from "react";
import { Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
                  Día Entrenamiento {dia.numero}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {dia.series.map((serie) => (
                  <Accordion key={serie.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Serie {serie.orden}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>Sets: {serie.repeticiones}</Typography>
                      <Typography>
                        Descanso Intermedio: {serie.descanso_intermedio} segundos
                      </Typography>
                      <Typography>
                        Descanso Final: {serie.descanso_final} segundos
                      </Typography>
                      <Box mt={1}>
                        {serie.ejercicios.map((ejercicio) => (
                          <Box key={ejercicio.id} ml={2} mt={1}>
                            <Typography variant="subtitle1">
                              <b>{ejercicio.nombre}</b> - Dificultad: {ejercicio.dificultad}
                            </Typography>

                            <Box sx={{ display: "flex" }}>
                              <Typography><b>Repeticiones: </b></Typography>
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
                              <b>Descanso Intermedio:</b> {ejercicio.descanso_intermedio} segundos
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Plan;
