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
          sets: [
            {
              ejercicios: [
                {
                  nombre: "Sentadillas",
                  series: [
                    { reps: "12", tipo: "Reps", descanso: 60 },
                    { reps: "10", tipo: "Reps", descanso: 60 },
                    { reps: "8", tipo: "Reps", descanso: 60 },
                  ],
                },
                {
                  nombre: "Press Banca",
                  series: [
                    { reps: "10", tipo: "Reps", descanso: 90 },
                    { reps: "8", tipo: "Reps", descanso: 90 },
                    { reps: "6", tipo: "Reps", descanso: 90 },
                  ],
                },
              ],
            },
            {
              ejercicios: [ 
                {
                  nombre: "Dominadas",
                  series: [
                    { reps: "8", tipo: "Reps", descanso: 90 },
                    { reps: "6", tipo: "Reps", descanso: 90 },
                  ],
                },
              ],
            },
          ],
        },
        {
          sets: [
            {
              ejercicios: [
                {
                  nombre: "Remo con barra",
                  series: [
                    { reps: "10", tipo: "Reps", descanso: 60 },
                    { reps: "8", tipo: "Reps", descanso: 60 },
                  ],
                },
              ],
            },
          ],
        },
        {
          sets: [
            {
              ejercicios: [
                {
                  nombre: "Peso muerto",
                  series: [
                    { reps: "10", tipo: "Reps", descanso: 60 },
                    { reps: "8", tipo: "Reps", descanso: 60 },
                  ],
                },
                {
                  nombre: "Curl de bíceps",
                  series: [
                    { reps: "12", tipo: "Reps", descanso: 60 },
                    { reps: "10", tipo: "Reps", descanso: 60 },
                  ],
                },
              ],
            },
          ],
        },
        {
          sets: [
            {
              ejercicios: [
                {
                  nombre: "Peso muerto",
                  series: [
                    { reps: "10", tipo: "Reps", descanso: 60 },
                    { reps: "8", tipo: "Reps", descanso: 60 },
                  ],
                },
                {
                  nombre: "Press Militar",
                  series: [
                    { reps: "10", tipo: "Reps", descanso: 60 },
                    { reps: "8", tipo: "Reps", descanso: 60 },
                  ],
                },
              ],
            },
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