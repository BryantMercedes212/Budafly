const express = require("express");

const { getOne, createOne, updateOne } = require("../queries/coupons");

// Configuration
const coupons = express.Router({ mergeParams: true });

coupons.post("/", async (request, response) => {
  console.log("GET request to /couponsssss", request.body);

  const coupon = await getOne(request.body.coupon);

  if (coupon) {
    response
      .status(200)
      .json({ message: "coupon already exist", code: coupon });
  } else {
    const newCoupon = await createOne(request.body);
    console.log(newCoupon);
    response.status(200).json(newCoupon);
  }
});

module.exports = coupons;
