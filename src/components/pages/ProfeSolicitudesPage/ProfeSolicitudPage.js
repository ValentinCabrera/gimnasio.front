import { useNavigate } from "react-router-dom";
import ProfeSolicitudList from "../../ProfeSolicitudList";


const ProfeSolicitudPage = () =>{
    const navigate = useNavigate()
    const ejemploSolicitudes = [
        {
          id: 1,
          nombre: "Juan",
          apellido: "Pérez",
          telefono: "555-1234",
          email: "juan.perez@example.com",
        },
        {
          id: 2,
          nombre: "María",
          apellido: "González",
          telefono: "555-5678",
          email: "maria.gonzalez@example.com",
        },
        {
          id: 3,
          nombre: "Pedro",
          apellido: "Rodríguez",
          telefono: "555-9012",
          email: "pedro.rodriguez@example.com",
        },
        {
          id: 4,
          nombre: "Ana",
          apellido: "Sánchez",
          telefono: "555-3456",
          email: "ana.sanchez@example.com",
        },
        {
          id: 5,
          nombre: "Luis",
          apellido: "Gómez",
          telefono: "555-7890",
          email: "luis.gomez@example.com",
        },
      ];

      const handleCambiarPlan = (id) =>{
        navigate(`./cambiar-plan/${id}`)
      }
    return(
        <>
        <ProfeSolicitudList
        solicitudes={ejemploSolicitudes}
        onEdit={handleCambiarPlan}
        />
        </>
    )
}

export default ProfeSolicitudPage;