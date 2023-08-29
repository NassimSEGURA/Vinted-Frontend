import { Link } from "react-router-dom";

const Offers = ({ data }) => {
  return (
    <div className="homeCardWrapper">
      {data.offers.map((offer, index) => (
        <Link key={offer._id} to={`/offer/${offer._id}`}>
          <div className="card-container">
            <div className="card-avatar-username">
              <img
                alt={offer.owner.account.username}
                src={offer.owner?.account?.avatar?.secure_url}
              />
              <span>{offer.owner.account.username}</span>
            </div>
            <div>
              <img
                src={offer.product_image.secure_url}
                alt={offer.product_name}
              />
              <div className="card-price-size-brand">
                <span>{offer.product_price} €</span>
                <span>
                  {offer.product_details.find((detail) => detail.MARQUE) &&
                    offer.product_details.find((detail) => detail.MARQUE)
                      .MARQUE}
                </span>
                <span>
                  {offer.product_details.find((detail) => detail.TAILLE) &&
                    offer.product_details.find((detail) => detail.TAILLE)
                      .TAILLE}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Offers;
