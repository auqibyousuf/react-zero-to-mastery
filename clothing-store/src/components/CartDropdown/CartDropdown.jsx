import ButtonComponent from "../Button/ButtonComponent";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.scss";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <ButtonComponent>Checkout</ButtonComponent>
      </div>
    </div>
  );
};

export default CartDropdown;
