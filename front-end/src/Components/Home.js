import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ addItem }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3333/products/`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products.map((product) => {
    return (
      <div>
        {/* <div className="wrapper" key={product.id}>
        <article>
          <img src={product.image} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link className="item-link" to={`/products/${product.id}`}>
            {" "}
            More details
          </Link>
          <br></br>
          <button onClick={() => addItem(product)}>Add To Cart</button>
        </article>
    </div> */}
        <div class="section">
          <div class="container">
            <div class="columns is-variable">
              <div class="card mt-4 py-3">
                <div class="card-image pr-3 pl-4">
                  <figure class="image is-128x128">
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
                      <Link
                        className="item-link"
                        to={`/products/${product.id}`}
                      >
                        {" "}
                        More details
                      </Link>
                      <br></br>
                      <footer class="card-footer">
                        <button onClick={() => addItem(product)}>
                          Add To Cart
                        </button>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Home;
