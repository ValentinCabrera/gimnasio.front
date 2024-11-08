import AlumnoInfo from "../../AlumnoInfo";
const alumnoData = 
    {
        nombre: "Juan Pérez",
        foto: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_8a6721feb2124b2e8ce38ee407cb8403.webp",
        estadoPago: "Pagado",
        objetivo: "Aumentar masa muscular",
        descripcion: "Entrenamiento enfocado en hipertrofia muscular. Asistiendo 4 veces por semana."
    }


const AlumnoPage = () =>{
    return (
        <>
        
        <AlumnoInfo
        datos={alumnoData}
        
        />
        
        </>
    )
}

export default AlumnoPage;