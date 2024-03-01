import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { resetPayment } from './slices/paymentSlice'; // Import the action to reset payment state
import "./index.css";
import "./App.css";
import success from "../public/assets/Successsuccess.svg";

function Completion() {
  const dispatch = useDispatch();
  // Assuming you store a message or details about the completed transaction
  const transactionMessage = useSelector((state) => state.payment.transactionMessage);

  const handleTryAgain = () => {
    // Reset the payment state for a new transaction
    dispatch(resetPayment());
    // Redirect if necessary, or handle UI reset
  };

  return (
    <>
      <div className="ConfirmContainer">
        <div>
          <img src={success} width="150px" height="110px" alt="Success" />
        </div>
        <div className="ConfirmText">Thanks for your order!</div>
        {/* Display transaction message from Redux state if available */}
        {transactionMessage && (
          <div className="ConfirmDes">{transactionMessage}</div>
        )}
        <div>
          {/* Use button with onClick for better handling, especially if you're using React Router for navigation */}
          <button className="returnLink" onClick={handleTryAgain}>
            Try Hyperswitch Playground again
          </button>
        </div>
      </div>
    </>
  );
}

export default Completion;
