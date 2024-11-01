import { Typography } from "@mui/material";
import FichaList from "../../FichaList";
import { useNavigate } from "react-router-dom";


const FichaPage = () =>{
    const navigate = useNavigate()
    return(
        <>
        <Typography>Ficha Gimnasio</Typography>
        <FichaList 
        onEdit={(() => navigate('./editar/:id'))}
        />
        </>
    )
}


export default FichaPage;