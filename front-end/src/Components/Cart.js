import { useRef } from "react";

const Cart = ({ cart }) => {
  const total = useRef(0);
  const products = cart.map((item, i) => {
    total.current += item.price;

    return (
      <article key={i}>
        {" "}
        <h1>{item.name}</h1>
        <h3>${item.price}</h3>
      </article>
    );
  });

  return (
    <>
      {products}${total.current}
    </>
  );
};

export default Cart;
