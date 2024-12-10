import { createContext, useState, useEffect } from "react";
import { useContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [token, setToken] = useState(undefined);
  const [usuario, setUsuario] = useState(null);
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [isLogged, setIsLogged] = useState(null);
  const [rol, setRol] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessTokenStorage = localStorage.getItem("accessToken");
    const refreshTokenStorage = localStorage.getItem("refreshToken");

    if (accessTokenStorage) {
      setAccessToken(accessTokenStorage);
    
    }


    if (refreshTokenStorage) {
      setRefreshToken(refreshTokenStorage);
    }

    
    setLoading(false);
  }, []);

  function getToken() {
    if (token) return token;
    return localStorage.getItem("token");
  }

  function handleSetAccessToken(token) {
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
  }

  function handleSetRefreshToken(token) {
    setRefreshToken(token);
    localStorage.setItem("refreshToken", token);
  }

  function getRefreshToken() {
    if (loading) return localStorage.getItem("refreshToken");
    return token;
  }


  function getAccessToken() {
    if (loading) return localStorage.getItem("accessToken");
    return accessToken;
  }

  function getRefreshToken() {
    if (loading) return localStorage.getItem("refreshToken");
    alert(refreshToken)
    return refreshToken;
  }

  function login(respuesta) {
    handleSetAccessToken(respuesta.token.access);
    handleSetRefreshToken(respuesta.token.refresh);
    setIsLogged(true);
  }

  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLogged(false);
    setAccessToken();
    setRefreshToken();
  }


  return (
    <UserContext.Provider
      value={{
        token,
        login,
        logout,
        usuario,
        rol,
        getToken,
        setRol,
        getAccessToken,
        getRefreshToken,
        handleSetAccessToken,
        handleSetRefreshToken,
        isLogged,

      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };


export const useUser = () => {
  return useContext(UserContext);
};
