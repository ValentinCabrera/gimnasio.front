import { useEffect, useState } from "react";
import PlanList from "../../PlanList";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Plan from "../../Plan";
import useFetch, { host } from "../../../utils/Fetch";


const PlanesPage = () =>{
    //const [clientes,setClientes] = useState([])
    const [isModalOpen, setisModalOpen] = useState(false)
    const [selectedCliente, setselectedCliente] = useState(false);
    const [planes, setPlanes] = useState([])
    const { getFetch } = useFetch();
    const navigate = useNavigate()
    const handleEdit = (id) =>{
     //   const clienteToEdit = clientes.find((client) => client.id === id);
        //setselectedCliente(clienteToEdit);
        setisModalOpen(true);
    }



    const handleEditPlan = () =>{
        navigate("./editar/1")
    }
    const clientes = [
        { id: 1, nombre: "Juan Pérez", estado: "pagado", tipo: "Musculacion" },
        { id: 2, nombre: "Ana García", estado: "no pagado", tipo: "Funcional" },
        { id: 3, nombre: "Carlos López", estado: "pagado", tipo: "Musculacion"  },
      ];
      
    useEffect(() =>{

        const getData = async () =>{
            const response = await getFetch(`${host}planes/planes/busqueda/`)
            console.log(response.data);
            setPlanes(response.data);
        }
        getData()
    },[])


    return(
        <>
        <Typography variant="h4"  >
            Planes
        </Typography>
        <Button onClick={(()=>navigate('./agregar'))}>Agregar Plan</Button>
        <PlanList
        planes={planes}
        onEdit={handleEditPlan}

        />
        </>
    )
}

export default PlanesPage;