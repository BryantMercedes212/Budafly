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
        <div className="container" key={product.id}>
          <article>
            <img src={product.image} />
            <h3>{product.name}</h3>
            <h5>Cannabinoid:{product.cannabinoid}</h5>
            <h5>Type:{product.type}</h5>
            <h5>Price: ${product.price}.00</h5>
            <Link className="item-link" to={`/products/${product.id}`}>
              {" "}
              More details
            </Link>
            <br></br>
            <button onClick={() => addItem(product)}>Add To Cart</button>
          </article>
        </div>
      </div>
    );
  });
};

export default Home;
