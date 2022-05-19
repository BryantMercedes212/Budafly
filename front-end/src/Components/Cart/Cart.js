import { Component } from "react";

class Cart extends Component {
  render() {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return (
      <div className="shoppingCart">
        <h2>This is the Cart</h2>
        <br></br>
        <br></br>
        <ul>
          <li></li>
        </ul>
        <h3>Subtotal: $</h3>
        <h3>Tax: $</h3>
        <h3>Total: $</h3>
      </div>
    );
  }
}

export default Cart;
