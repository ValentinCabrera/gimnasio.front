import { useEffect } from "react";
import EjerciciosList from "../../components/EjerciciosList";
import useFetch, { host } from "../../utils/Fetch";
import { useState } from "react";
import { Box, Button , Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditarEjercicioModal from "../../components/EditarEjercicioModal";

const AdminEjericiosListPage = () => {
  const [ejercicios, setEjercicios] = useState([]);
  const [selectedEjericio, setSelectedEjercicio] = useState(null);
  const { getFetch, putFetch, deleteFetch } = useFetch();
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFetch(`${host}planes/ejercicios/busqueda/`);
        setEjercicios(response.data);
        console.log("ejercicios", response.data);
      } catch (error) {
        console.error("Error en el fetch:", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (id) => {
    const ejercicioToEdit = ejercicios.find((ejercicio) => ejercicio.id === id);
    console.log("ejercicioToEdit", ejercicioToEdit);
    setSelectedEjercicio(ejercicioToEdit);
    setOpen(true);
  };

  const handleModalClose = () => {
    setSelectedEjercicio(null);
    setOpen(false);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setOpenDialog(true);
  };

  const handleEjercicioUpdate = (updatedEjercicio) => {
    console.log("updatedEjercicio", updatedEjercicio);
    const putData = async () => {
      try {
        await putFetch(`${host}planes/ejercicios/`, updatedEjercicio);
        console.log("Ejercicio Actualizado");

        setEjercicios((prevEjercicio) =>
          prevEjercicio.map((ejercicio) =>
            ejercicio.id === updatedEjercicio.id ? updatedEjercicio : ejercicio
          )
        );
      } catch (error) {
        console.error("Error al actualizar el ejercicio", error);
      }
    };
    putData();
    handleModalClose();
  };

  const handleConfirmDelete = async () => {
    try {
        await deleteFetch(`${host}planes/ejercicios/`, { id: deleteId });
        console.log("Ejercicio eliminado");

        setEjercicios((prevEjercicio) =>
            prevEjercicio.filter((ejercicio) => ejercicio.id !== deleteId)
        );
    } catch (error) {
        console.error("Error al eliminar el ejercicio", error);
    }
    setOpenDialog(false);
    setDeleteId(null);
    }

  return (
    <div>
      <h1>Listado Ejercicios</h1>
      <Button onClick={() => navigate("./agregar")}>Agregar Ejercicio</Button>
      <EjerciciosList
        ejercicios={ejercicios}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {open && (
        <EditarEjercicioModal
          ejercicio={selectedEjericio}
          onClose={handleModalClose}
          onUpdate={handleEjercicioUpdate}
        />
      )}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{"Confirmar eliminación"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar esta categoria?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminEjericiosListPage;
