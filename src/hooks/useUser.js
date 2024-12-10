import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function useUser() {
  const {
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
  } = useContext(UserContext);

  return {
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
  };
}
