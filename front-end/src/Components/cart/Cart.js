import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import "./Cart.css";
import Loader from "../loader/Loader";

const Cart = ({ cart, deleteItem, setCart }) => {
  let total = 0;
  let quantity = 0;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleQuantity = (e) => {
    setCart(
      cart.map((item, i) => {
        if (e.target.id === "plus") {
          if (i === Number(e.target.name)) {
            item.quantity = item.quantity + 1;
          }
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          if (i === Number(e.target.name)) {
            if (item.quantity > 1) {
              item.quantity = item.quantity - 1;
            }

            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }

        return item;
      })
    );
  };
  const products = cart.map((item, i) => {
    quantity += item.quantity;
    total += item.price * item.quantity;

    return (
      <div className="lines">
        <div className="itemContainer">
          <div
            className="cartImage"
            onClick={() => navigate(`/products/${item.id}`)}
          >
            <img src={item.image} alt="" />
          </div>
          <div className="cartItemInformation">
            <div className="cartItemName">{item.name}</div>
            <div className="quantityContainer">
              <div className="quantityLabel">Quantity</div>
              <div className="cartItemButtons">
                <button
                  className="plus-btn"
                  name={i}
                  id="plus"
                  onClick={handleQuantity}
                >
                  +
                </button>
                <div className="quantity">
                  <p>{item.quantity}</p>
                </div>
                <button
                  className="minus-btn"
                  name={i}
                  id="minus"
                  onClick={handleQuantity}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="cartPriceAndRemove">
            {" "}
            <div className="cartItemPrice">${item.price}.00</div>{" "}
            <div className="removeButton">
              <button onClick={() => deleteItem(i)}>REMOVE</button>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  });

  setTimeout(function () {
    setIsLoading(false);
  }, 1000);

  return isLoading ? (
    <Loader />
  ) : cart.length ? (
    <div className="shoppingCartContainer">
      <h1 className="shoppingCart">Shopping Cart</h1>
      <div className="cartContainer">
        <div className="cartItems">{products}</div>
        <div className="totalContainer">
          <div className="total">
            <div>
              {" "}
              {total >= 50 ? (
                <div>
                  {" "}
                  <span>Your order qualifies for FREE Shipping.</span> Choose
                  this option at checkout.
                </div>
              ) : (
                <div>
                  You Are ${50 - total} away from{" "}
                  {<span className="away">Free Shipping.</span>}
                </div>
              )}{" "}
            </div>
            <div className="subTotal">
              <div>SubTotal ({quantity}): </div>
              <div>${total}</div>
            </div>
            <div className="toCheckOutButton">
              {" "}
              <button onClick={() => navigate(`/checkOut`)}>
                Proceed to Checkout{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Cart;
