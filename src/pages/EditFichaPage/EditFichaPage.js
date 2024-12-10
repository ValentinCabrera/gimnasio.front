import EditarFicha from "../../components/EditarFicha";

const EditFichaPage = () =>{
    const data = {
        nombre:"Musculacion", 
        precio:"20000"
    }
    return(
        <>
        <EditarFicha 
        fichaInicial={data}
        />
        </>
    )
}


export default EditFichaPage;