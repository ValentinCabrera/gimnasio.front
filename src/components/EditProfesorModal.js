import React, { useState } from "react";
import { Modal, Button, TextField, Box } from "@mui/material";

const EditProfeModal = ({ profe, onClose, onUpdate }) => {
  const [profeActualizado, setProfeActualizado] = useState(profe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfeActualizado((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onUpdate(profeActualizado);
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
        <h2>Editar Profesor</h2>
        <TextField
          name="nombre"
          label="Nombre"
          value={profeActualizado.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="apellido"
          label="Apellido"
          value={profeActualizado.apellido}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          name="telefono"
          label="Telefono"
          value={profeActualizado.telefono}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={profeActualizado.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
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

export default EditProfeModal;
