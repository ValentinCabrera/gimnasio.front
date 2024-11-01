import { Box, Typography, TextField, FormControl, InputLabel,MenuItem, Button, Select } from "@mui/material";
import { useState } from "react";

const EditarFicha = ({fichaInicial, onSave}) =>{
    const [ficha, setFicha] = useState({
        nombre:fichaInicial?.nombre || "",
        precio:fichaInicial?.precio || ""
    })

    const handleChange = (field, value) => {
        setFicha({
          ...ficha,
          [field]: value,
        });
      };
    const handleSave = () => {
        onSave(ficha);
      };

    return (
        <Box p={3}>
          <Typography variant="h4" gutterBottom>
            Editar Ficha
          </Typography>
    
          <Box mb={3}>
            <TextField
              label="Nombre"
              value={ficha.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              fullWidth
            />
          </Box>
    
          <Box mb={3}>
            <TextField
              label="Precio"
              value={ficha.precio}
              onChange={(e) => handleChange("email", e.target.value)}
              fullWidth
            />
          </Box>
    
         
          <Button variant="contained" color="primary" onClick={handleSave}>
            Guardar Cambios
          </Button>
        </Box>
      );
}

export default EditarFicha