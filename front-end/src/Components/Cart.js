import { useRef, useEffect } from "react";

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
    let number = 1;
    const price = item.price * item.quantity;
    total += price;

    return (
      <div className="cart" key={i}>
        <div class="column is-half">
          <div class="card has-background-primary my-3">
            <div class="columns is-half">
              <div class="column is-one-third">
                <h3>
                  <strong>{item.name}</strong>
                </h3>
                <img
                  src={item.image}
                  alt="{item.description}"
                  style={{ "max-height": "110px" }}
                />
              </div>
              <div class="column is-1">${item.price}</div>
              <div class="column is-1">
                <button
                  className="plus-btn"
                  name={i}
                  id="plus"
                  onClick={handleQuantity}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="minus-btn"
                  name={i}
                  id="minus"
                  onClick={handleQuantity}
                >
                  -
                </button>
              </div>
              <div class="column is-1">
                <button onClick={() => deleteItem(i)}>REMOVE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="total-price">
        {products}
        Total: ${total}
    </div>
  );
};

export default Cart;
