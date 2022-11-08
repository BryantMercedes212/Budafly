import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../productCard/ProductCard";
import "./LandingPage.css";
const LandingPage = ({ login, addItem }) => {
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/users/${id}/products`)
      .then((response) => setProducts(response.data));
  }, [URL, id]);

  const viewAllProducts = products.map((product, index) => {
    return <ProductCard key={index + 1} product={product} addItem={addItem} />;
  });

  return (
    <>
      {login ? (
        <div>
          <div class="section">
            <div class="is-italic title">Welcome, Antonio</div>
            <div class="is-bold subtitle">
              <strong>ATTENTION, PLEASE READ...</strong>
              <p class="is-2 is-spaced">
                Below are the products you have listed for sale in Budafly,
                below the image is a link you can click to edit a product or
                delete a product or create a product using the button below
              </p>
            </div>
            <Link to={"/seller/" + id + "/products/new"}>
              {/* <div class="button"> */}
              <button class="button is-primary">Add a Product</button>
              {/* </div> */}
            </Link>
            <div class="section is-centered">
              <div class="container">
                <div class="columns is-multiline">{viewAllProducts}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sellerContainer">
          <h1>Welcome, Customer</h1>

          <div class="sellerProduct">{viewAllProducts}</div>
        </div>
        //   </div>
        // </div>
        // <div>
        //   <h1>Welcome, Customer</h1>

        //   {viewAllProducts}
        // </div>
      )}
    </>
  );
};

export default LandingPage;
