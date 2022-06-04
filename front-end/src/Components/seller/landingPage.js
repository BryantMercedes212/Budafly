import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const LandingPage = ({ login }) => {
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // hard coded user
    axios
      .get(`${URL}/users/${id}/products`)
      .then((response) => setProducts(response.data));
  }, [URL, id]);

  const viewAllProducts = products.map((product) => {
    return (
      <article className="grid-container" key={product.id}>
        <img src={product.image} alt={product.description} />
        <h3>{product.name}</h3>
        <p>Price: ${product.price}.00</p>
        <Link to={"/seller/" + id + "/products/" + product.id}>
          More Details
        </Link>
      </article>
    );
  });

  return (
    <>
      {login ? (
        <div>
          <h1>Welcome, Antonio</h1>
          <h2>
            ATTENTION, PLEASE READ Below are the products you have listed for
            sale in Budafly, below the image is a link you can click to edit a
            product or delete a product or create a product using the button
            below
          </h2>
          <Link to={"/seller/" + id + "/products/new"}>
            <button>Add a Product</button>
          </Link>
          {viewAllProducts}
        </div>
      ) : (
        <div>
          <h1>Welcome, Customer</h1>

          {viewAllProducts}
        </div>
      )}
    </>
  );
};

export default LandingPage;
