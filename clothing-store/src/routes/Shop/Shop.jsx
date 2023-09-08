import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";
import "./Shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index Component={CategoriesPreview} />
      <Route path=":category" Component={Category} />
    </Routes>
  );
};

export default Shop;
