import { Routes, Route } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Example from "../pages/example/Example";
import PrivateRoute from "./PrivateRoute";

export const paginas = [
    {
        url: "/example",
        component: <Example />
    },
]

export default function PrivateDashboard() {
    return (
        <Routes>
            <Route element={<BaseLayout />}>
                <Route element={<PrivateRoute />}>
                    {paginas.map((pagina, index) => (
                        <Route key={index} path={pagina.url} element={pagina.component} />
                    ))}
                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Route>
        </Routes>
    )
}