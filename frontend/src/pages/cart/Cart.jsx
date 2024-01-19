import React from "react";

import LogoB from "../../assets/logo.svg";
import cart from "../../../../backend/public/assets/images/Cart.png";

import "./Cart.css";

function Cart() {
  return (
    <div>
      <img src={LogoB} className="logo-top-black" alt="logo-black" />
      <div className="promo">5€ offered from 25€ of purchase</div>
      <h1 className="cart-title">YOUR CART</h1>
      <div className="cart-line" />
      <img src={cart} className="cart" alt="cart" />
    </div>
  );
}

export default Cart;
