import React from 'react';
import {
  Box,
  Collapse,
  Avatar,
  Typography,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Perfil = ({ alumno }) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box p={3} border={1} borderColor="grey.300" borderRadius={2} mb={2}>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar alt={alumno.nombre} src={alumno.avatarUrl} sx={{ width: 56, height: 56 }} />
        <Box ml={2}>
          <Typography variant="h5">{alumno.nombre}</Typography>
          <Typography variant="body1">{alumno.objetivo}</Typography>
        </Box>
      </Box>

      <Button
        onClick={handleToggle}
        endIcon={<ExpandMoreIcon />}
        variant="outlined"
        sx={{ mb: 1 }}
      >
        {open ? 'Ocultar Planes' : 'Ver Planes'}
      </Button>

      <Collapse in={open}>
        <Box mt={2}>
          <Typography variant="h6">Planes de Entrenamiento en {alumno.planes[0].mes}:</Typography>
          {alumno.planes.map((plan, index) => (
            <Box key={index} border={1} borderColor="grey.400" borderRadius={1} p={1} mb={2}>
              <Typography variant="h4" gutterBottom>
                {plan.mes}
              </Typography>
              {plan.detalles.map((dia, diaIndex) => (
                <Box key={diaIndex} mb={4} p={2} border={1} borderColor="grey.300" borderRadius={2}>
                  <Typography variant="h6" gutterBottom>
                    {dia.dia}
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
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Perfil;
