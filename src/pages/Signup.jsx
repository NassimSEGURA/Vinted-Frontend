import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";

const Signup = ({ setIsLoggedIn, isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email,
          username,
          password,
          newsletter,
        }
      );

      if (response.data.token) {
        // Enregistrer le token dans un cookie avec une expiration de 7 jours
        Cookies.set("token", response.data.token, { expires: 7 });
        setIsLoggedIn(true);
      } else {
        setErrorMessage("Une erreur s'est produite lors de l'inscription.");
      }
    } catch (error) {
      setErrorMessage("Une erreur s'est produite lors de l'inscription.");
    }

    setIsLoading(false);
  };

  return (
    <div className="signup-container">
      <h2>S'inscrire</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
          placeholder="Nom d'utilisateur"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          placeholder="Email"
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
        <div className="checkbox-container">
          <div>
            <input
              type="checkbox"
              checked={newsletter}
              onChange={() => setNewsletter(!newsletter)}
            />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les{" "}
            <a href="#">Termes & Conditions</a> et{" "}
            <a href="#">Politique de Confidentialité</a> de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Chargement..." : "S'inscrire"}
        </button>
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
      {isLoggedIn && <Navigate to="/" />}
    </div>
  );
};

export default Signup;
