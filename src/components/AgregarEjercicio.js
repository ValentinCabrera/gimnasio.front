import React, { useState } from 'react';
import { TextField, Typography, Box, Select, MenuItem, Button } from '@mui/material';
import useFetch, { host } from '../utils/Fetch';
const AgregarEjercicio = () => {
    const [ejercicio, setEjercicio] = useState({
        nombre: '',
        dificultad: '',
        descripcion: ''
    });
    const { postFetch } = useFetch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEjercicio({
            ...ejercicio,
            [name]: value
        });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log(ejercicio);
        try {
            const send = await postFetch(`${host}planes/ejercicios/`, ejercicio);
            console.log('Ejercicio registrado con éxito:', send);

        } catch (error) {
            console.error('Error al registrar el ejercicio:', error);
        }

    };

    return (
     <form onSubmit={handleSubmit}>
        <Box
        sx={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100%'
        }}
        >
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: { xs: "90%", sm: "80%", md: "600px" },
                p: 3,
                gap:4
            }}>
                <Typography variant='h4'>Agregar Ejercicio</Typography>

                <TextField 
                label='Nombre'
                name='nombre'
                value={ejercicio.nombre}
                onChange={handleChange}
                fullWidth/>

                <Select
                    value={ejercicio.dificultad}
                    onChange={handleChange}
                    name = 'dificultad'
                    displayEmpty
                    fullWidth
                >
                    <MenuItem disabled value={''}>Seleccionar dificultad</MenuItem>
                    <MenuItem value={'Principiante'}>Principiante</MenuItem>
                    <MenuItem value={'Intermedio'}>Intermedio</MenuItem>
                    <MenuItem value={'Avanzado'}>Avanzado</MenuItem>
                </Select>

                <TextField 
                label='Descripcion'
                name='descripcion'
                value={ejercicio.descripcion}
                onChange={handleChange}
                fullWidth/>
            </Box>

            <Button variant='contained' color='primary' onClick={handleSubmit}>
                Agregar Ejercicio
            </Button>

        </Box>

    </form>
    );
};

export default AgregarEjercicio;