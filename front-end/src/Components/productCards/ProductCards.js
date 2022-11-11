import React, { useEffect, useState } from "react";
import Search from "../searchBar/Search";

import ProductCard from "../productCard/ProductCard";

import "./ProductCards.css";
import Loader from "../loader/Loader";

const ProductCards = ({
  addItem,
  products,
  filterProducts,
  input,
  setInput,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInput("");
  }, []);

  setTimeout(function () {
    setIsLoading(false);
  }, 1500);

  // const shuffledArray = allProducts.sort((a, b) => 0.5 - Math.random());
  return isLoading ? (
    <Loader />
  ) : input === "" ? (
    <div className="productCards">
      <div className="searchBar">
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
