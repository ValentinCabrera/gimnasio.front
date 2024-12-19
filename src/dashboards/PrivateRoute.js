import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function PrivateRoute({children}) {
    //const { isLogged } = useUser();
    const isLogged = true;
    return isLogged ? children : <Navigate to="/login" />;
};