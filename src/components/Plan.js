import React, { useState } from "react";
import { Box, Typography, Paper, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Plan = ({ cliente, plan }) => {

  const [openDays, setOpenDays] = useState({});

  const toggleCollapse = (dayId) => {
    setOpenDays((prev) => ({
      ...prev,
      [dayId]: !prev[dayId],
    }));
  };

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
            <Box display="flex" alignItems="center">
              <Typography variant="h5" gutterBottom style={{ marginTop: "20px", fontWeight:"bold" }}>
                Día Entrenamiento {dia.numero}
              </Typography>
              <IconButton onClick={() => toggleCollapse(dia.id)}>
                {openDays[dia.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            <Collapse in={openDays[dia.id]}>

              {dia.series.map((serie) => (
                <Box key={serie.id} ml={3} mt={2}>
                  <Typography variant="h6"  sx={{fontWeight:"bold"}}>Serie {serie.orden}</Typography>
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
                </Box>
              ))}
            </Collapse>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Plan;
