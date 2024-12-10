import { Routes, Route } from "react-router-dom";
import BaseLayout from "../layouts/Layout"; // Importamos el layout
import PrivateRoute from "./PrivateRoute";
import PlanesPage from '../pages/PlanesPage/PlanesPage';
import AgregarPlan from "../components/AgregarPlan";
import PlanPage from "../pages/PlanPage/PlanPage";
import EditPlanPage from "../pages/EditPlanPage/EditPlanPage";
import ClientesPage from "../pages/ClientesPage/ClientesPage";
import EditClientPage from "../pages/EditClientePage/EditClientePage";
import PagoClientPage from "../pages/PagoClientPage/PagoClientePage";
import FichaPage from "../pages/FichaPage/FichaPage";
import EditFichaPage from "../pages/EditFichaPage/EditFichaPage";
import PerfilPage from "../pages/PerfiPage/PerfilPage";
import AdminProfesListPage from "../pages/AdminProfesList/AdminProfesListPage";
import AlumnoPage from "../pages/AlumnoPage/AlumnoPage";
import PlanViewClient from "../components/PlanViewClient";
import ProfePage from "../pages/ProfePage/ProfePage";
import ProfeSolicitudPage from "../pages/ProfeSolicitudesPage/ProfeSolicitudPage"
import CambiarPlan from "../components/CambiarPlan";
import AgregarProfesor from "../components/AgregarProfesor";
import AgregarAlumno from "../components/AgregarAlumno";
import AgregarFicha from "../components/AgregarFicha";
import AgregarEjercicio from "../components/AgregarEjercicio";
import AdminEjericiosListPage from '../pages/AdminEjerciciosList/AdminEjerciciosListPage';


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
        url: "/alumnos",
        component: <ClientesPage />
    },
    {
        url: "/alumnos/agregar",
        component: <AgregarAlumno />
    },
    {
        url: "/alumno",
        component: <AlumnoPage />
    },
    {
        url: "/profe",
        component: <ProfePage />
    },
    {
        url: "/profe/solicitudes",
        component: <ProfeSolicitudPage />
    },
    {
        url: "/profe/solicitudes/cambiar-plan/:id",
        component: <CambiarPlan />
    },
    {
        url: "/alumno/mi-plan",
        component: <PlanViewClient />
    },
    {
        url: "/alumnos/perfil/:id",
        component: <PerfilPage />
    },
    {
        url: "/alumnos/editar/:id",
        component: <EditClientPage />
    },
    {
        url: "/alumnos/registrar-pago/:id",
        component: <PagoClientPage />
    },
    {
        url: "/ficha",
        component: <FichaPage />
    },
    {
        url: "/ficha/agregar",
        component: <AgregarFicha />
    },
    {
        url: "/admin/profesores",
        component: <AdminProfesListPage />
    },
    {
        url: "/admin/profesores/agregar",
        component: <AgregarProfesor />
    },
    {
        url: "/admin/ejercicios/agregar",
        component: <AgregarEjercicio />
    },
]

// export default function PrivateDashboard() {
//     return (
//         <Routes>
//             <Route element={<BaseLayout />}>
//                 <Route element={<PrivateRoute />}>
//                     {paginas.map((pagina, index) => (
//                         <Route key={index} path={pagina.url} element={pagina.component} />
//                     ))}
//                     <Route path="*" element={<h1>404</h1>} />
//                 </Route>
//             </Route>
//         </Routes>
//     )
// }