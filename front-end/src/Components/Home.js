import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ addItem }) => {
  const URL = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${URL}/products/`);

      setProducts(res.data);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const allProducts = products.map((product, i) => {
    return (
      <div class="column is-4">
        <div class="card mt-4 py-3">
          <div class="card-image pr-3 pl-4 has-background-primary ">
            <figure class="image is-128x128 ">
              <img src={product.image} alt={product.description} />
            </figure>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{product.name}</p>
                  <p class="subtitle is-6">${product.price}</p>
                </div>
              </div>

              <div class="media-content">
                <Link className="item-link" to={`/products/${product.id}`}>
                  {" "}
                  More details
                </Link>
                <br></br>
                <footer class="card-footer">
                  <div class="buttons">
                    <button
                      class="button is-primary"
                      onClick={() => addItem(product)}
                    >
                      <strong>Add To Cart</strong>
                    </button>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div class="section is-centered">
      <div class="container">
        <div class="columns is-multiline">{allProducts}</div>
      </div>
    </div>
  );
};

export default Home;
