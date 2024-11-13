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
import { useNavigate } from "react-router-dom";

const PlanList = ({ planes, onEdit, onDelete, onDetalle }) => {
  const navigate = useNavigate()

  const handleClick = (id) =>{
    navigate(`./verplan/${id}`)
  }
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Profesor</TableCell>
            <TableCell>Días de Entrenamiento</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {planes.map((plan) => (
            <TableRow key={plan.id}>
              <TableCell>{plan.id}</TableCell>
              <TableCell>{plan.nombre}</TableCell>
              <TableCell>{plan.descripcion}</TableCell>
              <TableCell>{plan.profesor.nombre} {plan.profesor.apellido}</TableCell>
              <TableCell>
                {plan.dias_entrenamiento.length}
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleClick(plan.id)} 
                    startIcon={<RemoveRedEyeIcon />}
                  >
                    Ver Plan
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => onEdit(plan.id)}
                    startIcon={<EditIcon />}
                  >
                    Editar
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

export default PlanList;
