import { useState } from "react";
import PlanList from "../../PlanList";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Plan from "../../Plan";


const PlanesPage = () =>{
    //const [clientes,setClientes] = useState([])
    const [isModalOpen, setisModalOpen] = useState(false)
    const [selectedCliente, setselectedCliente] = useState(false);
    const navigate = useNavigate()
    const handleEdit = (id) =>{
     //   const clienteToEdit = clientes.find((client) => client.id === id);
        //setselectedCliente(clienteToEdit);
        setisModalOpen(true);
    }

    const onDetalleGo = () =>{
        navigate('./verplan/1')
    }

    const handleEditPlan = () =>{
        navigate("./editar/1")
    }

    const cliente = {
        nombre: "Juan Pérez",
        id: "12345",
        edad: 30,
        email: "juan.perez@example.com",
      };
      


    return(
        <>
        <Typography variant="h4"  >
            Planes
        </Typography>
        <Button onClick={(()=>navigate('./agregar'))}>Agregar Plan</Button>
        <PlanList
        onEdit={handleEditPlan}
        onDetalle={onDetalleGo}
        />
        </>
    )
}

export default PlanesPage;