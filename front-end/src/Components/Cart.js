import { useRef } from "react";

const Cart = ({ cart }) => {
  const total = useRef(0);
  const products = cart.map((item, i) => {
    console.log("price", item.price);
    total.current += item.price;

    return (
      <article key={i}>
        {" "}
        <h1>{item.name}</h1>
        <h3>${item.price}</h3>
      </article>
    );
  });

  console.log(total.current);
  return (
    <>
      {products}${total.current}
    </>
  );
};

export default Cart;
