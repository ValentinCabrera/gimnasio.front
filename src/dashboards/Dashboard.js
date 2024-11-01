import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import PlanesPage from "../components/pages/PlanesPage/PlanesPage";
import AgregarPlan from "../components/AgregarPlan";
import PlanPage from "../components/pages/PlanPage/PlanPage";
import EditPlanPage from "../components/pages/EditPlanPage/EditPlanPage";
import ClientesPage from "../components/pages/ClientesPage/ClientesPage";
import EditClientPage from "../components/pages/EditClientePage/EditClientePage";
import PagoClientPage from "../components/pages/PagoClientPage/PagoClientePage";
import FichaPage from "../components/pages/FichaPage/FichaPage";
import EditFichaPage from "../components/pages/EditFichaPage/EditFichaPage";

export const paginas = [
    {
        url: "/planes",
        component: <PlanesPage />
    },
    {
        url: "/planes/agregar",
        component: <AgregarPlan />
    },
    {
        url: "/planes/verplan/:id",
        component: <PlanPage />
    },
    {
        url: "/planes/editar/:id",
        component: <EditPlanPage />
    },
    {
        url: "/clientes",
        component: <ClientesPage />
    },
    {
        url: "/clientes/editar/:id",
        component: <EditClientPage />
    },
    {
        url: "/clientes/registrar-pago/:id",
        component: <PagoClientPage />
    },
    {
        url: "/ficha",
        component: <FichaPage />
    },
    {
        url: "/ficha/editar/:id",
        component: <EditFichaPage />
    },
]

export default function Dashboard() {
    return (
        <Routes>
            <Route element={<Layout />}>

                {paginas.map((pagina, index) => (
                    <Route key={index} path={pagina.url} element={pagina.component} />
                ))}

                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    )
}