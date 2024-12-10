import { useNavigate } from "react-router-dom";
import ClientesList from "../../components/ClientesList";
import { Box, Button , Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography} from "@mui/material";
import { useEffect, useState } from "react";
import useFetch, { host } from "../../utils/Fetch";
import EditAlumnoModal from "../../components/ModalEditarAlumno";
import { Pause } from "@mui/icons-material";
const ClientesPage = () => {
  const navigate = useNavigate();
  const [alumnos, setAlumnos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAlumno, setSelectedAlumno] = useState(false);
  const [planes,setPlanes] = useState([])
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const { getFetch, putFetch, deleteFetch } = useFetch();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getFetch(`${host}planes/alumnos/busqueda/`);
        console.log("alumnos", response.data);
        setAlumnos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const handleConfirmDelete = async () => {
    try {
      await deleteFetch(`${host}planes/alumnos/`, { id: deleteId });
      console.log("Alumnos eliminado");

      setAlumnos((prevAlumno) =>
        prevAlumno.filter((alumno) => alumno.id !== deleteId)
      );
    } catch (error) {
      console.error("Error al eliminar el alumno", error);
    }
    setOpenDialog(false);
    setDeleteId(null);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setOpenDialog(true);
  };

  const handleAlumnoUpdate = (updatedAlumno) => {
    console.log("envio", updatedAlumno)
    const putData = async () => {
      try {
        const payload = {
            ...updatedAlumno,
            plan_activo: updatedAlumno.plan_activo.id
          };
          console.log("envio2", payload);
          
        const send = await putFetch(`${host}planes/alumnos/`, payload);
        const updatedData = send.data
        console.log("Alumno Actualizado", send.data);
        setAlumnos((prevAlumnos) =>
            prevAlumnos.map((alumno) =>
              alumno.id === updatedAlumno.id ? updatedData : alumno
            )
        );
      } catch (error) {
        console.error("Error al actualizar el alumno", error);
      }
    };
    putData();
    handleModalClose();
  };

  const handleEdit = async (id) => {
    const AlumnoToEdit = alumnos.find((alumno) => alumno.id === id);
    console.log("AlumnoTOedit", AlumnoToEdit);
    setSelectedAlumno(AlumnoToEdit);
    try {
        const response = await getFetch(`${host}planes/planes/busqueda/`);
        console.log("planes cargados", response.data);
        setPlanes(response.data)
        setModalOpen(true);
    } catch (error) {
        console.error("Error al cargar los planes", error)
    }
  };

  const handleModalClose = () => {
    setSelectedAlumno(null);
    setModalOpen(false);
  };

  return (
    <>
      <Typography variant="h4">Alumnos</Typography>
      <Button variant="outlined" onClick={() => navigate("./agregar")}>
        Registrar Alumno
      </Button>
      <ClientesList
        onEdit={handleEdit}
        onDetalle={() => navigate("./registrar-pago/:id")}
        clientes={alumnos}
        onDelete={handleDelete}
      />

    {modalOpen && (
    <EditAlumnoModal
        alumno={selectedAlumno}
        onClose={handleModalClose}
        planes={planes}
        onUpdate={handleAlumnoUpdate}
    />)
}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{"Confirmar eliminación"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar este alumno?
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

export default ClientesPage;
