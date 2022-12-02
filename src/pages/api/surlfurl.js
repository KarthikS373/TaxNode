export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      console.log("This is not a POST request");
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }
    res.redirect(301, "/thankyou");
  } catch (error) {
    console.log("This is in catch block; error.message: ", error.message);
    res.status(400).send({
      status: false,
      message: "Operation Failed",
    });
  }
}
