import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const LandingPage = ({ login }) => {
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/users/${id}/products`)
      .then((response) => setProducts(response.data));
  }, [URL, id]);

  const viewAllProducts = products.map((product) => {
    return (
      <div class="columns">
        <div class="column mx-4">
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
                    <p class="subtitle is-6">${product.price}.00</p>
                  </div>
                </div>

                <div class="media-content">
                  <Link to={"/seller/" + id + "/products/" + product.id}>
                    {" "}
                    More details
                  </Link>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  {
    /*<article className="grid-container" key={product.id}>
        <img src={product.image} alt={product.description} />
        <h3>{product.name}</h3>
        <p>Price: ${product.price}.00</p>
        <Link to={"/seller/" + id + "/products/" + product.id}>
          More Details
        </Link>
    </article>
    );
});
*/
  }

  return (
    <>
      {/* <div class="section is-centered">
        <div class="container">
          <div class="columns">{viewAllProducts}</div>
        </div>
      </div> */}
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
        // <div class="section is-centered">
        //   <div class="container">
        <>
          <h1>Welcome, Customer</h1>
          <div class="columns is-multiline">{viewAllProducts}</div>
        </>
        //   </div>
        // </div>
        // <div>
        //   <h1>Welcome, Customer</h1>

        //   {viewAllProducts}
        // </div>
      )}
    </>
  );
  //   return (
  //     <div class="section is-centered">
  //       <div class="container">
  //         <div class="columns">{viewAllProducts}</div>
  //       </div>
  //     </div>
  //   );
};

export default LandingPage;

{
  /* <div class="buttons"></div>
      <button class="button is-primary" onClick={handleSubmit}><strong>Submit</strong></button>
    </div> */
}
