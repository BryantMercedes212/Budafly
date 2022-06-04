import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
//import LandingPage from "./seller/landingPage";

// console.log("Hello world")
// const URL = "http://localhost:3333";
// console.log(URL)

const SingleView = () => {
  // const URL = process.env.REACT_APP_API_URL;
  const { id, pid } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3333/users/${id}/products/${pid}`
      );
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
      .delete(`http://localhost:3333/users/${id}/products/${pid}`)
      .then(() => navigate(`/seller/${id}/products`))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <section class="section">
          <div class="container">
            <div class="columns is-multilined">
              <div class="column is-6">
                <h1 class="is-size-1 title">{product.name}</h1>
                <h3 class="is-size-3 subtitle">Product Description</h3>
                <p>{product.description}</p>

                <div class="column is-6">
                  <h3 class="is-size-5">Product Image</h3>
                  <p>
                    <img
                      src={product.image}
                      alt={product.description}
                      class="px-6"
                    />
                  </p>
                </div>

                <div class="column is-4">
                  <div class="is-size-6">Price ${product.price}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section class="section">
          <div class="container">
            <div class="columns is-multilined">
              <div class="column is-7-tablet">
                <h3 class="is-size-5 title">
                  Benefits, Negatives, THC Levels, etc
                </h3>
                <div class="is-size-6 subtitle">
                  {" "}
                  **Reminder** Remember to List Key Details About Your Products
                </div>
              </div>
              <div>
                <h3 class="is-size-5 title">Listing Options</h3>
                <h2>Edit Information & Remove Product</h2>
                <p>
                  <Link to={"/seller/" + id + "/products/" + pid + "/edit"}>
                    <button>edit</button>
                  </Link>
                  <button onClick={handleDelete}>delete a product</button>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*
            <p>Show single product</p>
            <h1>Hi</h1>
            <article key={product.id}>
                <img src={product.image} alt={product.description}/>
                <h3>{product.name}</h3>
                <h2>{product.description}</h2>
                <p>${product.price}</p>
                <Link to={"/seller/"+id+"/products/"+pid+"/edit"}><button>edit</button></Link>
                <button onClick={handleDelete}>delete a product</button>
                /* <button>delete a product</button> 
            </article>
// console.log(typeof SingleView)
    */}
    </div>
  );
};

export default SingleView;
