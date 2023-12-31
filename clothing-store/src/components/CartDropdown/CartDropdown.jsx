import ButtonComponent from "../Button/ButtonComponent";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.scss";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const gotoCheckoutHandler = () => {
    navigate("./checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <ButtonComponent onClick={gotoCheckoutHandler}>
          Checkout
        </ButtonComponent>
      </div>
    </div>
  );
};

export default CartDropdown;
