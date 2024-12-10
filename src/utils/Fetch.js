import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


export const host = "https://gimnasioapi.cabrera.ar/";

async function customFetch(url, requestInit, getRefreshToken, handleSetAccessToken, handleSetRefreshToken, navigate) {


    try {
        const response = await fetch(url, requestInit);
        const responseText = await response.text();
        let responseData;

        try {
            responseData = JSON.parse(responseText);
        } catch (error) {
            throw new Error("Error parsing response to JSON");
        }

        if (!response.ok) {
            if (response.status === 401) {
                const refreshResponse = await fetch(`${host}auth/token/refresh/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ refresh: getRefreshToken() })
                });

                if (refreshResponse.ok) {
                    const data = await refreshResponse.json();
                    handleSetAccessToken(data.access);
                    handleSetRefreshToken(data.refresh);

                    requestInit.headers['Authorization'] = `Token ${data.access}`;

                    return customFetch(url, requestInit, getRefreshToken, handleSetAccessToken, handleSetRefreshToken, navigate);
                } else {
                    navigate('/login');
                    return; // Salir de la función para evitar hacer la petición de nuevo
                }
            }
            throw responseData; // Lanza el objeto JSON del error
        }

        return responseData; // Devuelve el objeto JSON si todo está bien
    } catch (error) {
        throw error; // Lanza el error tal como se recibió, que ahora puede ser un objeto JSON
    }
};

export default function useFetch() {
    const { getAccessToken, getRefreshToken, handleSetAccessToken, handleSetRefreshToken } = useContext(UserContext);
    const navigate = useNavigate()
    function getHeaderToken(header = {}) {
        return { ...header, 'Authorization': `Token ${getAccessToken()}` };
    }

    async function getFetch(url, loginRequired = false) {
        let headers = {};

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'GET', headers: headers }, getRefreshToken, handleSetAccessToken, handleSetRefreshToken, navigate);
    }


    async function postFetch(url, body, loginRequired = false) {
        let headers = { 'Content-Type': 'application/json' };

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) }, getRefreshToken, handleSetAccessToken, handleSetRefreshToken, navigate);
    }

    
    async function postFetchFormData(url, body, loginRequired = false) {
        let headers = {};

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'POST', headers: headers, body: body }, getRefreshToken, handleSetAccessToken, handleSetRefreshToken, navigate);
    }
    async function putFetchFormData(url, body, loginRequired = false) {
        let headers = {};

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'PUT', headers: headers, body: body }, getRefreshToken, handleSetAccessToken, handleSetRefreshToken, navigate);
    }

    async function putFetch(url, body, loginRequired = false) {
        let headers = { 'Content-Type': 'application/json' };

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'PUT', headers: headers, body: JSON.stringify(body) }, getRefreshToken, handleSetAccessToken, handleSetRefreshToken, navigate);
    }

    async function deleteFetch(url, body, loginRequired = false) {
        let headers = { 'Content-Type': 'application/json' };

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'DELETE', headers: headers, body: JSON.stringify(body) }, getRefreshToken, handleSetAccessToken, handleSetRefreshToken, navigate);
    }

    return { getFetch, postFetch, putFetch, deleteFetch, putFetchFormData, postFetchFormData };
}