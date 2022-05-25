import { useRef } from "react";

const Cart = ({ cart, deleteItem }) => {
  let total = 0;
  const products = cart.map((item, i) => {
    total += item.price;
    console.log(total);
    return (
      <article key={i}>
        <div className="itemInformation">
          {" "}
          <h1>{item.name}</h1>
          <h3>${item.price}</h3>
        </div>
        <div className="cartButtons">
          <button onClick={() => deleteItem(i)}> yo</button>
        </div>
      </article>
    );
  });

  return (
    <>
      {products}${total}
    </>
  );
};

export default Cart;
