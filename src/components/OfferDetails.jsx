import React from "react";

const OfferDetails = ({ offerData }) => {
  return (
    <div className="offer-container">
      <div className="offer-pictures">
        {offerData.product_image && (
          <img
            className="offer-picture"
            src={offerData.product_image.secure_url}
            alt={offerData.product_name}
          />
        )}
      </div>
      <div className="offer-infos">
        <div>
          <span className="offer-price">{offerData.product_price} €</span>
          <ul className="offer-list">
            {offerData.product_details.map((detail, index) => (
              <li key={index}>
                <span>{Object.keys(detail)[0]}</span>
                <span>{detail[Object.keys(detail)[0]]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="divider"></div>
        <div className="offer-content">
          <p className="name">{offerData.product_name}</p>
          <p className="description">{offerData.product_description}</p>
          <div className="offer-avatar-username">
            {offerData.owner && offerData.owner.account.avatar && (
              <img
                alt={offerData.owner.account.username}
                src={offerData.owner.account.avatar.secure_url}
              />
            )}
            <span>{offerData.owner.account.username}</span>
          </div>
        </div>
        <button>Acheter</button>
      </div>
    </div>
  );
};

export default OfferDetails;
