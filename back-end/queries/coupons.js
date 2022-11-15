const db = require("../db/dbConfig.js");

const getOne = async (coupon) => {
  try {
    const one = await db.one("SELECT * FROM coupons WHERE coupon=$1", coupon);
    return one;
  } catch (error) {
    return false;
  }
};

const createOne = async (couponBody) => {
  try {
    let { coupon, percentage } = couponBody;
    const newOne = await db.one(
      "INSERT INTO coupons (coupon, percentage) VALUES ($1, $2) RETURNING * ",
      [coupon, percentage]
    );
    return newOne;
  } catch (error) {
    return error;
  }
};

const updateOne = async (coupon) => {
  try {
    const updatedOne = await db.one(
      "UPDATE coupons SET used=$2 WHERE coupon=$1 RETURNING *",
      [coupon, true]
    );

    return updatedOne;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getOne,
  createOne,
  updateOne,
};
