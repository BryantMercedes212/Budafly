import { useRef, useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, deleteItem, setCart }) => {
  let total = 0;

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
    total += item.price * item.quantity;

    return (
      <div className="lines">
        <div className="itemContainer">
          <div className="cartImage">
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
            <div className="removeButton">
              <button onClick={() => deleteItem(i)}>REMOVE</button>{" "}
            </div>
          </div>
          <div className="cartItemPrice">${item.price}.00</div>
        </div>
      </div>
    );
  });

  return (
    <div className="shoppingCartContainer">
      <h1 className="shoppingCart">Shopping Cart</h1>
      <div className="cartContainer">
        <div className="cartItems">{products}</div>
        <div className="total">Total: ${total}</div>
      </div>
    </div>
  );
};

export default Cart;
