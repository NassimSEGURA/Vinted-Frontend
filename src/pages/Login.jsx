import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";

const Login = ({ setIsLoggedIn, isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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
    } catch (error) {
      setErrorMessage("Une erreur s'est produite lors de la connexion.");
    }

    setIsLoading(false);
  };

  return (
    <div className="signup-container">
      <h2>Se connecter</h2>
      <form className="signup-form" onSubmit={handleLogin}>
        <input
          placeholder="Adresse email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && (
          <span className="signup-login-error-message">{errorMessage}</span>
        )}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Chargement..." : "Se connecter"}
        </button>
      </form>
      {isLoggedIn && <Navigate to="/" />}
      <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
    </div>
  );
};

export default Login;
