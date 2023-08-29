import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../assets/img/logo.png";

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="navContainer">
      <Link to="/">
        <div className="logoWrapper">
          <img className="headerLogo" src={logo} alt="" />
        </div>
      </Link>
      <div className="searchContainer">
        <div className="searchBarWrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Recherche des articles"
          ></input>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            className="svg-inline--fa fa-search fa-w-16 search-input-icon"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </div>
        <div>
          <div
            style={{
              marginTop: "25px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: 10 + "px" }}>Trier par prix : </span>
            <span className="checkbox">
              <input type="checkbox" name="price"></input>
              <div className="wrapper">
                <div className="knob">
                  <span>⇡</span>
                </div>
              </div>
            </span>
            <span style={{ marginRight: "10px" }}>Prix entre : </span>
            <div
              style={{
                transform: "scale(1)",
                cursor: "inherit",
                height: "36px",
                display: "flex",
                width: "50%",
              }}
            >
              <div
                style={{
                  height: 5 + "px",
                  width: 100 + "%",
                  bordeRadius: 4 + "px",
                  background:
                    "linear-gradient(to right, rgb(204, 204, 204) 0%, rgb(204, 204, 204) 0%, rgb(44, 177, 186) 0%, rgb(44, 177, 186) 20%, rgb(204, 204, 204) 20%, rgb(204, 204, 204) 100%)",
                  alignSelf: "center",
                }}
              >
                <div
                  tabIndex="0"
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="0"
                  draggable="false"
                  role="slider"
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    cursor: "grab",
                    userSelect: "none",
                    touchAction: "none",
                    height: 15 + "px",
                    width: 15 + "px",
                    bordeRadius: 50 + "%",
                    backgroundColor: "rgb(44, 177, 186)",
                    outline: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: " translate(-8.5px, -6px)",
                    border: "1px solid white",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -28 + "px",
                      color: "rgb(255, 255, 255)",
                      fontSize: 12 + "px",
                      fontFamily: "Maison Neue",
                      padding: 4 + "px",
                      borderRadius: 4 + "px",
                      backgroundColor: "rgb(44, 177, 186)",
                    }}
                  >
                    0€
                  </div>
                </div>
                <div
                  tabIndex="0"
                  aria-valuemax="500"
                  aria-valuemin="0"
                  aria-valuenow="100"
                  draggable="false"
                  role="slider"
                  style={{
                    position: "absolute",
                    zIndex: 0,
                    cursor: "grab",
                    userSelect: "none",
                    touchAction: "none",
                    height: 15 + "px",
                    width: 15 + "px",
                    borderRadius: 50 + "%",
                    border: "1px solid white",
                    backgroundColor: "rgb(44, 177, 186)",
                    outline: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translate(54.7px, -6px)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -28 + "px",
                      color: "rgb(255, 255, 255)",
                      fontSize: 12 + "px",
                      fontFamily: "Maison Neue",
                      padding: 4 + "px",
                      borderRadius: 4 + "px",
                      backgroundColor: "rgb(44, 177, 186)",
                    }}
                  >
                    100€
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {isLoggedIn ? (
          // Si l'utilisateur est connecté, affiche le bouton de déconnexion
          <button className="logout-button" onClick={handleLogout}>
            Se déconnecter
          </button>
        ) : (
          // Si l'utilisateur n'est pas connecté, affiche les boutons d'inscription et de connexion
          <div>
            <Link to="/signup">
              <button className="header-button button-login-signup button-signup">
                S'inscrire
              </button>
            </Link>
            <Link to="/login">
              <button className="header-button button-login-signup">
                Se connecter
              </button>
            </Link>
          </div>
        )}
      </div>
      <Link to="/publish">
        <button className="header-button button-sold">
          Vends tes articles
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
