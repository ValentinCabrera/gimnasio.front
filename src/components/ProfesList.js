import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Box,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProfeList = ({profes,onEdit,onDelete, onDetalle}) => {


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profes.map((profe) => (
            <TableRow key={profe.id}>
              <TableCell>{profe.id}</TableCell>
              <TableCell> {profe.nombre} {profe.apellido}</TableCell>
              <TableCell> {profe.telefono}</TableCell>
              <TableCell> {profe.email}</TableCell>
              <TableCell>
                <Box
                sx={{
                    display:"flex",
                    gap:"5px"
                }}>
                
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => onEdit(profe.id)}
                    startIcon={<EditIcon />}
                  >
                    Editar
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => onDelete(profe.id)}
                    startIcon={<DeleteIcon />}
                  >
                    Borrar
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfeList;
