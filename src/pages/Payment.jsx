import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const Payment = () => {
  const location = useLocation();
  const { state } = location;
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setPaymentError(error.message);
    } else {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: token.id,
          title: state.title,
          amount: parseFloat(state.price) * 100, // Amount in cents
        }
      );

      if (response.data.status === "succeeded") {
        setPaymentSuccess(true);
      }
    }
  };

  if (!state || !state.title || !state.price) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Page de paiement</h2>
      <p>Titre de l'annonce : {state.title}</p>
      <p>Prix : {state.price} €</p>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit">Payer</button>
      </form>
      {paymentError && <p>{paymentError}</p>}
      {paymentSuccess && <p>Paiement réussi !</p>}
    </div>
  );
};

export default Payment;
