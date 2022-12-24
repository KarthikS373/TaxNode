export default async function handler(req, res) {
  try {
    const { method } = req;
    const { coupon } = req.query;

    // If method is not POST
    if (method !== "POST") {
      console.log("This is not a POST request");
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }

    // If coupon is invalid / not present (query param)
    if (coupon !== process.env.COUPON) {
      console.log("Invalid Coupon", coupon);
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }

    // If coupon is valid
    console.log("Valid Coupon", coupon);
    res.status(200).send({
      status: true,
      message: "Operation Succeeded",
    });
  } catch (error) {
    console.log("This is in catch block; error.message: ", error.message);
    res.status(400).send({
      status: false,
      message: "Operation Failed",
    });
  }
}
