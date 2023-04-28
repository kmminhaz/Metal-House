import React, { useState } from "react";
import nutebolts from "../../../Assets/Images/bolts-nuts.jpg";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4JoBJwTUE96RB6XlsuYGCFKJZzjoPDX2YSwgdoSpdJH9iIQocUq7q2yJ13XvfkT6oIJ8fRxf0N8khDlwncw4ta00ZS7lOhIb"
);

const Payment = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const { data: paymentOrder, isLoading } = useQuery("paymentOrder", () =>
    fetch(`https://metal-house-server.vercel.app/myOrders/${id}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className='w-10/12 mx-auto lg:mx-0'>
      <div className='lg:w-1/2 mx-auto my-10'>
        <div className='p-10 text-left bg-base-300 rounded-lg'>
          <p>Welcome {user?.displayName}</p>
          <h3 className='text-xl py-2'>
            Order for, <br />
            <span className='font-bold text-2xl ml-5 text-white'>
              {paymentOrder?.productName}
            </span>
          </h3>
          <div className='mt-3 bg-base-100 p-5 rounded-xl'>
            <h5 className='font-bold py-1'>
              Your Phone :{" "}
              <span className='lg:text-xl'> {paymentOrder?.userPhone} </span>
            </h5>
            <h5 className='font-bold py-1'>
              Shipment Address :{" "}
              <span className='lg:text-xl'>
                {" "}
                {paymentOrder?.shipmentAddress}{" "}
              </span>
            </h5>
            <h5 className='font-bold py-1'>
              Ordered Quantity : <span className='lg:text-xl'> 6000 </span>
            </h5>
            <h5 className='font-bold p-2 bg-base-300 mt-3 rounded-2xl text-center'>
              Total Payable Amount : <br />
              <span className='lg:text-xl'>{paymentOrder?.orderPayable} $</span>
            </h5>
          </div>
        </div>
        <div className='my-5 p-5 text-left rounded-lg bg-white shadow-lg'>
          <Elements stripe={stripePromise}>
            <CheckoutForm paymentOrder={paymentOrder}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
