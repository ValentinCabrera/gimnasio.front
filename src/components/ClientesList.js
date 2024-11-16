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
  Typography,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
const ClientesList = ({ clientes, onEdit, onDetalle, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>Inscripcion</TableCell>
            <TableCell>Plan Activo</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.length > 0 ? (
            clientes.map((cliente) => (
              <TableRow key={cliente.id}>
                <TableCell>{cliente.id}</TableCell>
                <TableCell>
                  {cliente.nombre} {cliente.apellido}
                </TableCell>
                <TableCell>{cliente.email}</TableCell>
                <TableCell>{cliente.telefono}</TableCell>
                <TableCell>{cliente.fecha_inscripcion}</TableCell>
                <TableCell>
                  {cliente.plan_activo ? (
                    <Link
                      to={`/planes/verplan/${cliente.plan_activo.id}`}
                      style={{
                        textDecoration: "none",
                        color: "#1976d2",
                        fontWeight: "bold",
                      }}
                    >
                      {cliente.plan_activo.nombre}
                    </Link>
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      Sin plan activo
                    </Typography>
                  )}
                </TableCell>

                <TableCell>
                  <Chip
                    icon={
                      cliente.tipo === "Funcional" ? (
                        <SportsGymnasticsIcon />
                      ) : (
                        <FitnessCenterIcon />
                      )
                    }
                    label={"Musculacion"}
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
                      height:"50px",
                      justifyContent:"center"
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
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => onDelete(cliente.id)}
                      startIcon={<DeleteIcon />}
                    >
                      Borrar
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography variant="body1" color="textSecondary">
                  No hay datos disponibles
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientesList;
