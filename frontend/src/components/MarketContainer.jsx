import React from "react";
import ProductCard from "./ProductCard";

import "./MarketContainer.css";

function MarketContainer({ products }) {
  return (
    <div className="market-container">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          imgSrc={product.image}
          title={product.name}
        />
      ))}
    </div>
  );
}

export default MarketContainer;
