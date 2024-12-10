import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import PlanesPage from "../pages/PlanesPage/PlanesPage";
import PrivateRoute from "./PrivateRoute";
import AgregarPlan from "../components/AgregarPlan";
import PlanPage from "../pages/PlanPage/PlanPage";
import AlumnoPage from "../pages/AlumnoPage/AlumnoPage";
import ClientesPage from "../pages/ClientesPage/ClientesPage";
import AgregarAlumno from "../components/AgregarAlumno";
import PlanViewClient from "../components/PlanViewClient";
import ProfeRoute from "./ProfeRoute";
import ProfePage from "../pages/ProfePage/ProfePage";
import ProfeSolicitudPage from "../pages/ProfeSolicitudesPage/ProfeSolicitudPage";
import AdminRoute from "./AdminRoute";
import FichaPage from "../pages/FichaPage/FichaPage";
import AgregarFicha from "../components/AgregarFicha";
import AdminProfesListPage from "../pages/AdminProfesList/AdminProfesListPage";
import AgregarProfesor from "../components/AgregarProfesor";
import AdminEjericiosListPage from "../pages/AdminEjerciciosList/AdminEjerciciosListPage";
import AgregarEjercicio from "../components/AgregarEjercicio";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Layout />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "registro",
                element: <RegisterPage />,
            },
            {
                path: "planes",
                element: (
                    <ProfeRoute>
                        <PlanesPage />
                    </ProfeRoute>
                ),
            },
            {
                path: "planes/agregar",
                element: (
                    <ProfeRoute>
                        <AgregarPlan />
                    </ProfeRoute>
                ),
            },
            {
                path: "planes/verplan/:id",
                element: (
                    <ProfeRoute>
                        <PlanPage />
                    </ProfeRoute>
                ),
            },
            {
                path: "alumno",
                element: (
                    <PrivateRoute>
                        <AlumnoPage />
                    </PrivateRoute>
                ),
            },
            {
                path: "alumno/mi-plan",
                element: (
                    <PrivateRoute>
                        <PlanViewClient />
                    </PrivateRoute>
                ),
            },
            {
                path: "profe",
                element: (
                    <ProfeRoute>
                        <ProfePage />
                    </ProfeRoute>
                ),
            },
            {
                path: "profe/solicitudes",
                element: (
                    <ProfeRoute>
                        <ProfeSolicitudPage />
                    </ProfeRoute>
                ),
            },
            {
                path: "alumnos",
                element: (
                    <ProfeRoute>
                        <ClientesPage />
                    </ProfeRoute>
                ),
            },
            {
                path: "alumnos/agregar",
                element: (
                    <ProfeRoute>
                        <AgregarAlumno />
                    </ProfeRoute>
                ),
            },
            {
                path: "admin/ficha",
                element:(
                    <AdminRoute>
                        <FichaPage />
                    </AdminRoute>
                )
            },
            {
                path: "admin/ficha/agregar",
                element:(
                    <AdminRoute>
                        <AgregarFicha />
                    </AdminRoute>
                )
            },
            {
                path: "admin/profesores",
                element:(
                    <AdminRoute>
                        <AdminProfesListPage />
                    </AdminRoute>
                )
            },
            {
                path: "admin/profesores/agregar",
                element:(
                    <AdminRoute>
                        <AgregarProfesor />
                    </AdminRoute>
                )
            },
            {
                path: "admin/ejercicios",
                element:(
                    <AdminRoute>
                        <AdminEjericiosListPage />
                    </AdminRoute>
                )
            },
            {
                path: "admin/ejercicios/agregar",
                element:(
                    <AdminRoute>
                        <AgregarEjercicio />
                    </AdminRoute>
                )
            },
            {
                path: "/*",
                element: <h1>404</h1>,
            },
        ],
    },
]);

export default function RoutesDash() {
    return <RouterProvider router={router} />;
}
