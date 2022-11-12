import axios from "axios";

import { useEffect, useState } from "react";

function CouponGenerator() {
  const coupon = {
    coupon: "",
    percentage: 15,
  };
  const [message, setMessage] = useState("");

  const URL = process.env.REACT_APP_API_URL;

  const alphabet = "zxcvbnmasdfghjklqwertyuiop";

  const fetchCoupon = async () => {
    axios.post(`${URL}/coupons`, coupon).then((res) => {
      console.log(res.data);
      if (res.data.message) {
        setMessage(res.data.message);
      }
    });
    // .catch((error) => alert("Invalid email and/or password!"));
  };

  useEffect(() => {
    while (coupon.coupon.length < 8) {
      if (coupon.coupon.length % 2 !== 0) {
        coupon.coupon += Math.floor(Math.random() * 10);
      } else {
        coupon.coupon += alphabet[Math.floor(Math.random() * 26)];
      }
      console.log(coupon.coupon);
    }

    fetchCoupon();
  }, [message]);

  return;
}

export default CouponGenerator;
