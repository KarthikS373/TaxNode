import axios from "axios";

const AMOUNT = process.env.AMOUNT || 0;
const DISCOUNT = process.env.DISCOUNT || 0;

export default async function handler(req, res) {
  try {
    res.status(200).send({
      status: true,
      message: "Operation successful",
      data: {
        amount: AMOUNT,
        discount: DISCOUNT,
      },
    });
  } catch (error) {
    console.log("This is in catch block; error.message: ", error.message);
    res.status(400).send({
      status: false,
      message: "Operation Failed",
    });
  }
}
