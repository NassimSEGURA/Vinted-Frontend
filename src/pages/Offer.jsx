import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OfferDetails from "../components/OfferDetails";

const Offer = () => {
  const { id } = useParams();
  const [offerData, setOfferData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setOfferData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching offer data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="offer-page">
      {isLoading ? <p>Loading...</p> : <OfferDetails offerData={offerData} />}
    </div>
  );
};

export default Offer;
