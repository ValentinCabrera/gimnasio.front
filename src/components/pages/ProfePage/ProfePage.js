import ProfeInfo from "../../ProfeInfo"

const ProfePage = () => {
    const profeData = 
    {
        nombre: "Juan Pérez",
        foto: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_8a6721feb2124b2e8ce38ee407cb8403.webp",
    
        cantPlanes: "45",
        descripcion: "Entrenamiento enfocado en hipertrofia muscular. Asistiendo 4 veces por semana."
    }

    return (
        <>
        <ProfeInfo
        datos={profeData}
        />
        </>
    )
}


export default ProfePage;