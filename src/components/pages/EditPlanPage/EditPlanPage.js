import React from "react";
import EditarPlan from "../../EditarPlan";

const EditPlanPage = () => {
  // Simulación de datos iniciales
  const clienteInicial = "Tomas Blanco";
  const planInicial = [
    {
      ejercicios: [
        { nombre: "Press de banca", series: 4, repeticiones: 10, descanso: 60 },
        { nombre: "Sentadilla", series: 4, repeticiones: 12, descanso: 90 },
      ],
    },
    {
      ejercicios: [
        { nombre: "Peso muerto", series: 4, repeticiones: 8, descanso: 120 },
        { nombre: "Dominadas", series: 3, repeticiones: 10, descanso: 60 },
      ],
    },
  ];

  // Función para manejar la acción de guardar cambios
  const handleSave = (updatedData) => {
    console.log("Datos actualizados del plan:", updatedData);
    // Aquí puedes añadir la lógica para enviar los datos actualizados al backend o manejar la actualización en el estado global
  };

  return (
    <>
      <EditarPlan
        clienteInicial={clienteInicial}
        planInicial={planInicial}
        onSave={handleSave}
      />
    </>
  );
};

export default EditPlanPage;
