import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import useUser from '../hooks/useUser';

export default function PrivateRoute({children}) {
    //const { isLogged } = useUser();
    const isLogged = false;
    return isLogged ? children : <Navigate to="/login" />;
};