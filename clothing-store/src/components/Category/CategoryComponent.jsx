import React from "react";
import CategoryItemComponent from ".components/CategoryItem/CategoryItemComponent";
const CategoryComponent = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItemComponent key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryComponent;
