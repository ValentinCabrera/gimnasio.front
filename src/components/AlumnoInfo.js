import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AlumnoInfo = ({ datos }) => {
    console.log(datos.foto)
    const navigate = useNavigate()
    const [estadoSolicitud, setEstadoSolicitud] = useState(false)
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

                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                    <Chip
                        label={datos.estadoPago === 'Pagado' ? 'Pagado' : 'No Pagado'}
                        color={datos.estadoPago === 'Pagado' ? 'success' : 'error'}
                    />
                </Box>

                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                    <strong>Objetivo:</strong> {datos.objetivo}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {datos.descripcion}
                </Typography>

                <Box display="flex" justifyContent="space-between" sx={{ mt: 3 }}>
                    <Button variant="contained" color="primary" fullWidth sx={{ mr: 1 }} onClick={(() => navigate("./mi-plan"))}>
                        Ver Plan
                    </Button>
                    <Button variant="outlined" color="secondary" fullWidth sx={{ ml: 1 }} onClick={(() => setEstadoSolicitud(true))}>
                        {estadoSolicitud ? "Solicitud Enviada" : "Solicitar Cambio de Plan"}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default AlumnoInfo;
