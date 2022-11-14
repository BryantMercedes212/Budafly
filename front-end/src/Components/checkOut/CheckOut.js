import listOfStates from "../../assets/state.json";
import monthsList from "../../assets/months.json";
import { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import Loader from "../loader/Loader";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from "@mui/material";
import "./CheckOut.css";
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

  //populating the months
  while (i <= 12) {
    months.push(<MenuItem value={i}>{i}</MenuItem>);
    i++;
  }
  //populating the years
  while (year <= 2042) {
    years.push(<MenuItem value={year}>{year}</MenuItem>);
    year++;
  }

  //populating the states
  for (const [key, value] of Object.entries(listOfStates)) {
    states.push(<MenuItem value={value}>{key}</MenuItem>);
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
  }, 1500);

  const handleClick = () => {};

  return isLoading ? (
    <Loader />
  ) : (
    <div className="checkoutContainer">
      <div className="checkOut">
        <h1>Checkout</h1>
        <div className="checkoutInformation">
          <div className="shippingInformationContainer">
            <h2> Shipping Information</h2>
            <form id="checkout">
              <label>
                {" "}
                <TextField
                  variant="standard"
                  margin="normal"
                  label="First Name"
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{
                    style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                  }}
                  name="firstName"
                  value={shipping.firstName}
                  onChange={handleChange}
                />
                <br></br>
              </label>
              <label>
                <TextField
                  variant="standard"
                  margin="normal"
                  label="Last Name"
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{
                    style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                  }}
                  name="lastName"
                  value={shipping.lastName}
                  onChange={handleChange}
                />
                <br></br>
              </label>
              <label>
                <TextField
                  variant="standard"
                  margin="normal"
                  label="Email"
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{
                    style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                  }}
                  name="email"
                  value={shipping.email}
                  onChange={handleChange}
                />

                <br></br>
              </label>
              <label>
                <TextField
                  variant="standard"
                  margin="normal"
                  label="Address 1"
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{
                    style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                  }}
                  name="address1"
                  value={shipping.address1}
                  onChange={handleChange}
                />

                <br></br>
              </label>
              <label>
                <TextField
                  variant="standard"
                  margin="normal"
                  label="Address 2"
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{
                    style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                  }}
                  name="address2"
                  value={shipping.address2}
                  onChange={handleChange}
                />

                <br></br>
              </label>
              <label>
                <TextField
                  variant="standard"
                  margin="normal"
                  label="City"
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{
                    style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                  }}
                  name="city"
                  value={shipping.city}
                  onChange={handleChange}
                />

                <br></br>
              </label>
              <label>
                <br></br>

                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-required-label">
                    <div className="state">State</div>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    label="State j"
                    name="state"
                    value={shipping.state}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {states}
                  </Select>
                </FormControl>

                <br></br>
              </label>
              <div>
                <label>
                  <TextField
                    variant="standard"
                    margin="normal"
                    label="Zip Code"
                    inputProps={{ style: { fontSize: 20 } }}
                    InputLabelProps={{
                      style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                    }}
                    name="zipCode"
                    value={shipping.zipCode}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <br></br>
            </form>
          </div>
          <div className="cardInformationContainer">
            <form id="cardInformation">
              <label>
                <h2>Card Information</h2>

                <TextField
                  variant="standard"
                  margin="normal"
                  label="Card Number"
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{
                    style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                  }}
                  name="cardNumber"
                  value={shipping.cardNumber}
                  onChange={handleChange}
                />
              </label>
              <br></br>
              <label>
                <TextField
                  variant="standard"
                  margin="normal"
                  label="Name on Card"
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{
                    style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                  }}
                  name="nameOnCard"
                  value={shipping.nameOnCard}
                  onChange={handleChange}
                />
              </label>
              <label>
                <div className="label">Expiration Date</div>

                <br></br>
                <FormControl sx={{ minWidth: 89 }} size="small">
                  <InputLabel id="demo-simple-select-required-label">
                    <div className="expiration">Month</div>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    label="Month j"
                    id="months"
                    name="expirationMonth"
                    value={shipping.expirationMonth}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {months}
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 80 }} size="small">
                  <InputLabel id="demo-simple-select-required-label">
                    <div className="expiration">Year</div>
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    label="Year j"
                    id="years"
                    name="expirationYears"
                    value={shipping.expirationYear}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {years}
                  </Select>
                </FormControl>
              </label>
              <div className="sameBilling">
                <Checkbox
                  color="success"
                  onClick={handleChange}
                  name="sameBillingAddress"
                  value={shipping.sameBillingAddress}
                  checked={!shipping.sameBillingAddress}
                />
                <div className="sameBillingText">
                  Billing Address: Same as shipping Address
                </div>
              </div>
              {shipping.sameBillingAddress && (
                <div>
                  <label>
                    <TextField
                      variant="standard"
                      margin="normal"
                      label="Billing Address 1"
                      inputProps={{ style: { fontSize: 20 } }}
                      InputLabelProps={{
                        style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                      }}
                      name="billingAddress1"
                      value={shipping.billingAddress1}
                      onChange={handleChange}
                    />
                  </label>
                  <br></br>
                  <label>
                    <TextField
                      variant="standard"
                      margin="normal"
                      label="Billing Address 2"
                      inputProps={{ style: { fontSize: 20 } }}
                      InputLabelProps={{
                        style: { fontSize: 22, color: "rgb(64, 121, 86)" },
                      }}
                      name="billingAddress2"
                      value={shipping.billingAddress2}
                      onChange={handleChange}
                    />
                    <br></br>
                  </label>
                </div>
              )}
            </form>
          </div>
          <div className="couponContainer">
            <h2 className="coupon">
              Add a gift card, promotion code, or voucher
            </h2>

            <TextField
              variant="standard"
              margin="normal"
              label="Coupon"
              inputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{
                style: { fontSize: 22, color: "rgb(64, 121, 86)" },
              }}
              name="coupon"
              value={shipping.coupon}
              onChange={handleChange}
            />
            <Button variant="contained" size="small" color="success">
              Apply Coupon
            </Button>
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
            <div className="finalPriceInformation">
              {" "}
              <div className="finalPriceNumber">
                Order total:{" "}
                {(total + total * (4 / 100) + Number(shippingFee)).toFixed(2)}
              </div>
            </div>
            <div className="placeOrder">
              <button>Place your order</button>
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
