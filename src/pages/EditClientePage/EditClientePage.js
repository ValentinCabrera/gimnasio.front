
import EditarCliente from "../../components/EditarCliente";

const EditClientPage = () =>{
    const clienteInicial = {
        nombre: "Tomas Blanco",
        email: 'tomas@gmail.com',
        estadoPago:'pagado',
        tipoEntrenamiento:'Musculacion'
    };
    
    const handleSave = (updatedData) => {
        console.log("Datos actualizados del plan:", updatedData);
    
      };
    
    return(

        <EditarCliente
        clienteInicial={clienteInicial}
        onSave={handleSave}
        />
    )
}

export default EditClientPage;