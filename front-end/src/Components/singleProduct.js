import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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

  return (
    <div>
      <article key={product.id}>
        <img className="img-wrapper" src={product.image} />
        <h4>{product.name}</h4>
        <br></br>
        <h5>Type:{product.type}</h5>
        <h5>Cannabinoid:{product.cannabinoid}</h5>
        <br></br>
        <div className="product_des"><p>{product.description}</p> 
        <br></br>
        <p>Feelings:{product.feelings}</p>
        <p>Disclosure:{product.negatives}</p></div>
        <br></br>
        <h5>Price ${product.price}.00</h5>
        <button onClick={() => addItem(product)}>Add To Cart</button>
      </article>
    </div>
  );
};


export default Product;
