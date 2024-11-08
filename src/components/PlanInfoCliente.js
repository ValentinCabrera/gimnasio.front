import React from "react";
import { Box, Card, CardContent, Typography, Divider } from "@mui/material";

const PlanInfoCliente = ({ alumnoPlan }) => {
  if (!alumnoPlan || alumnoPlan.length === 0) {
    return (
      <Box p={3}>
        <Typography variant="h6">No hay un plan asignado actualmente.</Typography>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Box mb={3}>
        <Typography variant={{ xs: 'h5', sm: 'h4' }} gutterBottom>
          Plan de Entrenamiento de {alumnoPlan.cliente}
        </Typography>
      </Box>

      {alumnoPlan.plan.map((dia, diaIndex) => (
        <Card key={diaIndex} variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" mb={1}>
              <Typography variant={{ xs: 'h6', sm: 'h5' }} color="primary">
                {dia.diaNombre} - {dia.grupoMuscular}
              </Typography>
              <Divider sx={{ flex: '1 1 100%', my: 1 }} />
            </Box>

            {/* Headers */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ fontWeight: "bold", mt: 1, flexWrap: "wrap" }}
            >
              <Box width={{ xs: "100%", sm: "40%" }} textAlign="left">
                <Typography variant="body1">Ejercicio</Typography>
              </Box>
              <Box width={{ xs: "30%", sm: "20%" }} textAlign="center">
                <Typography variant="body1">Series</Typography>
              </Box>
              <Box width={{ xs: "30%", sm: "20%" }} textAlign="center">
                <Typography variant="body1">Reps</Typography>
              </Box>
              <Box width={{ xs: "100%", sm: "20%" }} textAlign="right">
                <Typography variant="body1">Descanso</Typography>
              </Box>
            </Box>

            {dia.ejercicios.map((ejercicio, ejercicioIndex) => (
              <Box
                key={ejercicioIndex}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 1, flexWrap: "wrap" }}
              >
                <Box width={{ xs: "100%", sm: "40%" }} textAlign="left">
                  <Typography variant="body1">{ejercicio.nombre}</Typography>
                </Box>
                <Box width={{ xs: "30%", sm: "20%" }} textAlign="center">
                  <Typography variant="body1">{ejercicio.series}</Typography>
                </Box>
                <Box width={{ xs: "30%", sm: "20%" }} textAlign="center">
                  <Typography variant="body1">{ejercicio.reps}</Typography>
                </Box>
                <Box width={{ xs: "100%", sm: "20%" }} textAlign="right">
                  <Typography variant="body1">{ejercicio.descanso}"</Typography>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>
      ))}

      {/* Cardio Section */}
      {/* <Card variant="outlined" sx={{ mt: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" mb={1}>
            <Typography variant="h5" color="primary">Cardio</Typography>
            <Divider sx={{ flex: '1 1 100%', my: 1 }} />
          </Box>
          <Typography variant="body1" sx={{ mt: 1 }}>
            HIIT: 120" trote + 6 veces (30" sprint + 90" parada) + 120" trote
          </Typography>
        </CardContent>
      </Card> */}
    </Box>
  );
};

export default PlanInfoCliente;