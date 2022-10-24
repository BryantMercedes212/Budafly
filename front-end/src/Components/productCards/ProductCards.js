import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ProductCard from "../productCard/ProductCard";

import "./ProductCards.css";

const ProductCards = ({ addItem, products, filterProducts, input }) => {
  console.log(filterProducts);
  return input === "" ? (
    <div className="productCards">
      <div className="productCards__container">
        {products.map((product, index) => {
          return (
            <ProductCard key={index + 1} product={product} addItem={addItem} />
          );
        })}
      </div>
    </div>
  ) : (
    <div className="productCards">
      <div className="productCards__container">
        {filterProducts.map((product, index) => {
          return (
            <ProductCard key={index + 1} product={product} addItem={addItem} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCards;
