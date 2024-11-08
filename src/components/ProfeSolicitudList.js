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


const ProfeSolicitudList = ({solicitudes,onEdit,onDelete, onDetalle}) => {


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
          {solicitudes.map((solicitud) => (
            <TableRow key={solicitud.id}>
              <TableCell>{solicitud.id}</TableCell>
              <TableCell> {solicitud.nombre} {solicitud.apellido}</TableCell>
              <TableCell> {solicitud.telefono}</TableCell>
              <TableCell> {solicitud.email}</TableCell>
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
                    onClick={() => onEdit(solicitud.id)}
                    startIcon={<EditIcon />}
                  >
                    Cambiar Plan
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

export default ProfeSolicitudList;
