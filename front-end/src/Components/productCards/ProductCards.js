import React, { useEffect, useState } from "react";
import Search from "../searchBar/Search";

import ProductCard from "../productCard/ProductCard";

import "./ProductCards.css";
import BarLoader from "react-spinners/BarLoader";

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
  }, 1000);

  // const shuffledArray = allProducts.sort((a, b) => 0.5 - Math.random());
  return isLoading ? (
    <div className="loading">
      <BarLoader
        height={30}
        width={500}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="green"
      />
    </div>
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
