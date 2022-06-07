import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
//import LandingPage from "./seller/landingPage";

const Product = ({ addItem }) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3333/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
      setProduct([]);
    }
  };
  const tryning = "trying";

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(product);

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
                      <strong>Price Per 14 Grams ${product.price}</strong>{" "}
                    </p>
                    <div class="has-text-centered">
                      <button
                        class="button is-primary"
                        onClick={() => addItem(product)}
                      >
                        <Link to="/Cart">Add to Cart</Link>
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
            <div class="column">
              <div class="card has-background-primary">
                <div class="card-image has-text-centered px-6">
                  <img
                    src="https://i1.wp.com/www.gotweedonline.com/wp-content/uploads/2020/05/1589188622250.jpg?fit=1005%2C1005&ssl=1"
                    alt=" "
                  />
                </div>
                <div class="card-content">
                  <div class="media">
                    <p class="title is-size-5 is-primary">Sour Tangie</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item is-light">
                    <a href={`/products/19`} class="is-primary">
                      View
                    </a>
                  </p>
                </footer>
              </div>
            </div>

            <div class="column">
              <div class="card has-background-primary">
                <div class="card-image has-text-centered px-6">
                  <img
                    src="https://420spot.org/wp-content/uploads/2020/01/slurricane_2020_01.jpg"
                    alt=" "
                  />{" "}
                </div>
                <div class="card-content">
                  <div class="media">
                    <p class="title is-size-5">Slurricane</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <a href={`/products/21`} class="has-text-grey">
                      View
                    </a>
                  </p>
                </footer>
              </div>
            </div>

            <div class="column">
              <div class="card has-background-primary">
                <div class="card-image has-text-centered px-6">
                  <img
                    src="https://firstclassmedicinal.com/wp-content/uploads/2020/02/Amnesia-Haze3.jpg"
                    alt="Placeholder image"
                  />
                </div>
                <div class="card-content">
                  <div class="media">
                    <p class="title is-size-5">Amnesia Haze</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <div class="card-footer-item">
                    <a href={`/products/17`} class="has-text-grey">
                      View
                    </a>
                  </div>
                </footer>
              </div>
            </div>
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
