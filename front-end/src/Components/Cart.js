import { useRef, useState } from "react";


const Cart = ({ cart, deleteItem }) => {
  let total = 0;
  // const [count, setCount] = useState(0);
  const increment = (number) => {
    number ++;
  };
  const decrement = (number) => {
    number --;
  };
  const products = cart.map((item, i) => {
    total += item.price;
    let number = 1
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
            <button onClick={increment(number)} className="plus-btn">
              +
            </button>
            <p>{number}</p>
            <button onClick={decrement(number)} className="minus-btn">
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
