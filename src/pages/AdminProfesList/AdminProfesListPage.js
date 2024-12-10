import { useEffect, useState } from "react";
import ProfeList from "../../components/ProfesList";
import useFetch, { host } from "../../utils/Fetch";
import { Box, Button , Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditProfeModal from "../../components/EditProfesorModal";

const AdminProfesListPage = () => {
  const [profes, setProfesores] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProfe, setSelectedProfe] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const { getFetch, putFetch, deleteFetch } = useFetch();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const response = await getFetch(`${host}usuarios/profesores/busqueda/`);
      setProfesores(response.data);
      console.log(response.data);
    };
    getData();
  }, []);

  const handleEdit = (id) => {
    const ProfeToEdit = profes.find((profe) => profe.id === id);
    console.log("profetoedit", ProfeToEdit);
    setSelectedProfe(ProfeToEdit);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedProfe(null);
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setOpenDialog(true);
  };

  const handleProfeUpdate = (updatedProfe) => {
    const putData = async () => {
      try {
        await putFetch(`${host}usuarios/profesores/`, updatedProfe);
        console.log("Profe Actualizado");

        setProfesores((prevProfe) =>
          prevProfe.map((profe) =>
            profe.id === updatedProfe.id ? updatedProfe : profe
          )
        );
      } catch (error) {
        console.error("Error al actualizar el profesor", error);
      }
    };
    putData();
    handleModalClose();
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteFetch(`${host}usuarios/profesores/`, { id: deleteId });
      console.log("Profesor eliminado");

      setProfesores((prevProfesor) =>
        prevProfesor.filter((profesor) => profesor.id !== deleteId)
      );
    } catch (error) {
      console.error("Error al eliminar el profesor", error);
    }
    setOpenDialog(false);
    setDeleteId(null);
  };


  return (
    <>
      <Button variant="outlined" onClick={() => navigate("./agregar")}>
        Registrar Profesor
      </Button>
      <ProfeList profes={profes} onEdit={handleEdit} onDelete={handleDelete} />

      {modalOpen && (
        <EditProfeModal
          profe={selectedProfe}
          onClose={handleModalClose}
          onUpdate={handleProfeUpdate}
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
    </>
  );
};

export default AdminProfesListPage;
