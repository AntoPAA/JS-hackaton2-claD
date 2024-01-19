import React from "react";

import "./ProductCard.css";

function ProductCard({ imgSrc, title }) {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} className="product-card-image" />
      <h3 className="product-card-title">{title}</h3>
    </div>
  );
}

export default ProductCard;
