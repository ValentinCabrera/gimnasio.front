export const host = "http://localhost:8000";

async function customFetch(url, requestInit) {
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
            throw responseData; // Lanza el objeto JSON del error
        }

        return responseData; // Devuelve el objeto JSON si todo está bien
    } catch (error) {
        throw error; // Lanza el error tal como se recibió, que ahora puede ser un objeto JSON
    }
};

export default function useFetch() {
    function getHeaderToken(header = {}) {
        // const { token } = useContext(UserContext);
        // return { ...header, 'Authorization': `Token ${token}` };
    }

    async function getFetch(url, loginRequired = false) {
        let headers = {};

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'GET', headers: headers });
    };

    async function postFetch(url, body, loginRequired = false) {
        let headers = { 'Content-Type': 'application/json' };

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) });
    };

    async function postFetchFormData(url, body, loginRequired = false) {
        let headers = {};

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'POST', headers: headers, body: body });
    }

    async function putFetch(url, body, loginRequired = false) {
        let headers = { 'Content-Type': 'application/json' }

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'PUT', headers: headers, body: JSON.stringify(body) });
    };

    async function deleteFetch(url, body, loginRequired = false) {
        let headers = { 'Content-Type': 'application/json' };

        if (loginRequired) {
            headers = getHeaderToken(headers);
        }

        return customFetch(url, { method: 'DELETE', headers: headers, body: JSON.stringify(body) });
    };

    return { getFetch, postFetch, putFetch, deleteFetch, postFetchFormData };
}