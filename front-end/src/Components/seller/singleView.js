import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
//import LandingPage from "./seller/landingPage";

const SingleView = ({ login }) => {
  const URL = process.env.REACT_APP_API_URL;
  const { id, pid } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${URL}/users/${id}/products/${pid}`);
      setProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setProduct([]);
    }
  };

  useEffect(() => {
    console.log("Hi");
    fetchProduct();
  }, [id, pid]);

  const handleDelete = () => {
    console.log("I am something");
    axios
      .delete(`${URL}users/${id}/products/${pid}`)
      .then(() => navigate(`/seller/${id}/products`))
      .catch((error) => console.log(error));
  };

  return (
    <div class="start">
      <div class="section">
        <div class="container">
          <div class="columns is-variable is-8">
            <div class="column is-7-tablet">
              <div class="is-centered">
                <div id="product-details px-2">
                  <div class="is-size-3 is-italic px-2 title">
                    {product.name}
                  </div>
                  <div class="subtitle is-size-4">Product Description:</div>
                  <div class="is size-2 subtitle-2">{product.description}</div>
                </div>
              </div>

              <div id="product-information">
                <div class="is-size-5 px-2 mt-5 title">
                  More Product Information
                  <div class="column is-6">
                    <h3 class="is-size-5">Product Image</h3>
                    <p>
                      <figure class="image is-240x240">
                        <img
                          src={product.image}
                          alt={product.description}
                          class="px-6"
                        />
                      </figure>
                    </p>
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
                  <p class="is-subtitle px-2">
                    Price Per 14 Grams: ${product.price}.00
                  </p>
                </div>

                <div class="column is-5-tablet">
                  <div class="box is-primary">
                    <div class="box-body">
                      <div class="buttons">
                        <Link
                          to={"/seller/" + id + "/products/" + pid + "/edit"}
                        >
                          <button class="button is-primary has-text-centered">
                            <strong>Edit Product</strong>
                          </button>
                          <br></br>
                        </Link>
                        <button
                          class="button is-primary has-text-centered"
                          onClick={handleDelete}
                        >
                          <strong>Delete a Product</strong>
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {login ? (
                  <>
                    <div class="column is-half">
                      <div class="card has-background-primary">
                        <div class="card-image has-text-centered px-3">
                          <img src={product.image} alt=" " />
                          <h3>
                            <strong>{product.type}</strong>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleView;
