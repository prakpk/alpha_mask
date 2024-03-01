// Payment.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HyperElements } from "@juspay-tech/react-hyper-js";
import CheckoutForm from "./CheckoutForm";
import { initializePayment } from "./slices/paymentSlice";

function Payment() {
  const dispatch = useDispatch();
  const { clientSecret, hyperPromise, status, error } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(initializePayment());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mainContainer">
      <div className="heading">
        <h2>Hyperswitch Unified Checkout</h2>
      </div>
      {clientSecret && hyperPromise && (
        <HyperElements hyper={hyperPromise} options={{ clientSecret, appearance: { labels: "floating" } }}>
          <CheckoutForm />
        </HyperElements>
      )}
    </div>
  );
}

export default Payment;
