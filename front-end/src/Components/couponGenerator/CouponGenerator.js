import axios from "axios";
import "animate.css";
import "./CouponGenerator.css";

import { useEffect, useState } from "react";

function CouponGenerator({ discount = 10, setDiscountCode }) {
  const [coupon, setCoupon] = useState("");
  let i = 0;
  let code = "";
  const [message, setMessage] = useState("");

  const URL = process.env.REACT_APP_API_URL;

  const alphabet = "zxcvbnmasdfghjklqwertyuiop";

  useEffect(() => {
    while (code.length < 8) {
      if (code.length % 2 !== 0) {
        code += Math.floor(Math.random() * 10);
      } else {
        code += alphabet[Math.floor(Math.random() * 26)];
      }
    }
    setDiscountCode(code);
    setCoupon(code);
  }, [message]);

  const fetchCoupon = async () => {
    axios
      .post(`${URL}/coupons`, { coupon: coupon, percentage: discount })
      .then((res) => {
        if (res.data.message) {
          setMessage(res.data.message);
        }
      });
    // .catch((error) => alert("Invalid email and/or password!"));
  };

  useEffect(() => {
    fetchCoupon();
  }, [coupon, message]);

  return (
    <div class="animate__animated animate__rollIn">
      <div className="couponGeneratorTitle">
        Congratulations You have Earn a {discount}% discount 🎉🥳🍾
      </div>
      <div className="coupon"> {coupon} </div>
    </div>
  );
}

export default CouponGenerator;
