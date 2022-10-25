import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Search from "../Search";

import ProductCard from "../productCard/ProductCard";

import "./ProductCards.css";

const ProductCards = ({
  addItem,
  products,
  filterProducts,
  input,
  setInput,
}) => {
  useEffect(() => {
    setInput("");
  }, []);
  console.log(filterProducts);
  return input === "" ? (
    <div className="productCards">
      <div className="searchBar">
        <div></div>
        <div>
          <p>color 1</p> <p>color 2</p>
          <p>color 3</p>
        </div>

        <Search setInput={setInput} input={input} />
      </div>
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
      <div className="searchBar">
        <div></div>
        <div>
          <p>color 1</p> <p>color 2</p>
          <p>color 3</p>
        </div>
        <Search setInput={setInput} input={input} />
      </div>
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
