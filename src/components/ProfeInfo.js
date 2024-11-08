import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfeInfo = ({ datos }) => {
    console.log(datos.foto)
    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 500, margin: 'auto', mt: 5, p: 2 }}>
            <CardMedia
                component="img"
                height="200"
                image={datos.foto}
                alt={`Foto de ${datos.nombre}`}
            />
            <CardContent>
                <Typography variant="h5" component="div" align="center">
                    Bienvenido, {datos.nombre}
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                    <strong>Planes Realizados:</strong> {datos.cantPlanes}
                </Typography>

                <Box display="flex" justifyContent="space-between" sx={{ mt: 3 }}>
                    <Button variant="contained" color="primary" fullWidth sx={{ mr: 1 }} onClick={(() => navigate("./solicitudes"))}>
                        Ver Solicitudes de Planes
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProfeInfo;
