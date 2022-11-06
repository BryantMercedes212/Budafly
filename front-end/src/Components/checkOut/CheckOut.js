import "./CheckOut.css";
import listOfStates from "../../assets/state.json";
import monthsList from "../../assets/months.json";
import { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";

const Checkout = ({ cart, setCart, deleteItem }) => {
  let i = 1;
  let total = 0;
  let quantity = 0;
  let year = 2022;
  const years = [];
  const months = [];
  const states = [];
  const hourAndMinute = [new Date().getHours(), new Date().getMinutes()];
  const timeUntilNextDay = hourAndMinute;
  const daysAhead = [];
  const [isLoading, setIsLoading] = useState(true);
  const [shipping, setShipping] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    nameOnCard: "",
    expirationMonth: "",
    expirationYear: "",
    coupon: "",
    sameBillingAddress: true,
    billingAddress1: "",
    billingAddress2: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shippingFee, setShippingFee] = useState(0);

  //Getting Hours Until next Day
  if (hourAndMinute[1] !== 0) {
    timeUntilNextDay[0] = 24 - hourAndMinute[0];
    timeUntilNextDay[1] = 60 - hourAndMinute[1];
  }

  //Creating Shipping Dates
  for (let i = 0; i < 3; i++) {
    let date = new Date().toJSON().slice(0, 10).split("-");

    if (i === 0) {
      date[2] = Number(date[2]) + 2;
      date[1] = monthsList[date[1]];

      daysAhead.push(date);
    }
    if (i === 1) {
      date[2] = Number(date[2]) + 4;
      date[1] = monthsList[date[1]];

      daysAhead.push(date);
    }
    if (i === 2) {
      date[1] = monthsList[date[1]];
      date[2] = Number(date[2]) + 7;
      daysAhead.push(date);
      break;
    }
  }
  const [deliveryDate, setDeliveryDate] = useState(daysAhead[0]);
  console.log(shippingFee);
  //populating the months
  while (i <= 12) {
    months.push(<option value={i}>{i}</option>);
    i++;
  }
  //populating the years
  while (year <= 2042) {
    years.push(<option value={year}>{year}</option>);
    year++;
  }

  //populating the states
  for (const [key, value] of Object.entries(listOfStates)) {
    states.push(<option value={value}>{key}</option>);
  }

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

  const handleChange = (evt) => {
    const value = evt.target.value;
    console.log(evt.target.name, value);
    if (evt.target.name === "sameBillingAddress") {
      setShipping({
        ...shipping,
        [evt.target.name]: !shipping.sameBillingAddress,
      });
    } else if (evt.target.name === "deliveryDate") {
      setShippingFee(evt.target.id);
      setDeliveryDate(value.split(","));
    } else {
      setShipping({
        ...shipping,
        [evt.target.name]: value,
      });
    }
  };

  const products = cart.map((item, i) => {
    quantity += item.quantity;
    total += item.price * item.quantity;

    return (
      <div className="checkOutItemContainer">
        <div className="checkoutItemImage">
          <img src={item.image} alt="" />
        </div>
        <div className="cartItemInformation">
          <div className="cartItemName">{item.name}</div>
          <div className="checkOutItemPrice">${item.price}.00</div>
          <div className="checkOutQuantityContainer">
            <div className="checkOutQuantityLabel">Quantity</div>
            <div className="checkOutItemButtons">
              <button
                className="plus-btn"
                name={i}
                id="plus"
                onClick={handleQuantity}
              >
                +
              </button>
              <div className="checkOutQuantity">
                <p>{item.quantity}</p>
              </div>
              <button
                className="minus-btn"
                name={i}
                id="minus"
                onClick={handleQuantity}
              >
                -
              </button>
            </div>
          </div>
          <div className="checkOutRemoveButton">
            <button onClick={() => deleteItem(i)}>REMOVE</button>{" "}
          </div>
        </div>
      </div>
    );
  });

  setTimeout(function () {
    setIsLoading(false);
  }, 1000);

  return isLoading ? (
    <div className="loading">
      <BarLoader
        height={30}
        width={500}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="green"
      />
    </div>
  ) : (
    <div className="checkoutContainer">
      <div className="checkOut">
        <h1>Checkout</h1>
        <div className="checkoutInformation">
          <div>
            <h2> Shipping Information</h2>
            <form id="checkout">
              <label>
                <div className="label">First Name</div>
                <br></br>
                <input
                  type="text"
                  name="firstName"
                  value={shipping.firstName}
                  onChange={handleChange}
                ></input>
                <br></br>
              </label>
              <label>
                <div className="label"> Last Name</div>

                <br></br>
                <input
                  type="text"
                  name="lastName"
                  value={shipping.lastName}
                  onChange={handleChange}
                ></input>
                <br></br>
              </label>
              <label>
                <div className="label">Email</div>

                <br></br>
                <input
                  type="email"
                  name="email"
                  value={shipping.email}
                  onChange={handleChange}
                ></input>
                <br></br>
              </label>
              <label>
                <div className="label"> Address 1</div>
                <br></br>
                <input
                  type="text"
                  name="address1"
                  value={shipping.address1}
                  onChange={handleChange}
                ></input>
                <br></br>
              </label>
              <label>
                <div className="label"> Address 2</div>
                <br></br>
                <input
                  type="text"
                  name="address2"
                  value={shipping.address2}
                  onChange={handleChange}
                ></input>
                <br></br>
              </label>
              <label>
                <div className="label">City</div>
                <br></br>
                <input
                  type="text"
                  name="city"
                  value={shipping.city}
                  onChange={handleChange}
                ></input>
                <br></br>
              </label>
              <label>
                <div className="label">State</div>
                <br></br>
                <select
                  name="state"
                  value={shipping.state}
                  onChange={handleChange}
                >
                  {states}
                </select>
                <br></br>
              </label>

              <label>
                <div className="label"> Zip Code</div>

                <br></br>
                <input
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={shipping.zipCode}
                  onChange={handleChange}
                ></input>
              </label>
              <br></br>
            </form>
          </div>
          <div>
            <form id="cardInformation">
              <label>
                <h2>Card Information</h2>
                <div className="label"> Card Number</div>

                <br></br>
                <input
                  type="text"
                  name="cardNumber"
                  value={shipping.cardNumber}
                  onChange={handleChange}
                ></input>
              </label>
              <br></br>
              <label>
                <div className="label">Name on Card</div>

                <br></br>
                <input
                  type="text"
                  name="nameOnCard"
                  value={shipping.nameOnCard}
                  onChange={handleChange}
                ></input>
              </label>
              <label>
                <div className="label">Expiration Date</div>

                <br></br>

                <select
                  id="months"
                  name="expirationMonth"
                  value={shipping.expirationMonth}
                  onChange={handleChange}
                >
                  {months}
                </select>
                <select
                  id="years"
                  name="expirationYears"
                  value={shipping.expirationYear}
                  onChange={handleChange}
                >
                  {years}
                </select>
              </label>
              <div className="sameBilling">
                <input
                  type="checkbox"
                  class="sameBillingCheckBox"
                  onClick={handleChange}
                  name="sameBillingAddress"
                  value={shipping.sameBillingAddress}
                />
                <span>Billing Address: </span> Same as shipping Address
              </div>
              {shipping.sameBillingAddress && (
                <div>
                  {" "}
                  <label>
                    <div className="label">Billing Address 1</div>

                    <br></br>
                    <input
                      type="text"
                      name="billingAddress1"
                      value={shipping.billingAddress1}
                      onChange={handleChange}
                    ></input>
                  </label>
                  <label>
                    <div className="label">Billing Address 2</div>
                    <br></br>
                    <input
                      type="text"
                      name="billingAddress2"
                      value={shipping.billingAddress2}
                      onChange={handleChange}
                    ></input>
                    <br></br>
                  </label>
                </div>
              )}
            </form>
          </div>
          <div>
            <h2>Add a gift card, promotion code, or voucher</h2>

            <input type="text"></input>
            <button>Apply</button>
          </div>
          <div className="submitButton">
            {" "}
            <button> Submit</button>
          </div>
        </div>
        <div className="checkoutProductsContainer">
          <div className="delivery">
            <div className="deliveryInformation">
              <p className="deliveryDate">
                <span>
                  Delivery by date: {deliveryDate[1]}. {deliveryDate[2]},{" "}
                  {deliveryDate[0]}
                </span>
                If you order in the next {timeUntilNextDay[0]} hours and{" "}
                {timeUntilNextDay[1]} minutes{" "}
              </p>
            </div>
            <div className="deliveryItems">
              <div className="checkoutProducts">{products}</div>
              <div className="deliveryDatesOption">
                <div className="deliveryDatesTitle">
                  Choose a delivery option:
                </div>
                {total >= 50 ? (
                  <div className="optionContainer">
                    <div className="option">
                      <input
                        type="radio"
                        class="checkbox-round"
                        name="deliveryDate"
                        onClick={handleChange}
                        value={daysAhead[2]}
                        id="0"
                      />
                      {daysAhead[2][1]}. {daysAhead[2][2]}, {daysAhead[2][0]}
                    </div>
                    <div className="price">Free Shipping</div>
                  </div>
                ) : (
                  <div className="optionContainer">
                    <div className="option">
                      <input
                        type="radio"
                        class="checkbox-round"
                        name="deliveryDate"
                        onClick={handleChange}
                        value={daysAhead[2]}
                        id="3.99"
                      />
                      {daysAhead[2][1]}. {daysAhead[2][2]}, {daysAhead[2][0]}
                    </div>
                    <div className="price">3.99 - Shipping</div>
                  </div>
                )}

                <div className="optionContainer">
                  <div className="option">
                    <input
                      type="radio"
                      class="checkbox-round"
                      name="deliveryDate"
                      onClick={handleChange}
                      value={daysAhead[1]}
                      id="5.99"
                    />
                    {daysAhead[1][1]}. {daysAhead[1][2]}, {daysAhead[1][0]}
                  </div>
                  <div className="price">$5.99 - Shipping</div>
                </div>
                <div className="optionContainer">
                  <div className="option">
                    <input
                      type="radio"
                      class="checkbox-round"
                      name="deliveryDate"
                      onClick={handleChange}
                      value={daysAhead[0]}
                      id="15.99"
                    />
                    {daysAhead[0][1]}. {daysAhead[0][2]}, {daysAhead[0][0]}
                  </div>

                  <div className="price">15.99 - Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="finalPriceContainer">
          <div className="finalPrice">
            <div className="placeOrder">
              <button>Place your order</button>
            </div>
            <div className="finalPriceInformation">
              {" "}
              <div className="finalPriceNumber">
                Order total:{" "}
                {(total + total * (4 / 100) + Number(shippingFee)).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="priceSummary">
        <div className="priceSummaryInformation">
          <div className="placeOrderSummary">
            <button>Place your order</button>
          </div>
          <div className="orderSummary">Order Summary</div>
          <div className="priceSummaryItem">
            <div>items({quantity}):</div>
            <div>${total}</div>
          </div>
          <div className="priceSummaryItem">
            <div>Shipping & handling:</div>
            <div className="lilLine">
              <div>${shippingFee}</div>
            </div>
          </div>
          <div className="priceSummaryItem">
            <div>Total before tax:</div>
            <div>${(total + Number(shippingFee)).toFixed(2)}</div>
          </div>
          <div className="priceSummaryItem" id="longLine">
            <div>Estimated tax to be collected:</div>
            <div className="taxes">${(total * (4 / 100)).toFixed(2)}</div>
          </div>
          <div className="priceSummaryTotal">
            <div> Order total: </div>
            <div>
              ${(total + total * (4 / 100) + Number(shippingFee)).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
