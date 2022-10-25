import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import LoopIcon from "@mui/icons-material/Loop";

import "./productCard/ProductCard.css";

const Product = ({ addItem }) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const [sellerProduct, setSellerProduct] = useState([]);
  const randomNumbers = [];

  const [loading, setLoading] = useState(false);
  const [itemInCart, setItemInCart] = useState(false);
  const navigate = useNavigate();

  let i = 0;
  while (i < 3) {
    randomNumbers.push(Math.floor(Math.random() * 40));
    i++;
  }

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${URL}/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
      setProduct([]);
    }
  };

  const fetchSellersProducts = async () => {
    try {
      const res = await axios.get(`${URL}/products/`);
      setSellerProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setSellerProduct([]);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    fetchSellersProducts();
  }, []);

  const sellerFeaturedProducts = sellerProduct.map((product) => {
    product.inCart = false;
    const { id, name, price, inCart, image, description, type } = product;
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
          onClick={() => navigate(`/products/${id}`)}
        >
          <img src={image} alt={name} className={"image"} />
        </div>
        <div
          className="productCard__info"
          onClick={() => navigate(`/products/${id}`)}
        >
          <div className="productCard__title">{name}</div>
          <div>
            <div className="productCard__price">
              <div>{formattedPrice}</div>
              <div>{type}</div>
            </div>
            <div className="productCard__type"> </div>
          </div>
        </div>
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
          {itemInCart && "View Cart"}
        </div>
      </div>
    );
  });

  console.log(sellerProduct);
  return (
    <div class="start">
      <div class="section">
        <div class="container">
          <div class="columns is-variable is-8">
            <div class="column is-7-tablet">
              <div class="is-centered">
                <ul>
                  <div id="product-details px-2">
                    <h1 class="is-size-3 is-italic px-2 title">
                      {product.name}
                    </h1>
                    <p>{product.description}</p>
                  </div>
                </ul>
              </div>

              <div id="product-information">
                <div class="is-size-5 px-2 mt-5 title">
                  More Product Information
                </div>
                <p class="is-subtitle px-2">
                  Cannabinoid: {product.cannabinoid}
                </p>
                <p class="is-subtitle px-2">
                  Users Have Reported Feeling: {product.feelings}
                </p>
                <p class="is-subtitle px-2">
                  Users Reported Some Negatives: {product.negatives}
                </p>
              </div>

              <div class="column is-5-tablet">
                <div class="message is-primary">
                  <div class="message-header">
                    <p>Order This Product </p>
                  </div>
                  <div class="message-body">
                    <p>
                      <strong>Price ${product.price}</strong>{" "}
                    </p>
                    <div class="has-text-centered">
                      <button
                        class="button is-primary"
                        onClick={() => addItem(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card has-background-primary">
                <div class="card-image has-text-centered px-6">
                  <img src={product.image} alt=" " />
                  <h3>
                    <strong>{product.type}</strong>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section is-centered">
        <h3 class="title has-text-centered is-size-4">Featured Products</h3>
        <div class="container">
          <div class="columns is-variable">
            {sellerFeaturedProducts[randomNumbers[0]]}
            {sellerFeaturedProducts[randomNumbers[1]]}
            {sellerFeaturedProducts[randomNumbers[2]]}
          </div>
        </div>

        <footer class="footer mt-6">
          <div class="content has-text-centered">
            <p>Copyright 2022 Budafly</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Product;
