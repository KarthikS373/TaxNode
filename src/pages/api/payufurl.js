import dbConnect from "../../../lib/dbConnect";
import paymentModel from "../../../models/payment";
import formData from "form-data";

// CORS
const Cors = require("cors");
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Formidable
const formidable = require("formidable");
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      console.log("This is not a POST request");
      return res.status(400).send({
        status: false,
        message: "Operation Failed",
      });
    }

    // Run the middleware
    await runMiddleware(req, res, cors); // CORS
    await dbConnect(); // Database connection

    // Redirection
    res.redirect(301, "/sorry");

    // Formidable
    let data = await new Promise((resolve, reject) => {
      const form = formidable();
      form.parse(req, (err, fields, files) => {
        if (err) reject({ err });
        resolve({ err, fields, files });
      });
    });
    data = data.fields;

    const {
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      status,
      phone,
      mihpayid,
      mode,
      unmappedstatus,
      cardCategory,
      discount,
      net_amount_debit,
      addedon,
      lastname,
      address1,
      address2,
      city,
      state,
      country,
      zipcode,
      udf1,
      udf2,
      udf3,
      udf4,
      udf5,
      udf6,
      udf7,
      udf8,
      udf9,
      udf10,
      hash,
      field1,
      field2,
      field3,
      field4,
      field5,
      field6,
      field7,
      field8,
      field9,
      payment_source,
      PG_TYPE,
      bank_ref_num,
      bankcode,
      error,
      error_Message,
      name_on_card,
      cardnum,
      cardhash,
    } = data;

    // Payment updation
    payment = await paymentModel.findOneAndUpdate(
      { txnid: txnid },
      {
        mihpayid: mihpayid,
        mode: mode,
        status: status,
        unmappedstatus: unmappedstatus,
        txnid: txnid,
        amount: amount,
        cardCategory: cardCategory,
        discount: discount,
        net_amount_debit: net_amount_debit,
        addedon: addedon,
        productinfo: productinfo,
        firstname: firstname,
        lastname: lastname,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        country: country,
        zipcode: zipcode,
        email: email,
        phone: phone,
        udf1: udf1,
        udf2: udf2,
        udf3: udf3,
        udf4: udf4,
        udf5: udf5,
        udf6: udf6,
        udf7: udf7,
        udf8: udf8,
        udf9: udf9,
        udf10: udf10,
        hash: hash,
        field1: field1,
        field2: field2,
        field3: field3,
        field4: field4,
        field5: field5,
        field6: field6,
        field7: field7,
        field8: field8,
        field9: field9,
        payment_source: payment_source,
        PG_TYPE: PG_TYPE,
        bank_ref_num: bank_ref_num,
        bankcode: bankcode,
        error: error,
        error_Message: error_Message,
        name_on_card: name_on_card,
        cardnum: cardnum,
        cardhash: cardhash,
        confirmed_status: false,
      },
      { new: true, upsert: true }
    );
  } catch (error) {
    console.log("This is in catch block; error.message: ", error.message);
    res.status(400).send({
      status: false,
      message: "Operation Failed",
    });
  }
}
