import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import "./ProductCard.scss";

const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(products);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </ButtonComponent>
    </div>
  );
};

export default ProductCard;
