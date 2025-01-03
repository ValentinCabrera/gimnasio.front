import React, { useState } from "react";
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
import { useParams } from "react-router-dom";

const CambiarPlan = () => {
  const [numDias, setNumDias] = useState(0);
  const [plan, setPlan] = useState([]);
  const [alumno, setAlumno] = useState({nombre:"Tomas"});
  const { id } = useParams();

  const handleNumDiasChange = (event) => {
    const dias = event.target.value;
    setNumDias(dias);
    setPlan(new Array(dias).fill({ sets: [] }).map(() => ({ sets: [] })));
  };

  const handleClientes = (event) => {
    //setClientes(event.target.value);
  };

  const agregarSet = (diaIndex) => {
    const updatedPlan = [...plan];
    updatedPlan[diaIndex].sets.push({ ejercicios: [] });
    setPlan(updatedPlan);
  };

  const agregarEjercicio = (diaIndex, setIndex) => {
    const updatedPlan = [...plan];
    updatedPlan[diaIndex].sets[setIndex].ejercicios.push({
      nombre: "",
      series: [],
    });
    setPlan(updatedPlan);
  };

  const agregarSerie = (diaIndex, setIndex, ejercicioIndex) => {
    const updatedPlan = [...plan];
    updatedPlan[diaIndex].sets[setIndex].ejercicios[ejercicioIndex].series.push(
      {
        reps: "",
        tipo: "Reps",
      }
    );
    setPlan(updatedPlan);
  };

  const handleEjercicioChange = (
    diaIndex,
    setIndex,
    ejercicioIndex,
    field,
    value
  ) => {
    const updatedPlan = [...plan];
    updatedPlan[diaIndex].sets[setIndex].ejercicios[ejercicioIndex][field] =
      value;
    setPlan(updatedPlan);
  };

  const handleSerieChange = (
    diaIndex,
    setIndex,
    ejercicioIndex,
    serieIndex,
    field,
    value
  ) => {
    const updatedPlan = [...plan];
    updatedPlan[diaIndex].sets[setIndex].ejercicios[ejercicioIndex].series[
      serieIndex
    ][field] = value;
    setPlan(updatedPlan);
  };

  const eliminarSerie = (diaIndex, setIndex, ejercicioIndex, serieIndex) => {
    const updatedPlan = [...plan];
    updatedPlan[diaIndex].sets[setIndex].ejercicios[
      ejercicioIndex
    ].series.splice(serieIndex, 1);
    setPlan(updatedPlan);
  };

  const eliminarEjercicio = (diaIndex, setIndex, ejercicioIndex) => {
    const updatedPlan = [...plan];
    updatedPlan[diaIndex].sets[setIndex].ejercicios.splice(ejercicioIndex, 1);
    setPlan(updatedPlan);
  };

  const eliminarSet = (diaIndex, setIndex) => {
    const updatedPlan = [...plan];
    updatedPlan[diaIndex].sets.splice(setIndex, 1);
    setPlan(updatedPlan);
  };

  const handleSubmit = () => {
    console.log("Plan guardado para:", alumno);
    console.log("Días:", numDias);
    console.log("Plan:", plan);
  };

  if (!alumno) {
    return <Typography variant="h6">Cargando...</Typography>;
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Asignar Alumno
      </Typography>
      <Box mb={3}>
        <Select
          value={alumno.nombre}
          onChange={handleClientes}
          displayEmpty
          fullWidth
        >
          <MenuItem value="" disabled>
            Selecciona un alumno
          </MenuItem>
          <MenuItem key={alumno.nombre} value={alumno.nombre}>
            {alumno.nombre}
          </MenuItem>
        </Select>
      </Box>

      <Typography variant="h4" gutterBottom>
        Agregar Plan de Entrenamiento
      </Typography>
      <Box mb={3}>
        <Typography variant="h6">Selecciona el número de días</Typography>
        <Select
          value={numDias}
          onChange={handleNumDiasChange}
          displayEmpty
          fullWidth
        >
          <MenuItem value={0} disabled>
            Selecciona días
          </MenuItem>
          {[2, 3, 4, 5].map((dia) => (
            <MenuItem key={dia} value={dia}>
              {dia} días
            </MenuItem>
          ))}
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

          {dia.sets.map((set, setIndex) => (
            <Box
              key={setIndex}
              mb={2}
              p={2}
              border={1}
              borderColor="grey.400"
              borderRadius={2}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6">Set {setIndex + 1}</Typography>
                <Button
                  variant="outlined"
                  onClick={() => agregarEjercicio(diaIndex, setIndex)}
                >
                  Agregar Ejercicio
                </Button>
                <IconButton
                  color="secondary"
                  onClick={() => eliminarSet(diaIndex, setIndex)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>

              {set.ejercicios.map((ejercicio, ejercicioIndex) => (
                <Box
                  key={ejercicioIndex}
                  mb={2}
                  p={1}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                >
                  <Box display="flex" alignItems="center">
                    <TextField
                      label="Ejercicio"
                      value={ejercicio.nombre}
                      onChange={(e) =>
                        handleEjercicioChange(
                          diaIndex,
                          setIndex,
                          ejercicioIndex,
                          "nombre",
                          e.target.value
                        )
                      }
                      fullWidth
                    />
                    <IconButton
                      color="secondary"
                      onClick={() =>
                        eliminarEjercicio(diaIndex, setIndex, ejercicioIndex)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      agregarSerie(diaIndex, setIndex, ejercicioIndex)
                    }
                  >
                    Agregar Serie
                  </Button>

                  {ejercicio.series.map((serie, serieIndex) => (
                    <Box
                      key={serieIndex}
                      mb={2}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <TextField
                        label={`Serie ${serieIndex + 1}`}
                        type="text"
                        value={serie.reps}
                        onChange={(e) =>
                          handleSerieChange(
                            diaIndex,
                            setIndex,
                            ejercicioIndex,
                            serieIndex,
                            "reps",
                            e.target.value
                          )
                        }
                        fullWidth
                      />
                      <Select
                        value={serie.tipo}
                        onChange={(e) =>
                          handleSerieChange(
                            diaIndex,
                            setIndex,
                            ejercicioIndex,
                            serieIndex,
                            "tipo",
                            e.target.value
                          )
                        }
                        fullWidth
                      >
                        <MenuItem value="Reps">Reps</MenuItem>
                        <MenuItem value="Tiempo">Tiempo</MenuItem>
                      </Select>
                      <IconButton
                        color="secondary"
                        onClick={() =>
                          eliminarSerie(
                            diaIndex,
                            setIndex,
                            ejercicioIndex,
                            serieIndex
                          )
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          ))}

          <Button variant="outlined" onClick={() => agregarSet(diaIndex)}>
            Agregar Set
          </Button>
        </Box>
      ))}

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Guardar Plan
      </Button>
    </Box>
  );
};

export default CambiarPlan;
