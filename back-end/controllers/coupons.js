const express = require("express");

const { getOne, createOne, updateOne } = require("../queries/coupons");

// Configuration
const coupons = express.Router({ mergeParams: true });

coupons.post("/", async (request, response) => {
  if (request.body.coupon !== "") {
    const coupon = await getOne(request.body.coupon);
    if (coupon) {
      response
        .status(200)
        .json({ message: "coupon already exist", code: coupon });
    } else {
      const newCoupon = await createOne(request.body);
      response.status(200).json(newCoupon);
    }
  }
});

coupons.post("/use", async (request, response) => {
  const coupon = await getOne(request.body.coupon);
  if (coupon.used === true) {
    response.status(200).json({ message: "coupon has been used" });
  } else if (coupon) {
    const updateCoupon = await updateOne(request.body.coupon);
    response.status(200).json(updateCoupon);
  } else {
    response.status(202).json({ message: "coupon doesn't exist" });
  }
});

module.exports = coupons;
