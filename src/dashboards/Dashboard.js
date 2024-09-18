import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Example from "../pages/example/Example";

export const paginas = [
    {
        url: "/example",
        component: <Example />
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