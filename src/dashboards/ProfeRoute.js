import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import useUser from '../hooks/useUser';

export default function ProfeRoute({children}) {
    //const { isLogged, usuario } = useUser();
    const usuario = {
        alumno:false,
    }
    const isLogged = true 
    return isLogged == true && usuario?.alumno === false ? children : <Navigate to={"/login"} />
};