import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Product = () => {
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
    <article key={product.id}>
      <img src={product.image} />
      <h3>{product.name}</h3>
      <h2>{product.description}</h2>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}> More details</Link>
    </article>
  );
};

export default Product;
