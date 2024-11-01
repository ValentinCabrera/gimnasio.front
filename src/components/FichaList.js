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
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import EditIcon from '@mui/icons-material/Edit';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import { Accessibility } from "@mui/icons-material";

const FichaList = ({onEdit,onDelete, onDetalle}) => {
  const ficha = [
    { id: 1, nombre: "Musculacion", precio: "10.000",  },
    { id: 1, nombre: "Funcional", precio: "20.000" },
    { id: 1, nombre: "Ambas", precio: "25.000"},


  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ficha.map((ficha) => (
            <TableRow key={ficha.id}>
              <TableCell>{ficha.id}</TableCell>
              <TableCell>
              <Chip
                  icon={
                    ficha.nombre === 'Funcional' ? (
                      <SportsGymnasticsIcon />
                    ) : ficha.nombre === 'Musculacion' ? (
                      <FitnessCenterIcon />
                    ) : (
                      <Accessibility />
                    )
                  }
                  label={ficha.nombre}
                  variant="outlined"
                  color="primary"
                />

              </TableCell>
              <TableCell> $ {ficha.precio}</TableCell>
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
                    onClick={() => onEdit(ficha.id)}
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

export default FichaList;
