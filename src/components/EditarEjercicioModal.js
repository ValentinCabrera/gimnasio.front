

import { Modal, Button, TextField, Box, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const EditarEjercicioModal = ({ ejercicio, onClose, onUpdate }) => {
    const [ejercicioActualizado, setEjercicioActualizado] = useState(ejercicio);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEjercicioActualizado((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        onUpdate(ejercicioActualizado);
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
                <h2>Editar Ejercicio</h2>
                <TextField
                    name="nombre"
                    label="Nombre"
                    value={ejercicioActualizado.nombre}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Select
                    value={ejercicioActualizado.dificultad}
                    onChange={handleChange}
                    name='dificultad'
                    fullWidth
                >
                    <MenuItem disabled value={''}>Seleccionar dificultad</MenuItem>
                    <MenuItem value={'Principiante'}>Principiante</MenuItem>
                    <MenuItem value={'Intermedio'}>Intermedio</MenuItem>
                    <MenuItem value={'Avanzado'}>Avanzado</MenuItem>
                </Select>
                <TextField
                    name="descripcion"
                    label="Descripcion"
                    value={ejercicioActualizado.descripcion}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button variant='contained' color='primary' onClick={handleSubmit}>
                    Actualizar Ejercicio
                </Button>
            </Box>
        </Modal>
    );
};

export default EditarEjercicioModal;