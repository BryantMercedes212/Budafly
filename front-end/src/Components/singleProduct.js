import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LandingPage from "./seller/landingPage";

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

  // tabs
  const tabs = document.querySelectorAll(".tabs li");
  const tabContentBoxes = document.querySelectorAll("#tab-content > div");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");

      const target = tab.dataset.target;
      // console.log(target);
      tabContentBoxes.forEach((box) => {
        if (box.getAttribute("id") === target) {
          box.classList.remove("is-hidden");
        } else {
          box.classList.add("is-hidden");
        }
      });
    });
  });

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
          <div class="columns is-multilined">
            <div class="column is-7">
              <div class="tabs is-boxed is-centered">
                <ul>
                  <li class="is-active" id="tab-content">
                    <a>Product Details</a>
                  </li>
                  <li data-target="product-information">
                    <a>More To Know</a>
                  </li>
                </ul>
              </div>

              <div class="px-2" id="tab-content">
                <div id="product-details">
                  <h1 class="is-size-5 title">{product.name}</h1>
                  <p>{product.description}</p>
                </div>

                <div id="product-information" class="is-hidden">
                  <h3 class="is-size-5 title">Further Information</h3>
                  <div>Sativa or Indica, THC LEVELS, Benefits, Negatives</div>
                </div>

                <div class="column is-5-tablet">
                  <div class="message is-primary">
                    <div class="message-header">
                      <p>Order This Product </p>
                    </div>
                    <div class="message-body">
                      <p>Price of Product ${product.price} </p>
                      <div class="has-text-centered">
                        <button onClick={() => addItem(product)}>
                          {" "}
                          Add To Cart{" "}
                        </button>
                      </div>
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
                    <strong>${product.price}</strong>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <h3 class="title has-text-centered is-size-4">
            Sellers Other Products
          </h3>
          <div class="columns">
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

          {/* 2 closing */}
        </div>
      </div>

      <footer class="footer mt-6">
        <div class="content has-text-centered">
          <p>Copyright 2022 Budafly</p>
        </div>
      </footer>
    </div>
  );
};

export default Product;
