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
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const ClientesList = ({ onEdit, onDelete, onDetalle }) => {
  const clientes = [
    { id: 1, nombre: "Juan Pérez", estado: "pagado", tipo: "Musculacion" },
    { id: 2, nombre: "Ana García", estado: "no pagado", tipo: "Funcional" },
    { id: 3, nombre: "Carlos López", estado: "pagado", tipo: "Musculacion" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((cliente) => (
            <TableRow key={cliente.id}>
              <TableCell>{cliente.id}</TableCell>
              <TableCell>{cliente.nombre}</TableCell>
              <TableCell>
                <Chip
                  icon={
                    cliente.tipo === "Funcional" ? (
                      <SportsGymnasticsIcon />
                    ) : (
                      <FitnessCenterIcon />
                    )
                  }
                  label={cliente.tipo}
                  variant="outlined"
                  color="primary"
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={cliente.estado === "pagado" ? "Pagado" : "No Pagado"}
                  color={cliente.estado === "pagado" ? "success" : "error"}
                />
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => onEdit(cliente.id)}
                    startIcon={<EditIcon />}
                  >
                    Editar
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => onDetalle(cliente.id)}
                    startIcon={<RemoveRedEyeIcon />}
                  >
                    Registrar Pago
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

export default ClientesList;
