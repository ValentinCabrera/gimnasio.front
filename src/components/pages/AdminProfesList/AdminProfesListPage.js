import { useEffect, useState } from "react";
import ProfeList from "../../ProfesList";
import useFetch, { host } from "../../../utils/Fetch";

const AdminProfesListPage = () =>{
    const [profes, setProfesores] = useState([])
    const { getFetch } = useFetch()

    useEffect(() =>{

        const getData = () =>{
            getFetch(`${host}planes/profesores/search`)
        }
    })
    return(
        <>
        <ProfeList
        profes={profes}
        />
        </>
    )
}


export default AdminProfesListPage;