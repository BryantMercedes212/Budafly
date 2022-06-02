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
    <div className="wrapper">
      <article key={product.id}>
        <img className="product-img" src={product.image} />
        <h3>{product.name}</h3>
        <h3>{product.type}</h3>
        <h3>{product.cannabinoid}</h3>
        <div className="product-des">{product.description} {product.feelings}{product.negatives}</div>
        <p>${product.price}</p>
        <button onClick={() => addItem(product)}>Add To Cart</button>
      </article>
    </div>
  );
};

export default Product;
