import Perfil from "../../components/Perfil"

const PerfilPage = () =>{
    const alumnoEjemplo = {
        nombre: "Laura Martínez",
        avatarUrl: "https://example.com/avatar.jpg",
        objetivo: "Mejorar la resistencia",
        planes: [
          {
            mes: "Noviembre",
            detalles: [
              // Día 1
              {
                dia: "Lunes",
                sets: [
                  {
                    ejercicios: [
                      {
                        nombre: "Correr",
                        series: [
                          { reps: "5 km", tipo: "distancia", descanso: "5 min" },
                        ],
                      },
                      {
                        nombre: "Flexiones",
                        series: [
                          { reps: 15, tipo: "repeticiones", descanso: "1 min" },
                        ],
                      },
                      {
                        nombre: "Sentadillas",
                        series: [
                          { reps: 20, tipo: "repeticiones", descanso: "1 min" },
                        ],
                      },
                    ],
                  },
                ],
              },
              // Día 2
              {
                dia: "Miércoles",
                sets: [
                  {
                    ejercicios: [
                      {
                        nombre: "Bicicleta",
                        series: [
                          { reps: "30 min", tipo: "tiempo", descanso: "5 min" },
                        ],
                      },
                      {
                        nombre: "Abdominales",
                        series: [
                          { reps: 20, tipo: "repeticiones", descanso: "1 min" },
                        ],
                      },
                      {
                        nombre: "Plancha",
                        series: [
                          { reps: "30 seg", tipo: "tiempo", descanso: "1 min" },
                        ],
                      },
                    ],
                  },
                ],
              },
              // Día 3
              {
                dia: "Viernes",
                sets: [
                  {
                    ejercicios: [
                      {
                        nombre: "Nadar",
                        series: [
                          { reps: "20 min", tipo: "tiempo", descanso: "5 min" },
                        ],
                      },
                      {
                        nombre: "Burpees",
                        series: [
                          { reps: 10, tipo: "repeticiones", descanso: "1 min" },
                        ],
                      },
                      {
                        nombre: "Elevaciones de talones",
                        series: [
                          { reps: 15, tipo: "repeticiones", descanso: "30 seg" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      };
 

      
      
     
      
    return(
        <Perfil
        alumno={alumnoEjemplo}
        />
    )
}

export default PerfilPage;