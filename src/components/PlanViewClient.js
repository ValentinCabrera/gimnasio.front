import PlanInfoCliente from "./PlanInfoCliente";

const PlanViewClient = () =>{
    const alumnoPlan = {
        cliente: "Juan Perez",
        plan: [
          {
            diaNombre: "Lunes",
            grupoMuscular: "Pierna",
            ejercicios: [
              { nombre: "Sentadilla", series: 4, reps: "12-10-8", descanso: 60 },
              { nombre: "Prensa", series: 4, reps: "12-10-8", descanso: 60 },
              { nombre: "Zancada", series: 4, reps: "12-10-8", descanso: 60 },
              { nombre: "Peso muerto rumano", series: 4, reps: "10-4-5", descanso: 60 },
              { nombre: "Curl femoral", series: 4, reps: "12-10-8", descanso: 60 },
              { nombre: "Gemelo en prensa", series: 4, reps: "12-10-8", descanso: 90 },
            ]
          },
          {
            diaNombre: "Miercoles",
            grupoMuscular: "Pecho + Brazo",
            ejercicios: [
              { nombre: "Press banca", series: 5, reps: 5, descanso: 120 },
              { nombre: "Press inclinado mancuernas", series: 4, reps: 8, descanso: 60 },
              { nombre: "Contractora", series: 2, reps: 12, descanso: 60 },
              { nombre: "Curl banco scott", series: 4, reps: "12-10-8", descanso: 60 },
              { nombre: "Curl alterno", series: 4, reps: "12-10-8", descanso: 60 },
              { nombre: "Press francés", series: 3, reps: 12, descanso: 60 },
              { nombre: "Extensión en polea alta", series: 3, reps: 12, descanso: 60 },
            ]
          }
        ]
      };
      

    return(
      <>
        <PlanInfoCliente
        alumnoPlan={alumnoPlan}
        />

      </>
    )
}

export default PlanViewClient;