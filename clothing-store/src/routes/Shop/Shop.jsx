import { ProductsContext } from "../../context/Products";
import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))}
    </div>
  );
};

export default Shop;
