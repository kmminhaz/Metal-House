import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import auth from "../../../firebase.init";

const CheckoutForm = ({ paymentOrder }) => {
  console.log(paymentOrder);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");
  const { _id, orderPayable, userEmail } = paymentOrder;
  const [user] = useAuthState(auth);

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ orderPayable }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });
    console.log(orderPayable, clientSecret);
  }, [orderPayable]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setCardError("");
    setCardSuccess("");

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    // confirm payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.name,
            email: userEmail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      setCardSuccess("Success! Your payment is Completeted!");
      const transectionId = paymentIntent.id;
      fetch(`http://localhost:5000/order/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ transectionId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type='submit'
        className='btn btn-sm my-3'
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className='text-error py-2'>{cardError}</p>
      <p className='text-success py-2 font-bold'>{cardSuccess}</p>
    </form>
  );
};

export default CheckoutForm;
