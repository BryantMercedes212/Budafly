import { useRef } from "react";

const Cart = ({ cart, deleteItem }) => {
  
  let total = 0;
  const products = cart.map((item, i) => {
    total += item.price;
    console.log(total);
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
