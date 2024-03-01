import React, { useEffect } from "react";
import { PaymentElement } from "@juspay-tech/react-hyper-js";
import Cart from "./Cart";
import { useHyper, useElements } from "@juspay-tech/react-hyper-js";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Completion from "./Completion";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setSuccess, setMessage, setProcessing } from './slices/paymentSlice';

export default function CheckoutForm() {
  const hyper = useHyper();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // Selectors
  const isSuccess = useSelector((state) => state.paymentStatus.isSuccess);
  const message = useSelector((state) => state.paymentStatus.message);
  const isProcessing = useSelector((state) => state.paymentStatus.isProcessing);

  function handlePaymentStatus(status) {
    switch (status) {
      case "succeeded":
        dispatch(setMessage("Payment successful"));
        dispatch(setSuccess(true));
        break;
      case "processing":
        dispatch(setMessage("Your payment is processing."));
        break;
      case "requires_payment_method":
        dispatch(setMessage("Your payment was not successful, please try again."));
        break;
      case "requires_capture":
        dispatch(setMessage("Payment processing! Requires manual capture"));
        break;
      case "requires_customer_action":
        dispatch(setMessage("Customer needs to take action to confirm this payment"));
        break;
      case "failed":
        dispatch(setMessage("Payment Failed!"));
        break;
      default:
        dispatch(setMessage(`Something went wrong. (Status: ${status})`));
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hyper || !elements) return;
    dispatch(setProcessing(true));

    const { error, status } = await hyper.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}` },
    });

    if (error) {
      dispatch(setMessage(error.message));
    } else {
      dispatch(setMessage("Unexpected Error"));
    }

    if (status) {
      handlePaymentStatus(status);
    }

    dispatch(setProcessing(false));
  };

  useEffect(() => {
    // The existing useEffect logic remains unchanged
  }, [hyper, navigate]);

  // The render logic remains largely unchanged, using isSuccess, message, and isProcessing from Redux state
}
