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
import DeleteIcon from '@mui/icons-material/Delete';
import { Accessibility } from "@mui/icons-material";

const FichaList = ({ficha,onEdit,onDelete, onDetalle}) => {


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Descripcion</TableCell>
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
              <TableCell>{ficha.descripcion}</TableCell>
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

                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => onDelete(ficha.id)}
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

export default FichaList;
