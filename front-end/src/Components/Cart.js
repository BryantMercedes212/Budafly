import { useRef, useEffect } from "react";

const Cart = ({ cart, deleteItem, setCart }) => {
  let total = 0;
  let refresh = 0;

  useEffect(() => {}, [refresh]);

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
      <div className="cart">
        <div className="item" key={i}>
          {" "}
          <div className="image">
            <img src={item.image} />
          </div>
          <div className="name">{item.name}</div>
          <div className="price">${price}</div>
          <div className="quantity">
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
          <button onClick={() => deleteItem(i)}>REMOVE</button>
        </div>
      </div>
    );
  });

  {
  }
  return (
    <div className="total-price">
      {products} Total: ${total}
    </div>
  );
};

export default Cart;
