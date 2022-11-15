import React, { useEffect, useState } from "react";
import Search from "../searchBar/Search";
import { Pagination } from "@mui/material";
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
  const pages = 0;
  const productCards = products.map((product, index) => {
    return <ProductCard key={index + 1} product={product} addItem={addItem} />;
  });
  const [startOfDisplayProducts, setStartOfDisplayProducts] = useState(0);
  const [finishOfDisplayProducts, setFinishOfDisplayProducts] = useState(15);

  const handleChange = (event, value) => {
    if (value === 1) {
      setStartOfDisplayProducts(0);
      setFinishOfDisplayProducts(15);
    } else {
      setStartOfDisplayProducts(value * 15 - 15);
      setFinishOfDisplayProducts(value * 15);
      "html, body".animate({ scrollTop: 0 }, "fast");
    }
  };

  useEffect(() => {
    setInput("");
  }, []);

  setTimeout(function () {
    setIsLoading(false);
  }, 1500);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [startOfDisplayProducts]);

  // const shuffledArray = allProducts.sort((a, b) => 0.5 - Math.random());
  return isLoading ? (
    <Loader />
  ) : input === "" ? (
    <div className="productCards">
      <div className="searchBar">
        <Search setInput={setInput} input={input} />
      </div>
      <div className="productCards__container">
        {productCards.slice(startOfDisplayProducts, finishOfDisplayProducts)}
      </div>
      <div className="pages">
        <Pagination
          count={Math.ceil(productCards.length / 15)}
          size="large"
          onChange={handleChange}
        />
      </div>
    </div>
  ) : (
    <div className="productCards">
      <div className="searchBar">
        <Search setInput={setInput} input={input} />
      </div>
      <div className="productCards__container">
        {filterProducts.length ? (
          filterProducts
            .map((product, index) => {
              return (
                <ProductCard
                  key={index + 1}
                  product={product}
                  addItem={addItem}
                />
              );
            })
            .slice(startOfDisplayProducts, finishOfDisplayProducts)
        ) : (
          <div class="animate__animated  animate__bounceInLeft">
            <div className="noSearch">
              {" "}
              No products were found with this search
            </div>
          </div>
        )}
      </div>
      <div className="pages">
        <Pagination
          count={Math.ceil(filterProducts.length / 15)}
          size="large"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ProductCards;
