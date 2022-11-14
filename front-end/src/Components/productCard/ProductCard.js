import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoopIcon from "@mui/icons-material/Loop";

import "./ProductCard.css";

const ProductCard = ({ product, addItem }) => {
  product.inCart = false;
  const { id, name, price, inCart, image, description, type } = product;

  const [loading, setLoading] = useState(false);
  const [itemInCart, setItemInCart] = useState(false);
  const navigate = useNavigate();
  const formattedPrice = `$${price}.00`;

  const handleAddToCart = (e) => {
    if (inCart) {
      return;
    } else {
      setLoading(true);
      setTimeout(function () {
        setItemInCart(true);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div className={`productCard_${type}`}>
      <div
        className="productCard__image"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img src={image} alt={name} className={"image"} />
      </div>
      <div
        className="productCard__info"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <div className="productCard__title">{name}</div>
        <div>
          <div className="productCard__price">
            <div>{formattedPrice}</div>
            <div className="type">{type}</div>
          </div>
        </div>
      </div>
      {itemInCart ? (
        <div
          className="viewCart"
          onClick={() => {
            navigate(`/cart`);
          }}
          id={id}
        >
          View Cart
        </div>
      ) : (
        <div
          className="productCard__addToCart"
          onClick={() => {
            addItem(product);
            handleAddToCart();
          }}
          id={id}
        >
          {!itemInCart && !loading && "Add To Cart"}
          {!itemInCart && loading && (
            <LoopIcon className="loader" fontSize="small" />
          )}
        </div>
      )}
    </div>
  );
};
export default ProductCard;
