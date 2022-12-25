import axios from "axios";

const COUPON = process.env.COUPON || "71337436763979244226452948404D63";
const COUPON_DISCOUNT = process.env.COUPON_DISCOUNT;

export default async function handler(req, res) {
  try {
    const { method } = req;
    const { coupon } = req.query;

    if (method !== "POST") {
      console.log("This is not a POST request");
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }

    // Basic Validation
    if (!coupon) {
      return res.status(400).send({
        status: false,
        message: "Operation failed - No valid query parameters",
      });
    }

    if (COUPON && coupon.toLowerCase() === COUPON.toLowerCase()) {
      return res.status(200).send({
        status: true,
        data: {
          valid: true,
          discount: COUPON_DISCOUNT,
        },
        message: "Operation Succeeded",
      });
    }

    res.status(202).send({
      status: true,
      data: {
        valid: false,
        discount: null,
      },
      message: "not a valid coupon",
    });
  } catch (error) {
    console.log("This is in catch block; error.message: ", error.message);
    res.status(400).send({
      status: false,
      message: "Operation Failed",
    });
  }
}
