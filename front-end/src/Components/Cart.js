import { useRef } from "react";

const Cart = ({ cart }) => {
  const total = useRef(0);
  const products = cart.map((item, i) => {
    total.current += item.price;

    return (
      <div className="cart">
        <div className="item" key={i}>
          {" "}
          <div className="image">
            <img src={item.image} />
          </div>
          <div className="name">{item.name}</div>
          <div className="price">${item.price}</div>
          <div className="quantity">
            <button className="plus-btn">+</button>
            <p>1</p>
            <button className="minus-btn">-</button>
          </div>
        </div>
      </div>
    );
  });

  {
  }
  return (
    <div className="total-price">
      {products} Total: ${total.current}
    </div>
  );
};

export default Cart;
