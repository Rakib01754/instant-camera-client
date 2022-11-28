import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Checkout = ({ booking }) => {
    const [success, setSuccess] = useState("");
    const [cardError, setCartError] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, SetProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { name, email, price, productId } = booking;
    console.log(booking);

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log(error);
            setCartError(error.message);
        } else {
            setCartError("");
        }

        setSuccess("");
        SetProcessing(true);

        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name,
                        email,
                    },
                },
            });

        if (confirmError) {
            setCartError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            // console.log("paymentIntent", paymentIntent);
            console.log("cart-info", card);

            const payment = {
                price,
                transaction_id: paymentIntent.id,
                email,
                bookingId: booking._id,
                productId
            };

            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess("Congrats ! your payment completed successfully");
                        setTransactionId(paymentIntent.id);
                        toast.success("Congrats ! your payment completed successfully");
                    }
                });
        }
        SetProcessing(false);
    };

    return (
        <>
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
                    className="btn mt-4 bg-black border-none text-white p-4 "
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {success && (
                <div>
                    <p className="text-green-500 mt-3">{success}</p>
                    <p>
                        <span>Your TransactionId: </span>{" "}
                        <span className="font-bold">{transactionId}</span>
                    </p>
                </div>
            )}
        </>
    );
};

export default Checkout;