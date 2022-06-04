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

  useEffect(() => {
    fetchProduct();
  }, []);

  {
    /*
    <div className="wrapper">
      <article key={product.id}>
        <img className="product-img" src={product.image} />
        <h3>{product.name}</h3>
        <h3>{product.user_id}</h3>
        <div className="product-des">{product.description}</div>
        <p>${product.price}</p>
        <button onClick={() => addItem(product)}>Add To Cart</button>
      </article>
  </div>*/
  }
  return (
    <div class="start">
      <div class="section">
        <div class="container">
          <div class="columns is-variable is-8">
            <div class="column is-7-tablet">
              <div class="is-centered">
                <ul>
                  <div id="product-details px-2">
                    <h1 class="is-size-5 title">{product.name}</h1>
                    <p>{product.description}</p>
                  </div>
                </ul>
              </div>

              <div id="product-information">
                <h3 class="is-size-5 px-2 title">More Product Information</h3>
                <div>Sativa or Indica, THC LEVELS, Benefits, Negatives</div>
                <p>add content for products</p>
              </div>

              <div class="column is-5-tablet">
                <div class="message is-primary">
                  <div class="message-header">
                    <p>Order This Product </p>
                  </div>
                  <div class="message-body">
                    <p>Price of Product ${product.price} </p>
                    <div class="has-text-centered">
                      <button
                        class="is-primary"
                        onClick={() => addItem(product)}
                      >
                        {" "}
                        Add To Cart{" "}
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
                    <strong>{product.name}</strong>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <h3 class="title has-text-centered is-size-4">
          Sellers Other Products
        </h3>
        <div class="container">
          <div class="columns is-variable">
            <div class="column is-3">
              <div class="card">
                <div class="card-image has-text-centered px-6">
                  <img src={product.image} alt=" " />
                </div>
                <div class="card-content">
                  <div class="media">
                    <p class="title is-size-5">{product.name}</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <a href={`/products/${product.id}`} class="has-text-grey">
                      View
                    </a>
                  </p>
                </footer>
              </div>
            </div>

            <div class="column is-3">
              <div class="card">
                <div class="card-image has-text-centered px-6">
                  <img src={product.image} alt=" " />{" "}
                </div>
                <div class="card-content">
                  <div class="media">
                    <p class="title is-size-5">{product.name}</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <a href={`/products/${product.id}`} class="has-text-grey">
                      View
                    </a>
                  </p>
                </footer>
              </div>
            </div>

            <div class="column is-3">
              <div class="card">
                <div class="card-image has-text-centered px-6">
                  <img src={product.image} alt="Placeholder image" />
                </div>
                <div class="card-content">
                  <div class="media">
                    <p class="title is-size-5">{product.name}</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <div class="card-footer-item">
                    <a href={`/products/${product.id}`} class="has-text-grey">
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
