import Plan from "../../Plan";


const PlanPage = () =>{
    const cliente = {
        nombre: "Juan Pérez",
        id: "12345",
        edad: 30,
        email: "juan.perez@example.com",
      };
      
      const plan = [
        {
          ejercicios: [
            { nombre: "Sentadillas", series: 3, repeticiones: 12, descanso: 60 },
            { nombre: "Press Banca", series: 4, repeticiones: 10, descanso: 90 },
          ],
        },
        {
          ejercicios: [
            { nombre: "Remo con barra", series: 3, repeticiones: 8, descanso: 60 },
          ],
        },
        {
          ejercicios: [
            { nombre: "Remo con barra", series: 3, repeticiones: 8, descanso: 60 },
          ],
        },
      ];
    return(
        <Plan
        cliente={cliente}
        plan={plan} />
    )
}

export default PlanPage;