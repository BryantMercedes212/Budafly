import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Progress from "../progressBar/ProgressBar";
import ProductCard from "../productCard/ProductCard";

import "../productCard/ProductCard.css";

import "./ProductDetails.css";

const Product = ({ addItem }) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const [sellerProduct, setSellerProduct] = useState([]);
  const randomNumbers = [];

  const [loading, setLoading] = useState(false);
  const [itemInCart, setItemInCart] = useState(false);
  const navigate = useNavigate();

  let i = 0;
  while (i < 3) {
    randomNumbers.push(Math.floor(Math.random() * 40));
    i++;
  }

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${URL}/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
      setProduct([]);
    }
  };

  const fetchSellersProducts = async () => {
    try {
      const res = await axios.get(`${URL}/products/`);
      setSellerProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setSellerProduct([]);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    fetchSellersProducts();
  }, []);

  const sellerFeaturedProducts = sellerProduct.map((product, index) => {
    return <ProductCard key={index + 1} product={product} addItem={addItem} />;
  });

  let splitedCannabinoid = [];
  if (product.cannabinoid) {
    splitedCannabinoid = product.cannabinoid.split(" ");
  }

  console.log(splitedCannabinoid);
  return (
    <div className="productDetailsContainer">
      <div className="productDetails">
        <div className="big-img">
          <img src={product.image} alt="" />
        </div>
        <div className="details">
          <div className="box">
            <div className="row">
              <h1>{product.name}</h1>
              <span>${product.price}.00</span>
            </div>
            <p className="productDescription">{product.description}</p>
            <div className="information">
              <div className="effects">
                <h3>Top Effects </h3>{" "}
                <div>
                  {product.feelings
                    ? product.feelings.split(",").map((feeling) => {
                        return <p className="feeling">{feeling}</p>;
                      })
                    : ""}
                </div>
              </div>

              <div className="cannabinoid">
                <div className="percentage">
                  <p>{splitedCannabinoid[0]}</p> <p>{splitedCannabinoid[1]}</p>{" "}
                </div>
                <div className="percentage">
                  <p>{splitedCannabinoid[2]}</p> <p>{splitedCannabinoid[3]}</p>{" "}
                </div>
              </div>
            </div>

            <div className="progressContainer">
              <div className="lowHigh">
                <div>Low THC</div>
                <div>High THC</div>
              </div>
              <Progress done={splitedCannabinoid[1]} />
            </div>
            <button
              className="cart"
              onClick={() => {
                addItem(product);
              }}
              id={id}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>

      <h1 className="title">Featured Products</h1>
      <div className="featuredProductsContainer">
        <div>{sellerFeaturedProducts[0]}</div>
        <div>{sellerFeaturedProducts[0]}</div>
        <div>{sellerFeaturedProducts[0]}</div>
      </div>
    </div>
  );
};

export default Product;
