
import FichaList from "../../FichaList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch, { host } from "../../../utils/Fetch";
import EditFichaModal from "../../EditFichaModal";
import { Box, Button , Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography} from "@mui/material";

const FichaPage = () => {
  const navigate = useNavigate();
  const [ficha, setFicha] = useState([]);
  const { getFetch, putFetch, deleteFetch } = useFetch();
  const [selectedFicha, setSelectedFicha] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);


  useEffect(() => {
    const getData = async () => {
      const response = await getFetch(`${host}planes/servicios/busqueda/`);
      console.log("response", response.data);
      setFicha(response.data);
    };
    getData();
  }, []);

  const handleFichaUpdate = (updatedFicha) => {
    const putData = async () => {
      try {
        await putFetch(`${host}planes/servicios/`, updatedFicha);
        console.log("Ficha actualizada", updatedFicha);
        setFicha((prevData) =>
          prevData.map((data) =>
            data.id === updatedFicha.id ? updatedFicha : data
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

    putData();
    handleModalClose();
  };

  const handleEdit = async (id) => {
    const FichaToEdit = ficha.find((fich) => fich.id === id);
    setSelectedFicha(FichaToEdit);
    setOpen(true);
  };

  const handleModalClose = () => {
    setSelectedFicha(null);
    setOpen(false);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setOpenDialog(true);
  };


  
  const handleConfirmDelete = async () => {
    try {
      await deleteFetch(`${host}planes/servicios/`, { id: deleteId });
      console.log("Ficha eliminada");

      setFicha((prevFicha) =>
        prevFicha.filter((ficha) => ficha.id !== deleteId)
      );
    } catch (error) {
      console.error("Error al eliminar la Ficha", error);
    }
    setOpenDialog(false);
    setDeleteId(null);
  };

  return (
    <>
      <Button variant="outlined" onClick={() => navigate("./agregar")}>
        Registrar Ficha
      </Button>

      <Typography>Ficha Gimnasio</Typography>
      <FichaList ficha={ficha} onEdit={handleEdit} onDelete={handleDelete}/>

      {isOpen && (
        <EditFichaModal
          ficha={selectedFicha}
          onClose={handleModalClose}
          onUpdate={handleFichaUpdate}
        />
      )}


<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{"Confirmar eliminación"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar esta ficha?
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

export default FichaPage;
