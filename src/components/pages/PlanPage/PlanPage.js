import { useEffect, useState } from "react";
import Plan from "../../Plan";
import { useParams } from "react-router-dom";
import useFetch, { host } from "../../../utils/Fetch";
import axios from "axios";
const PlanPage = () => {
  const [plan2, setPlan2] = useState(null);
  const { id } = useParams();
  const { getFetch } = useFetch();

  useEffect(() => {
    const getPlan = async () => {
      try {
        //const response = await getFetch(`${host}planes/planes/${id}/`);
        const response2 = await axios.get(`${host}planes/planes/${id}/`);
        console.log("data", response2.data);
        setPlan2(response2.data);
      } catch (error) {
        console.error("hubo un error xd", error);
      }
    };

    getPlan();
  }, [id]);

  const cliente = {
    nombre: "Juan Pérez",
    id: "12345",
    edad: 30,
    email: "juan.perez@example.com",
  };
  console.log("render", plan2);

  return (
    <>
      <h1>Plan</h1>
      {plan2 ? <Plan plan={plan2} cliente={cliente} /> : <p>Cargando...</p>}
    </>
  );
};

export default PlanPage;
