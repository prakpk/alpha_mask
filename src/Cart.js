import React from "react";
import { useSelector } from 'react-redux';
import logo from "../public/assets/hyperswitchLogo.svg";

function Cart() {
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <>
      <div className="cart">
        <div className="titleContainer">
          <div className="title">
            <img className="logoImg" width="28px" src={logo} alt="Hyperswitch Logo" /> Hyperswitch Playground App
          </div>
          <div className="testMode">Test Mode</div>
        </div>
        <div className="ordersummary">Order Summary ({items.length}) </div>
        <div className="items">
          {items.map((item, index) => (
            <div className="Item" key={index}>
              <div className="ItemContainer">
                <div className="itemImg">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="itemDetails">
                  <div className="name">{item.name}</div>
                  <div className="props">
                    Size: <span className="value">{item.size}</span>
                    Qty: <span className="value">{item.quantity}</span>
                  </div>
                  <div className="props">
                    Color: <span className="value">{item.color}</span>
                  </div>
                </div>
              </div>
              <div>{item.price.toFixed(2)}</div>
            </div>
          ))}
          <div className="ItemTotal">
            <div className="total">Total Amount</div>
            <div>{totalAmount.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
