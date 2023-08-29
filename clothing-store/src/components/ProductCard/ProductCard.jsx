import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
import "./ProductCard.scss";

const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="inverted">Add to Cart</ButtonComponent>
    </div>
  );
};

export default ProductCard;
