import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import useFetch, { host } from '../utils/Fetch';

export default function PrivateRoute() {
    const { setPlanes, getToken, setRol } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    const { postFetch } = useFetch();

    const token = getToken();

    const navigate = useNavigate();

    useEffect(() => {
        if (token !== undefined && token !== null) {
            postFetch(host + 'validar-token/', { token: token })
                .then(data => {
                    setPlanes(data.planes);
                    setRol(data.rol);
                })
                .catch(err => {
                    console.log(err);
                    navigate('');
                })
        }
        setLoading(false);
    }, []);

    if (loading) return null;
    return token ? <Outlet /> : <Navigate to="/login" />;
};
