import React from "react";
import "./directory.styles.scss";

import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => (
      <CategoryItem category={category} key={category.id} />
    ))}
  </div>
);

export default Directory;
