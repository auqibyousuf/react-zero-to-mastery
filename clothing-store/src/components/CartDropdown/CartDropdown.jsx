import ButtonComponent from "../Button/ButtonComponent";
import "./CartDropdown.scss";
import React from "react";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <ButtonComponent>Checkout</ButtonComponent>
      </div>
    </div>
  );
};

export default CartDropdown;
