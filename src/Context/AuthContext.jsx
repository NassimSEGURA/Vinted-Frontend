// context/AuthContext.js
import React, { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

export function AuthContextProvider({ children, isLoggedIn }) {
  const [authState, setAuthState] = useState(isLoggedIn);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        // Enregistrer le token dans un cookie avec une expiration de 7 jours
        Cookies.set("token", response.data.token, { expires: 7 });
        setIsLoggedIn(true);
      } else {
        setErrorMessage("Identifiants incorrects");
      }
      setAuthState(true);
      Cookies.set("token", response.data.token, { expires: 7 });
    } catch (error) {
      // Gérer les erreurs
    }
  };

  const logout = () => {
    // Gérer la déconnexion
    Cookies.remove("token");
    setAuthState(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
