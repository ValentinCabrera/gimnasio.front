import React, { useEffect, useState } from "react";
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
import CrearPlanIa from "./CrearPlanIAModal";
import useFetch, { host } from "../utils/Fetch";

const AgregarPlan = () => {
  const [numDias, setNumDias] = useState(0);
  const [plan, setPlan] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const { postFetch, getFetch } = useFetch();
  const [selectedCliente, setSelectedCliente] = useState('');


  useEffect(() => {

    const fetchClientes = async () => {
      try {
        const response = await getFetch(`${host}planes/alumnos/busqueda/`);
        console.log(response.data);
        setClientes(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }


    }

    fetchClientes();
  }, []);

  const handleNumDiasChange = (event) => {
    const dias = parseInt(event.target.value, 10);
    setNumDias(dias);
    setPlan(new Array(dias).fill({ sets: [] }).map(() => ({ sets: [] })));
  };

  const handleClientes = (event) => {
    setSelectedCliente(event.target.value);
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

  const handleSubmit = async () => {

    if (!selectedCliente) {
      alert("Por favor selecciona un alumno.");
      return;
    }

    if (plan.length === 0 || !plan.some((dia) => dia.sets.length > 0)) {
      alert("El plan debe tener al menos un set con ejercicios.");
      return;
    }

    const formattedPlan = plan.map((dia) => ({
      sets: dia.sets.map((set) => ({
        ejercicios: set.ejercicios.map((ejercicio) => ({
          nombre: ejercicio.nombre,
          series: ejercicio.series.map((serie) => ({
            reps: serie.reps,
            tipo: serie.tipo,
          })),
        })),
      })),
    }));

    const planData = {
      alumno: selectedCliente, 
      profesor: 1,
      nombre: "Plan de entrenamiento",
      descripcion: "Plan de entrenamiento creado por el profesor",
      plan_entrenamiento: formattedPlan, 
    };
  
    console.log("Datos que se enviarán:", planData);
  
    try {
 
      const response = await postFetch(`${host}/entrenamiento/planes/`, planData);
  
      if (response.ok) {
        alert("Plan guardado exitosamente");
      } else {
        console.error("Error al guardar el plan:", response);
        alert("Hubo un problema al guardar el plan. Revisa los datos e inténtalo nuevamente.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Ocurrió un error al enviar el plan. Inténtalo nuevamente.");
    }
  };
  
  const handleModalOpen = () =>{
    setOpen(true)

  }
  const handleModalClose = () =>{
    setOpen(false)

  }



  return (
    <Box p={3}>
      <Box p={3} sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleModalOpen}
          sx={{
            background: "#ff3535",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: "bold",
            transition: "transform 0.3s",
            "&:hover": {
              background: "#ff1e1e",
              transform: "scale(1.05)",
            },
          }}
        >
          Crear plan con IA
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom>
        Asignar Alumno
      </Typography>
      <Box mb={3}>
        <Select
          value={selectedCliente}
          onChange={handleClientes}
          displayEmpty
          fullWidth
        >
          <MenuItem value="" disabled>
            Selecciona un alumno
          </MenuItem>
          {clientes.map((cliente) => (
              <MenuItem key={cliente.id} value={cliente.id}>
                     {cliente.nombre} {cliente.apellido}
              </MenuItem>
            )
          )}
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

      {isOpen && <CrearPlanIa onClose={handleModalClose}  />}

    </Box>
  );
};

export default AgregarPlan;
