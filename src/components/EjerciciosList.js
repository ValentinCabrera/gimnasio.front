
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Box,
}
from '@mui/material';


const EjerciciosList = ({ ejercicios, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Dificultad</TableCell>
                        <TableCell>Descripcion</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ejercicios.map((ejercicio) => (
                        <TableRow key={ejercicio.id}>
                            <TableCell>{ejercicio.id}</TableCell>
                            <TableCell>{ejercicio.nombre}</TableCell>
                            <TableCell>{ejercicio.dificultad}</TableCell>
                            <TableCell>{ejercicio.descripcion}</TableCell>
                            <TableCell>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: 1
                                    }}
                                >
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        onClick={() => onEdit(ejercicio.id)}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        variant='contained'
                                        color='error'
                                        onClick={() => onDelete(ejercicio.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EjerciciosList;