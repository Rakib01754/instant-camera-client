import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle/useTitle';
import Checkout from './Checkout/Checkout';


const stripePromise = loadStripe(process.env.REACT_APP_PK);

const Payment = () => {
    useTitle('Payment')
    const booking = useLoaderData()
    console.log(booking)

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold font-serif text-left ">
                Payment for{" "}
                <span className="border-b-2 border-[#19D3AE]">{booking.productName}</span>
            </h1>
            <p className="text-left text-xl mb-6 mt-4">
                Please pay <strong>${booking.price}</strong> for your Buying product
                <span> {booking.productName}</span>
            </p>

            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <Checkout booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;