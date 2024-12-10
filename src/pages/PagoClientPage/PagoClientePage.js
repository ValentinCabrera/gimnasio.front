import RegistrarPago from "../../components/RegistrarPago";

const PagoClientPage = () =>{
    const clienteTest = {
        nombre: "tomas",
        id:1,
        edad:10,
        email:"tomas@gmail.com",
        estado:"no pagado"
    }
    const fichaGym = [
        {
          entrenamiento: "Funcional",
          precio: 26000,
        },
        {
          entrenamiento: "Musculacion",
          precio: 29000,
        },
        {
          entrenamiento: "Ambos",
          precio: 30000,
        },
      ];
    return(
     <RegistrarPago
     cliente={clienteTest} 
     fichaGym={fichaGym}/>
    
    )
}

export default PagoClientPage;