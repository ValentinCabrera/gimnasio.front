import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

export default function AdminRoute({children}) {
    //const { isLogged, usuario } = useContext(UserContext);
    const usuario = {
        admin:true,
    }
    const isLogged = true
    return isLogged == true && usuario?.admin == true ? children : <Navigate to={"/login"} />
};