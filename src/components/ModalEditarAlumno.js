import React, { useState } from "react";
import {
  Modal,
  Button,
  TextField,
  Box,
  Autocomplete,
} from "@mui/material";

const EditAlumnoModal = ({ alumno, planes, onClose, onUpdate }) => {
  const [alumnoActualizado, setAlumnoActualizado] = useState(alumno);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumnoActualizado((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlanChange = (value) => {
    setAlumnoActualizado((prevData) => ({
      ...prevData,
      plan_activo: value ? value.id : null,
    }));
  };

  const handleSubmit = () => {
    onUpdate(alumnoActualizado);
  };

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: { xs: "90%", sm: "80%", md: "600px" },
          width: "100%",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          bgcolor: "background.paper",
          outline: "none",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <h2>Editar Alumno</h2>

        <TextField
          name="nombre"
          label="Nombre"
          value={alumnoActualizado.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="apellido"
          label="Apellido"
          value={alumnoActualizado.apellido}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="telefono"
          label="Teléfono"
          type="number"
          value={alumnoActualizado.telefono}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={alumnoActualizado.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="fecha_inscripcion"
          label="Fecha de inscripción"
          type="date"
          value={alumnoActualizado.fecha_inscripcion}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <Autocomplete
          options={planes}
          getOptionLabel={(option) => option.nombre || ""}
          value={
            alumno.plan_activo && alumno.plan_activo.id
              ? planes.find((plan) => plan.id === alumno.plan_activo.id)
              : null
          }
          onChange={(event, value) => handlePlanChange(value)} 
          renderInput={(params) => (
            <TextField {...params} label="Plan Activo" fullWidth />
          )}
          sx={{ margin: "normal" }}
        />

        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Guardar
          </Button>
          <Button onClick={onClose} color="secondary" variant="outlined">
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditAlumnoModal;
