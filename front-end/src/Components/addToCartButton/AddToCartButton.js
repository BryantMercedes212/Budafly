import LoopIcon from "@mui/icons-material/Loop";
import { useState } from "react";

const CartButton = ({ addItem, product }) => {
  product.inCart = false;
  const [loading, setLoading] = useState(false);
  const [itemInCart, setItemInCart] = useState(false);

  const handleAddToCart = (e) => {
    if (product.inCart) {
      return;
    } else {
      setLoading(true);
      setTimeout(function () {
        setItemInCart(true);
        setLoading(false);
      }, 500);
    }
  };

  <div
    className="productCard__addToCart"
    onClick={() => {
      addItem(product);
      handleAddToCart();
    }}
    id={product.id}
  >
    {!itemInCart && !loading && "Add To Cart"}
    {!itemInCart && loading && <LoopIcon className="loader" fontSize="small" />}
    {itemInCart && "View Cart"}
  </div>;
};

export default CartButton;
