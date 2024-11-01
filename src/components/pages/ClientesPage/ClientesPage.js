import { useNavigate } from "react-router-dom";
import ClientesList from "../../ClientesList"
import { Typography } from "@mui/material";
const ClientesPage = () =>{
    const navigate = useNavigate()

    return(

        <>
            <Typography variant="h4"  >
            Clientes
            </Typography>
       <ClientesList 
       onEdit={(() => navigate("./editar/1"))}
       onDetalle={(() => navigate("./registrar-pago/:id"))}
       />
        </>
    )
}

export default ClientesPage;