import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Publish = ({ setIsLoggedIn, isLoggedIn }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("picture", picture);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="publish-container">
      <h2>Vends ton article</h2>
      <form className="publish-form" onSubmit={handleSubmit}>
        <div className="file-container">
          <div className="file-centerer">
            <div className="file-input-wrapper">
              <label
                className="file-label"
                for="file"
                onChange={(e) => setPicture(e.target.files[0])}
              >
                <span className="input-sign">+</span>
                <span>Ajoute une photo</span>
              </label>
              <input type="file" id="file" className="file-input" />
            </div>
          </div>
        </div>
        {/* <input type="file" onChange={(e) => setPicture(e.target.files[0])} /> */}
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Marque"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          placeholder="Taille"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <input
          type="text"
          placeholder="Couleur"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="État"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lieu"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">Publier</button>
        {errorMessage && (
          <span className="publish-error-message">{errorMessage}</span>
        )}
        {successMessage && (
          <span className="publish-success-message">{successMessage}</span>
        )}
      </form>
      {!isLoggedIn && <Navigate to="/login" />}
    </div>
  );
};

export default Publish;
